const fs = require('fs');

var path = 'test/AssemblyInfo.cs';

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

function read(path, callback) {

    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.error(err);
        }

        Object.keys(keywords).forEach((value) => {
            var res = data.match(new RegExp(value+"\\(\"([^\"]+?)\"\\)"));
            if(res && res[1]){
                keywords[value] = res[1];
            }
        });

        callback(keywords);
    });
}

var assemblyinfo = {
    read: read,
}

module.exports = assemblyinfo;