const chokidar = require("chokidar");

const watchPath = `${__dirname}/html/docs/zh-cn/`;
const menuPath = `${__dirname}/html/_sidebar.md`;
const fs = require("fs");
const pathos = require("path");
const readline = require("readline");
// Initialize watcher.
const watcher = chokidar.watch(watchPath, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
});
const log = console.log.bind(console);
// More possible events.
watcher
  .on("addDir", addDir)
  .on("unlinkDir", unlinkDir)
  .on("error", (error) => log(`Watcher error: ${error}`))
  .on("ready", ready)
  .on("raw", async (event, path, details) => {
    
    const jr = details.path || details.watchedPath || path;
    if (jr.length <= watchPath.length) return;

	// internal
    log("Raw event info:", event, path, details);
    //if (event == "modified" || event == "created" || event == "change") {
      modified({ event, path: jr }, path);
    //}
  });

const arr = [];
let isReady = false;
async function modified(details, path) {
  if (details.path.indexOf("_sidebar.md") > -1) return;
  // change file current dir
  const dir = pathos.resolve(details.path, "../");
  //   change file current sidebar
  const _sidebarPath = pathos.resolve(details.path, "../_sidebar.md");
  let _sidebar = [];

  const files = fs.readdirSync(dir);
  for (let i in files) {
    const item = files[i];

    const data = fs.statSync(pathos.join(dir, item));
    if (data.isFile()) {
      if (item.substr(item.lastIndexOf(".")) != ".md") {
        // ignore
      } else if (item.indexOf("README.md") > -1) {
        _sidebar.unshift(pathos.join(dir, item));
      } else if (item != "_sidebar.md") {
        _sidebar.push(pathos.join(dir, item));
      }
    }
  }
  const arr = await Promise.all(
    _sidebar.map(async (item, index) => {
      const title = await line(item);
      if (!title) return "#";
      if (index == 0) {
        return `* [${title.replace("# ", "")}](${item.replace(
          __dirname + "/html/",
          ""
        )})`;
      } else {
        return `	* [${title.replace("# ", "")}](${item.replace(
          __dirname + "/html/",
          ""
        )})`;
      }
    })
  );
  log(arr);
  fs.writeFileSync(_sidebarPath, arr.join("\n"));
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
function ready() {
  isReady = true;

  log("Initial scan complete. Ready for changes");

  //	fs.readFile(menuPath, )
  arr.shift();
  arr.unshift({ id: 0, text: "* zh-cn" });
  log(arr);

  fs.writeFile(menuPath, arr.map((item) => item.text).join("\n"), (err) => {
    if (err) throw err;
  });
}
function unlinkDir(absPath) {
  log("unlinkDir", absPath);
  const index = arr.findIndex((item) => item.id === absPath);
  if (index > -1) {
    arr.splice(index, 1);
    fs.writeFile(menuPath, arr.map((item) => item.text).join("\n"), (err) => {
      if (err) throw err;
    });
  }
}
function addDir(absPath) {
  log("addDir", absPath);

  arr.push({
    id: absPath,
    text: `	* [${absPath.substr(absPath.lastIndexOf("/") + 1)}](${absPath.substr(
      14
    )}/README.md)`,
  });
  //   const readme = pathos.resolve(absPath, "README.md");
  //   if (!fs.existsSync(readme)) {
  //     fs.writeFileSync(readme, "#");
  //   }
  if (isReady) {
    fs.writeFile(menuPath, arr.map((item) => item.text).join("\n"), (err) => {
      if (err) throw err;
    });
  }
}
