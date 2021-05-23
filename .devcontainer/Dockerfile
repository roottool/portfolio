# * See here for image contents
# * https://github.com/microsoft/vscode-dev-containers/tree/v0.140.1/containers/typescript-node/.devcontainer/base.Dockerfile

ARG VARIANT=${VARIANT:-"16-buster"}
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

ARG USERNAME=${USERNAME:-"vscode"}
ARG USER_UID=${USER_UID:-"2000"}
ARG USER_GID=${USER_UID}

ARG WORKING_DIR=/workspaces/my-portfolio

# * Create the non-root user
RUN groupadd --gid ${USER_GID} ${USERNAME} \
    && useradd --uid ${USER_UID} --gid ${USER_GID} -m ${USERNAME} \
    && chown -R ${USER_UID}:${USER_GID} /home/${USERNAME} \
    && mkdir -p ${WORKING_DIR}/node_modules \
    && chown -R ${USER_UID}:${USER_GID} ${WORKING_DIR}

WORKDIR ${WORKING_DIR}

ARG INSTALL_ZSH="true"
ARG ENABLE_NONROOT_DOCKER="true"
# * Upgrade OS packages to their latest versions
ARG UPGRADE_PACKAGES="false"
# * Use the OSS Moby CLI instead of the licensed Docker CLI
ARG USE_MOBY="true"

ARG COMMON_DEBIAN_URL=https://raw.githubusercontent.com/microsoft/vscode-dev-containers/master/script-library/common-debian.sh
ARG DOCKER_DEBIAN_URL=https://raw.githubusercontent.com/microsoft/vscode-dev-containers/master/script-library/docker-debian.sh

RUN apt update \
  && curl ${COMMON_DEBIAN_URL} -sSf | bash -s "${INSTALL_ZSH}" "${USERNAME}" "${USER_UID}" "${USER_GID}" "${UPGRADE_PACKAGES}" "true" "true" \
  # * Use Docker script from script library to set things up
  && curl ${DOCKER_DEBIAN_URL} -sSf | bash -s "${ENABLE_NONROOT_DOCKER}" "/var/run/docker-host.sock" "/var/run/docker.sock" "${USERNAME}" "${USE_MOBY}"

# * Clean up
RUN apt autoremove -y \
  && apt clean -y \
  && rm -rf /var/lib/apt/lists/*

USER ${USERNAME}

# * Avoiding extension reinstalls on container rebuild
RUN mkdir -p /home/${USERNAME}/.vscode-server/extensions

# * Persist zsh history between runs
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/home/${USERNAME}/commandhistory/.zsh_history" \
  && mkdir -p /home/${USERNAME}/commandhistory \
  && touch /home/${USERNAME}/commandhistory/.zsh_history \
  && echo ${SNIPPET} >> "/home/${USERNAME}/.zshrc"

ARG WORKING_DIR=/workspaces/my-portfolio
WORKDIR ${WORKING_DIR}
