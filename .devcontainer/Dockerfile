# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.205.2/containers/debian/.devcontainer/base.Dockerfile
ARG VARIANT=${VARIANT:-"bullseye"}
FROM mcr.microsoft.com/vscode/devcontainers/base:${VARIANT}

ARG USERNAME=${USERNAME:-"vscode"}
USER ${USERNAME}

ARG WORKING_DIR=/workspaces/portfolio
WORKDIR ${WORKING_DIR}

# * Avoiding extension reinstalls on container rebuild
RUN mkdir -p /home/${USERNAME}/.vscode-server/extensions \
  # * Persist zsh history between runs
  && SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/home/${USERNAME}/commandhistory/.zsh_history" \
  && mkdir -p /home/${USERNAME}/commandhistory \
  && touch /home/${USERNAME}/commandhistory/.zsh_history \
  && echo ${SNIPPET} >> "/home/${USERNAME}/.zshrc"
