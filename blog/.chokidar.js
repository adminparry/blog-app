const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');
const readline = require("readline");

/**
 * watch markdown file to generate _sidebar.md if exists that add in it
 * 
 * the folder includes: README.md, _sidebar.md
 */
const readme = 'README.md';
const sidebar = '_sidebar.md';

// const log = console.log.bind(null);

const log = () => {};

const sidebaroot = path.resolve(__dirname, `./html/docs/${sidebar}`);

const target = path.resolve(__dirname, './html/docs/zh-cn');
log('current dir is :', target);

chokidar.watch(target, {
    ignored:(file, stat) => stat?.isFile() && !file.endsWith('.md'),
    ignoreInitial: true,
}
).on('all', (event, path) => {
  path = path.replace(/\\/g, '/')
  console.group(event, path);
  
})
.on('change', async (path) => {
  path = path.replace(/\\/g, '/')
    editSidebar(path);
    // file changed
})
.on('add', async (path) => {
  path = path.replace(/\\/g, '/')
    editSidebar(path);
    // new file
})
.on('unlink', async (path) => {
  path = path.replace(/\\/g, '/')
    editSidebar(path);
    // deleted file
})
.on('addDir', async (path) => {
  path = path.replace(/\\/g, '/')
    fs.writeFileSync(path + '/' + readme, '');
    fs.writeFileSync(path + '/' + sidebar, '');
    await changeDir(path);
})
.on('unlinkDir', async (path) => {
  path = path.replace(/\\/g, '/')
  await changeDir(path);
})


async function changeDir(p){
  log('changeDir')
  let title = '* zh-cn \n';

  const pa = path.resolve(p,'../');
  await Promise.all(fs.readdirSync(pa).map(async (file) => {
    const state = fs.statSync(pa + '/' + file);
    
    if(state.isDirectory()){

      const first = path.resolve(p,'../',file, readme)
      const title1 = (await line(first))?.replace('#', '').trim();
      log(title1)
      
      title += `${'   '}* [${title1}](${docs(path.resolve(pa ,file, readme))})\n`;

    }
  }))
  log('title is :', title);
  fs.writeFileSync(sidebaroot, title);
}
async function editSidebar(p) {
  if(!fs.existsSync(p)) return;
  // change _sidebar.md so uninclude self
    if (p.endsWith(sidebar)) return;
    if(p.endsWith(readme)){
      changeDir(path.resolve(p,'../'));
      return;
    }
    // current dir path
    const curdir = path.resolve(p, '../');
    // get all files in current dir
    let list = fs.readdirSync(curdir);
    // wipe out README.md and _sidebar.md
    list = list.filter((item) => item != readme && item != sidebar);
// write content perpairly
    let inner = ''; 
    // the first line is readme.md
    const showTitle = (await line(path.resolve(p,'../',readme)))?.replace('#', '').trim();
    const tpl = `* [${showTitle}](${docs(path.resolve(curdir, readme))})\n`
    inner += tpl;

    await Promise.all(list.map( async(item) => {
      // the sidebar every title is the first line of the file
        const showTitle1 = (await line(path.resolve(p,'../',item)))?.replace('#', '').trim();
        inner += `${'   '}* [${showTitle1}](${docs(path.resolve(curdir , item))})\n`;
    }))
    
    fs.writeFileSync(path.resolve(p, '../', sidebar), inner);

}

function docs(str){
    str = str.replace(/\\/g, '/');
    console.log(str)
    return str.substring(str.lastIndexOf('docs/'));
}


async function line(path) {
  const fstream = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: fstream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    return line;
  }
}


process.on('uncaughtException', async (p) => {
  console.error('未捕获的异常:', err);
})