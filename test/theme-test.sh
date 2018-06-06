#!/usr/bin/env bash

# Clone a dummy repo and generate some test documentation

set -x
set -e

# Default to test docs in repo
TEST_BUILD_DIR="/docs"

if -v TEST_DOCS_REPO ; then
  TEST_DIR_ARG="-C $TEST_DOCS_DIR"
  TEST_BUILD_DIR=${TEST_BUILD_DIR}
fi

# build some test docs
make $TEST_DIR_ARG html && mv ${TEST_BUILD_DIR}/_build/html $TRAVIS_BUILD_DIR/html
