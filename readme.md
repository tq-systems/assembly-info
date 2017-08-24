# assembly-info

A library to parse AssemblyInfo.cs file from a C# project.

# Installation

To install it directly from github (sorry, didn't bother to upload it to npm):

    npm install wald-tq/assembly-info

# Usage

Plain usage in any script:

    const ai = require("assembly-info");

    ai.read("path/to/file", (res) => {
        var a = res.AssemblyVersion;
    });

Use it in combination with webpack to use your AssemblyInfo.cs version with DefinePlugin and inject it to any JavaScript file:

    ...
    new webpack.DefinePlugin({
        __DEFINE_WEBPACK_VERSION__: JSON.stringify(ai.readSync("Properties/AssemblyInfo.cs").AssemblyVersion),
    }),
    ...

Then somewhere in your code:

    var version = __DEFINE_WEBPACK_VERSION__;
