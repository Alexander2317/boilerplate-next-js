FROM node:10.6.0

# Set var build dir
ENV BUILD_DIR=/usr/src/app

# Set var work dir
ENV WORK_DIR=/usr/src/app

# Set a building directory
WORKDIR ${BUILD_DIR}

# copy all project to image
COPY . .

# add user node in group www-data
RUN usermod -aG www-data node

# Set permison on
RUN chown -R node:www-data ${BUILD_DIR}

# run all proc as not root
USER node

# Install Node.js dependencies
RUN yarn config set ignore-engines true && yarn install && yarn build

# Set a working directory
WORKDIR ${WORK_DIR}

# Set permison on
RUN chown -R node:www-data ${WORK_DIR}

# Run App
CMD ["yarn", "start"]
