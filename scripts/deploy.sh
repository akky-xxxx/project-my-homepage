#!/bin/bash

source ./.env

SERVICE_NAME=$1
REPOSITORY=$REGION-docker.pkg.dev/$PRODUCTION_ID/cloud-run-source-deploy/$SERVICE_NAME:latest
$2 = true && ENABLE_UNAUTHENTICATED="--allow-unauthenticated" || ENABLE_UNAUTHENTICATED="--no-allow-unauthenticated"

# 要 gcloud auth configure-docker $REGION-docker.pkg.dev の実行
docker build -f packages/$SERVICE_NAME/Dockerfile -t $REPOSITORY .
docker push $REPOSITORY
gcloud run deploy $SERVICE_NAME --image $REPOSITORY --region asia-east1 --platform managed $ENABLE_UNAUTHENTICATED
docker image rm $REPOSITORY

