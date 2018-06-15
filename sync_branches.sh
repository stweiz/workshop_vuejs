#!/bin/bash
branches=()

eval "$(git for-each-ref --shell --format='branches+=(%(refname))' refs/heads/)"
for branch in "${branches[@]}"; do
  echo $branch
  if [[ "${branch}" != "refs/heads/master" ]]; then
    echo processing branch $branch
    git checkout ${branch}
    git checkout master -- README.md
    git commit -m "sync README.md from master"
  fi
done

#git checkout master
