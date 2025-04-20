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
    fs.appendFile(`./.sql/${data.tableName}.sql`, sql, (err) => {
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
   
    const fn = (pid:number,ret:IData[]) => ret.forEach(async item => {
        console.log(pid, item.name)
        if(item.type === 'folder'){
            
            const ret1 = await prisma.blogMenu.create({
                data: {
                    pid: pid,
                    name: item.name,
                    contentPath: item.path,
                }
            });
            if(item.children && item.children.length){
                fn(ret1.id, item.children)
            }
        }
        if(item.type === 'file'){
            if(item.name && item.name.endsWith('.md')){

                const ret2 = await prisma.blogMenu.create({
                    data: {
                        pid: pid,
                        name: item.name,
                        contentPath: item.path,
                    }
                })
            }
            
        }
    })
    fn(0,ret);
 
}


readMarkdownFile('../markdown/html/docs/zh-cn')
export function generateSql() {

}