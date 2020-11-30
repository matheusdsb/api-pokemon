FROM microsoft/mssql-server-linux:latest

COPY ./init.sql .
COPY ./entrypoint.sh .

CMD /bin/bash ./entrypoint.sh
