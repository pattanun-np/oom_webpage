From node:9.4.0
ENV NPM_CONFIG_LOGLEVEL warn
RUN mkdir -p /application

COPPY . /application

WORKDIR /application

RUN npm install -g serve

RUN npm install

RUN npm install --production

CMD serve -s build

EXPOSE 5000
