#!/bin/bash
pass=${SA_PASSWORD}

/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "$pass" \
    -i init.sql &
/opt/mssql/bin/sqlservr