FROM mcr.microsoft.com/mssql/server:2017-CU8-ubuntu

COPY ./init.sql .
COPY ./entrypoint.sh .

CMD /bin/bash ./entrypoint.sh
