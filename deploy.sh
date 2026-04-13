#!/bin/bash
set -e
export PATH="/usr/local/bin:$PATH"

# GreenDee deploy script
# Deploys static site to Hostinger via SSH

REMOTE_USER="u436234140"
REMOTE_HOST="145.14.156.30"
REMOTE_PORT="65002"
REMOTE_DIR="domains/greendee.nl/public_html"

echo "Building static site..."
npm run generate

echo "Deploying to server..."
rsync -avz --delete \
  -e "ssh -p ${REMOTE_PORT}" \
  .output/public/ \
  "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}/"

echo "Deploy complete!"
