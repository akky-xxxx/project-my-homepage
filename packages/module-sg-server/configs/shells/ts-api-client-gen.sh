#!/bin/bash

docker run --rm \
  -v "${PWD}/src:/src" \
  -v "${PWD}/src/libs/bffApiClient:/dist" \
  openapitools/openapi-generator-cli generate \
    -g typescript-axios \
    -i src/open-api.json \
    -o /dist \
    --model-package model \
    --generate-alias-as-model \
    --additional-properties withInterfaces=true
