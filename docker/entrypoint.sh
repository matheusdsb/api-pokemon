#!/bin/bash

/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "${SA_PASSWORD}" -i init.sql &
/opt/mssql/bin/sqlservr