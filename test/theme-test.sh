#!/usr/bin/env bash

set -x
set -e

# Clone a test docs repo
git clone https://github.com/jputrino/test-deploy.git $TRAVIS_BUILD_DIR/test-deploy

# build some test docs
make -C test-deploy/docs/ html && mv test-deploy/docs/_build/html $TRAVIS_BUILD_DIR/html
