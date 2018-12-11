#!/usr/bin/env bash

script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
docker run --rm --name wokshop -p 80:80 -v ${script_dir}/dist:/usr/share/nginx/html nginx:1.15-alpine
