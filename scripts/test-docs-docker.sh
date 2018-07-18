#!/usr/bin/env bash
# Build some test docs in a container using the theme updates

# create env file to pass variables to container
env | grep -E "^(PATH=)" > .env_travis
env | grep -E "^(AWS_)" >> .env_travis

set -e

: ${DOC_IMG:=f5devcentral/containthedocs:latest}

RUN_ARGS=( \
  --rm
  -i
  -v $PWD:/wkdir
  ${DOCKER_RUN_ARGS}
  -e "LOCAL_USER_ID=$(id -u)"
  --env-file=.env_travis
)

printf "Starting Docker container..."\n

set -x

# Run the container using the provided args
# DO NOT SET -x BEFORE THIS, WE NEED TO KEEP THE CREDENTIALS OUT OF THE LOGS
docker run "${RUN_ARGS[@]}" ${DOC_IMG} /bin/sh -s <<EOF
set -x
set -e

make webpack

# Install theme project requirements
pip install --user --upgrade .

# build some test docs
make html

# deploy test docs to S3 if we're not in a pull request build
if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
   aws s3 sync test/docs/_build/html s3://${AWS_S3_BUCKET}/${UPLOAD_DIR}
   s3-index-generator -b $AWS_S3_BUCKET -t $BUILD_UPLOAD_ROOT -r ${PROJECT_UPLOAD_ROOT} -i 'index.html'
   else printf "Skipping deployment because a pull request triggered this build."
fi

# clean up
rm -rf .env_travis
EOF
