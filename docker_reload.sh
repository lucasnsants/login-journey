#! /bin/bash

docker stop web
echo "##### Container pausado #####"

docker build -t webserver .
echo "##### Container buildado #####"

docker run -it --rm -d -p 8080:80 --name web webserver
echo "##### Container em execução #####"