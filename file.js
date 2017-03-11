const fs = require('fs');
const request = require('./request');
const format = require('./format');

class File {
  constructor(id, name, url, parent) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.parent = parent;
    // console.log('File');
    // console.log(this.path());
  }

  path(path) {
    return this.parent.path(path) + '/' + format.nameCleaned(this.name);
  }

  shouldDownload(path) {
    if (fs.existsSync(path + '/' + this.path())) {
      return false;
    }
    return true;
  }

  download(path) {
    return new Promise((res, rej) => {
      request(this.url)
        .on('response', response => {
          console.log(`${this.parentAcronym()} Downloaded file`);
          console.log(this.parent.name + '/' + this.name);
          res();
        })
        .pipe(fs.createWriteStream(this.path(path)));
    });
  }

  parentAcronym() {
    return this.parent.parentAcronym();
  }
}

module.exports = File;
