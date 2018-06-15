#!/bin/bash
branches=()

eval "$(git for-each-ref --shell --format='branches+=(%(refname))' refs/heads/)"
for branch in "${branches[@]}"; do
  BRANCHSHORT=$(echo $branch | awk -F"/" '{print $3}')
  if [[ "${BRANCHSHORT}" != "master" ]]; then
    echo processing branch $BRANCHSHORT
    git checkout $BRANCHSHORT
    git checkout master -- README.md
    git commit -m "sync README.md from master"
  fi
done

#git checkout master
