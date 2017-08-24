var ai = require("../assemblyinfo.js");

function assert(out) {
    assert.equal(out.AssemblyTitle, "Title");
    assert.equal(out.AssemblyDescription, "Description");
    assert.equal(out.AssemblyConfiguration, "Configuration");
    assert.equal(out.AssemblyCompany, "Company");
    assert.equal(out.AssemblyProduct, "Product");
    assert.equal(out.AssemblyCopyright, "Copyright");
    assert.equal(out.AssemblyTrademark, "Trademark");
    assert.equal(out.AssemblyCulture, "Culture");
    assert.equal(out.Guid, "12e0df89-65cf-4de1-877d-79a9d4f87daa");
    assert.equal(out.AssemblyVersion, "1.1.0");
    assert.equal(out.AssemblyFileVersion, "1.3.4");
    assert.equal(out.AssemblyInformationalVersion, "2.3.4.3");
    assert.equal(out.InternalsVisibleTo, "Internals");
}

var assert = require('assert');
describe('AssemblyInfo', function() {
    it('should read and parse the AssemblyInfo.cs', function(done) {

        ai.read("test/AssemblyInfo.cs", (out) => {

            assert(out);

            done();
        });

    });

    it('should read and parse the AssemblyInfo.cs synchronous', function() {
        var out = ai.readSync("test/AssemblyInfo.cs");
        assert(out);
    })
});
