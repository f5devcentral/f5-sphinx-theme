#!/usr/bin/env bash

# Clone a dummy repo and generate some test documentation

set -x
set -e

# Clone a test docs repo
git clone $TEST_DOCS_REPO $TRAVIS_BUILD_DIR/test-deploy

# build some test docs
make -C test-deploy/docs/ html && mv test-deploy/docs/_build/html $TRAVIS_BUILD_DIR/html
