# assembly-info

A library to parse AssemblyInfo.cs file from a C# project.

# Installation

    npm install wald-tq/assembly-info

# Usage

    const ai = require("assembly-info");

    ai.read("path/to/file", (res) => {
        var a = res.AssemblyVersion;
    });