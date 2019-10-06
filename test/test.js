
// my first mocha test - and it WORKS!
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


const jsdom = require("jsdom");
const { JSDOM } = jsdom;

GLOBAL.document = new JSDOM(searchSelection).window.document;
GLOBAL.document = new JSDOM(searchSelection).window.document;
var searchSelection = require('../static/javascript/index.js');


let chai = require('chai');
var should = chai.should();
const sinon = require('sinon');

describe('ClientAPI', function() {
  beforeEach(function() {
        this.xhr = sinon.useFakeXMLHttpRequest();

        this.requests = [];
        this.xhr.onCreate = function(xhr) {
            this.requests.push(xhr);
        }.bind(this);
    });

    afterEach(function() {
        this.xhr.restore();
    });

    it('should parse fetched data as JSON', function(done) {
     var data = { Value: 'fName', textValue: 'Clare' };
     var dataJson = JSON.stringify(data);

     searchSelection(function(err, result) {
         result.should.deep.equal(data);
         done();
     });

     this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
   });
});
