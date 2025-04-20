import * as fs from "fs"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


type SqlData = {
    tableName: string,
    [key: string]: string
}

// 
const writeSqlFile = (data: SqlData) => {
    const sql = `INSERT INTO ${data.tableName} (${Object.keys(data).join(', ')}) VALUES (${Object.values(data).map(value => `'${value}'`).join(', ')})`;
    fs.appendFile(`./sql/${data.tableName}.sql`, sql, (err) => {
        if (err) throw err;
    });
}
// test write sql file
// writeSqlFile({
//     tableName: 'test',
//     id: '1',
//     name: 'test',
//     email: 'test@test.com',
//     password: 'test',
//     createdAt: '2022-01-01',
//     updatedAt: '2022-01-01'
// })




// get all folder and under folder file

type IData = {
    name?: string,
    type?: string,
    path?: string,
    children?: IData[]
}
function getFilesAndFoldersInDir(path:string) {
    const items = fs.readdirSync(path);
    const result: IData[] = [];
    items.forEach(item => {
        const itemPath = `${path}/${item}`;
        const stat = fs.statSync(itemPath);
        if (stat.isDirectory()) {
            let data:IData = {
                path: itemPath,
                type: 'folder',
                name: item,
                children: []
            };
            let children = getFilesAndFoldersInDir(itemPath);
            if (children && children.length) {
                data.children = children;
            }
            result.push(data);
        } else {
            result.push({
                path: itemPath,
                type: 'file',
                name: item
            });
        }
    });
    return result;
}

const readMarkdownFile = (filePath: string) => {
    
    const ret = getFilesAndFoldersInDir(filePath);
   
    console.log(JSON.stringify(ret, null, 2));
 
}


readMarkdownFile('./markdown/html/docs/zh-cn')
export function generateSql() {

}