#!/usr/bin/env bash

# Clone a dummy repo and generate some test documentation

set -x
set -e

# Clone a test docs repo
if [[ -v TEST_DOCS_REPO ]]; then
  git clone $TEST_DOCS_REPO $TRAVIS_BUILD_DIR/test-deploy
fi

# Default to in repo devpage test docs
TEST_BUILD_DIR="devpage/docs"

if [[ -v TEST_DOCS_REPO ]]; then
  TEST_DIR_ARG="-C $TEST_DOCS_DIR"
  TEST_BUILD_DIR=${TEST_BUILD_DIR}
fi

# build some test docs
make $TEST_DIR_ARG html && mv ${TEST_DOCS_DIR}/_build/html $TRAVIS_BUILD_DIR/html
