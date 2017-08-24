const fs = require('fs');

var keywords = {
    "AssemblyTitle": null,
    "AssemblyDescription": null,
    "AssemblyConfiguration": null,
    "AssemblyCompany": null,
    "AssemblyProduct": null,
    "AssemblyCopyright": null,
    "AssemblyTrademark": null,
    "AssemblyCulture": null,
    "ComVisible": null,
    "Guid": null,
    "AssemblyVersion": null,
    "AssemblyFileVersion": null,
    "AssemblyInformationalVersion": null,
    "InternalsVisibleTo": null,
}

function parse(data, keywords) {
    Object.keys(keywords).forEach((value) => {
        var res = data.match(new RegExp(value+"\\(\"([^\"]+?)\"\\)"));
        if(res && res[1]){
            keywords[value] = res[1];
        }
    });
}

function readSync(path) {

    var data = fs.readFileSync(path, 'utf8');

    parse(data, keywords);

    return keywords;
}

function read(path, callback) {

    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.error(err);
        }

        parse(data, keywords)

        callback(keywords);
    });
}

var assemblyinfo = {
    read: read,
    readSync: readSync
}

module.exports = assemblyinfo;