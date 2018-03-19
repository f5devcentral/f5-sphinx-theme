#!/usr/bin/env bash

# Deploy the theme to PYPI using twine

set -x
set -e

python setup.py sdist bdist_wheel

twine upload -u ${PYPI_USER} -p ${PYPI_PASSWORD} dist/*
