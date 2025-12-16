#!/usr/bin/env bash

# Deploys the site from GitHub to a VPS.
# Configure the variables below (or export them before running) to match your setup.

set -euo pipefail

REPO_URL="${REPO_URL:-git@github.com:your-username/your-repo.git}"
BRANCH="${BRANCH:-main}"
APP_DIR="${APP_DIR:-/opt/page-copier}"
DEPLOY_DIR="${DEPLOY_DIR:-/var/www/page-copier}"
NODE_BIN="${NODE_BIN:-node}"
NPM_BIN="${NPM_BIN:-npm}"

log() { printf "[%s] %s\n" "$(date '+%Y-%m-%d %H:%M:%S')" "$*"; }

ensure_repo() {
  if [ ! -d "$APP_DIR/.git" ]; then
    log "Cloning repository into $APP_DIR"
    mkdir -p "$APP_DIR"
    git clone "$REPO_URL" "$APP_DIR"
  fi
}

update_repo() {
  log "Updating repository (branch: $BRANCH)"
  cd "$APP_DIR"
  git fetch --all --prune
  git checkout "$BRANCH"
  git pull --ff-only origin "$BRANCH"
}

install_and_build() {
  log "Installing dependencies and building"
  cd "$APP_DIR"
  "$NPM_BIN" ci
  "$NPM_BIN" run build
}

deploy_dist() {
  log "Deploying build to $DEPLOY_DIR"
  mkdir -p "$DEPLOY_DIR"
  rsync -ah --delete "$APP_DIR/dist/" "$DEPLOY_DIR/"
}

reload_services() {
  # Add your service reload/restart commands here, e.g.:
  # systemctl reload nginx
  # pm2 reload your-app-name
  :
}

main() {
  ensure_repo
  update_repo
  install_and_build
  deploy_dist
  reload_services
  log "Deployment completed"
}

main "$@"
