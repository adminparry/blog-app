const fs = require('fs')   ;
const path = require('path');

const generateSQL = (data) => {
    const sql = `INSERT INTO ${data.tableName} (${Object.keys(data).join(', ')}) VALUES (${Object.values(data).map(value => `'${value}'`).join(', ')})`;
    return sql;
}