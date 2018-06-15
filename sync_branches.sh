#!/bin/bash
branches=()
eval "$(git for-each-ref --shell --format='branches+=(%(refname))' refs/heads/)"
for branch in "${branches[@]}"; do
  if [[ "${branch}" != "master" ]]; then
    git checkout ${branch}
    git checkout master -- README.md
    git commit -a -m "sync README.md"
  fi
done

git checkout master
