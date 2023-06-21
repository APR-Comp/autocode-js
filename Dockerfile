FROM ubuntu:20.04
LABEL maintainer="Martin Mirchev <mirchevmartin2203@gmail.com>"

RUN apt-get update && apt-get upgrade -y && apt-get autoremove -y
RUN apt-get install node npm
RUN npm install -g mocha
