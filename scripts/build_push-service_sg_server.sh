#!/bin/bash

source ./.env

SERVICE_NAME=service-sg-server
REPOSITORY=$REGION-docker.pkg.dev/$PRODUCTION_ID/cloud-run-source-deploy/$SERVICE_NAME:latest

# 要 gcloud auth configure-docker $REGION-docker.pkg.dev の実行
docker build -f packages/$SERVICE_NAME/Dockerfile -t "$REPOSITORY" .
docker push "$REPOSITORY"

