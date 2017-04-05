
var fs = require('fs');
var indexFile = fs.readFileSync('dist/index.html');
fs.unlinkSync('dist/index.html');
fs.writeFileSync('../../views/index.html.twig',indexFile);

var arryaFiles = fs.readdirSync('dist');
arryaFiles.map(function(file){
    var currentFile = fs.readFileSync('dist/'+file);
    fs.writeFileSync('../../../../../web/'+file,currentFile);
    fs.unlinkSync('dist/'+file);
});