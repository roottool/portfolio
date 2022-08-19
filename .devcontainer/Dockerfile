# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.205.2/containers/debian/.devcontainer/base.Dockerfile
ARG VARIANT=${VARIANT:-"16-bullseye"}
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

ARG USERNAME=${USERNAME:-"node"}
USER ${USERNAME}

ARG WORKING_DIR=${WORKING_DIR:-"/workspace"}
WORKDIR ${WORKING_DIR}

RUN npm install -g pnpm \
  # * Avoiding extension reinstalls on container rebuild
  && mkdir -p /home/${USERNAME}/.vscode-server/extensions \
  # * Persist zsh history between runs
  && SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/home/${USERNAME}/commandhistory/.zsh_history" \
  && mkdir -p /home/${USERNAME}/commandhistory \
  && touch /home/${USERNAME}/commandhistory/.zsh_history \
  && echo ${SNIPPET} >> "/home/${USERNAME}/.zshrc"
