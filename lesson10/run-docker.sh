#!/usr/bin/env bash

docker run --rm --name wokshop -v dist/:/usr/share/nginx/html nginx:1.15-alpine
