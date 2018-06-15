#!/bin/bash
branches=()

eval "$(git for-each-ref --shell --format='branches+=(%(refname))' refs/heads/)"
for branch in "${branches[@]}"; do
  echo $branch
  BRANCHSHORT=$(awk -F"/" '{print $3}')
  if [[ "${BRANCHSHORT}" != "master" ]]; then
    echo processing branch $BRANCHSHORT
    echo git checkout $BRANCHSHORT
    echo git checkout master -- README.md
    echo git commit -m "sync README.md from master"
  fi
done

#git checkout master
