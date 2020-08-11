let fs = require('fs');

function walk(path, it) {
  let dirList = fs.readdirSync(path);
  console.log('dirList.length :>> ', dirList.length);
  for (let i = 0; i < dirList.length; i++) {
    let item = dirList[i];
    if (fs.statSync(path + '/' + item).isDirectory()) {
      if (item == it) {
        return path + '/' + item;
      } else {
        let j = walk(path + '/' + item, it);
        if (j) {
          return j;
        } else {
          continue;
        }
      }
    } else if (fs.statSync(path + '/' + item).isFile()) {
      if (item == it) {
        return path + '/' + item;
      }
    }
  }
}


console.log(walk('./demo-list','promiseHandle.js'));
