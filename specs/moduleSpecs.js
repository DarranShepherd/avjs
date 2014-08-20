"use strict";

var av = require('../dist/av.cjs.js')['av'];

describe('The module', function () {
    it('should have a version', function () {
        expect(av.version).not.toBeNull();
    });

    it('should have the MP3 constructor on the module', function () {
        expect(new av.MP3()).toBeDefined();
    });

    it('should have the MP4 constructor on the module', function () {
        expect(new av.MP4()).toBeDefined();
    });
});
