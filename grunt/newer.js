module.exports = {
  options: {
    override: function(details, shouldIncludeCallback) {
       // This is pulled from https://gist.github.com/kylewiedman/6fe5167a3cba51e1b7ea
       // Shrunk because we aren't going modify it.... right... RIGHT!?!
        var fs = require('fs'); var path = require('path'); var async = require('async'); var checkFileForModifiedImports = async.memoize(function(filepath, fileCheckCallback) { fs.readFile(filepath, 'utf8', function(error, data) { var directoryPath = path.dirname(filepath);
        var regex = /@import (?:\([^)]+\) )?"(.+?)(\.less)?"/g; var match; function checkNextImport() { if ((match = regex.exec(data)) === null) { return fileCheckCallback(false); } var importFilePath = path.join(directoryPath, match[1] + '.less'); fs.exists(importFilePath, function(exists) { if (!exists) { return checkNextImport(); } fs.stat(importFilePath, function(error, stats) { if (stats.mtime > details.time) { fileCheckCallback(true); } else { checkFileForModifiedImports(importFilePath, function(hasModifiedImport) { if (hasModifiedImport) { fileCheckCallback(true); } else { checkNextImport(); } }); } }); }); }; checkNextImport(); }); }); if (details.task == 'less') { checkFileForModifiedImports(details.path, function(found) { shouldIncludeCallback(found); }); } else { shouldIncludeCallback(false); }
    }
  }
}
