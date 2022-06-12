#!/bin/bash

source ./.env

SERVICE_NAME=service-client
IS_PROD_MODE=$1
REPOSITORY=$REGION-docker.pkg.dev/$PRODUCTION_ID/cloud-run-source-deploy/$SERVICE_NAME:latest
NEXT_PUBLIC_TITLE_BASE="wandering style"
NEXT_PUBLIC_PRODUCTION_ENVIRONMENT="$IS_PROD_MODE"
"$IS_PROD_MODE" && NEXT_PUBLIC_TITLE=" | $NEXT_PUBLIC_TITLE_BASE"  || NEXT_PUBLIC_TITLE=" | dev $NEXT_PUBLIC_TITLE_BASE"

# 要 gcloud auth configure-docker $REGION-docker.pkg.dev の実行
docker build \
  --build-arg NEXT_PUBLIC_SG_SERVER="$NEXT_PUBLIC_SG_SERVER" \
  --build-arg NEXT_PUBLIC_PRODUCTION_ENVIRONMENT="$NEXT_PUBLIC_PRODUCTION_ENVIRONMENT" \
  --build-arg NEXT_PUBLIC_TITLE="$NEXT_PUBLIC_TITLE" \
  -f packages/"$SERVICE_NAME"/Dockerfile \
  -t "$REPOSITORY" .
docker push "$REPOSITORY"
