
var fs     = require('fs');

var casper = require('casper').create({
  pageSettings: {
    webSecurityEnabled: false
  }
});

casper.on( 'page.initialized', function(){
  this.evaluate(function(){
    var isFunction = function(o) {
      return typeof o == 'function';
    };

    var bind,
      slice = [].slice,
      proto = Function.prototype,
      featureMap;

    featureMap = {
      'function-bind': 'bind'
    };

    function has(feature) {
      var prop = featureMap[feature];
      return isFunction(proto[prop]);
    }

    // check for missing features
    if (!has('function-bind')) {
      // adapted from Mozilla Developer Network example at
      // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
      bind = function bind(obj) {
        var args = slice.call(arguments, 1),
          self = this,
          nop = function() {
          },
          bound = function() {
            return self.apply(this instanceof nop ? this : (obj || {}), args.concat(slice.call(arguments)));
          };
        nop.prototype = this.prototype || {}; // Firefox cries sometimes if prototype is undefined
        bound.prototype = new nop();
        return bound;
      };
      proto.bind = bind;
    }
  });
});

casper.start('http://localhost:3000', function() {

  this.wait(2000, function() {
    fs.write("dist/snapshots/index.html", this.getHTML() );

    this.start('http://localhost:3000/gallery', function() {

      this.wait(2000, function() {
        fs.write("dist/snapshots/gallery.html", this.getHTML() );

        this.start('http://localhost:3000/synopsis', function() {

          this.wait(2000, function() {
            fs.write("dist/snapshots/synopsis.html", this.getHTML() );
          });

        });
      });

    });

  });

});

casper.run();
