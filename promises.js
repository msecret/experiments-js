
/*

function Promise(fn) {
  var cb = null;
  console.log('-----');
  console.log('start Promise');
  console.log('cb: ' + cb);
  this.then = function(cba) {
    cb = cba;
    console.log('-----');
    console.log('start then');
    console.log('cb: ' + cb);
  }

  function resolve (val) {
    console.log('-----');
    console.log('start resolve');
    console.log('cb: ' + cb);
    setTimeout(function() {
      cb(val);
      console.log('-----');
      console.log('end resolve');
      console.log('cb: ' + cb);
    }, 1);
  }
  fn(resolve);
}

function Promise(fn) {
  var state = 'pending',
      val,
      deferred;

  function resolve(nVal) {
    val = nVal;
    state = 'resolved';

    if (deferred) {
      handle(deferred);
    }
  }

  function handle(onResolved) {
    if (state === 'pending') {
      deferred = onResolved;
      return;
    }

    onResolved(value);
  }

  this.then = function(onResolved) {
    handle(onResolved);
  }

  fn(resolve);
}

function doSomething() {
  return new Promise(function(resolve) {
    console.log('-----');
    console.log('start doSomething cb');
    var value = 42;
    resolve(value);
  });
}

doSomething().then(function(data) {
  console.log(data);
});



function doSomething() {
  return {
    then: function(cb) {
      var value = 42;
      cb(value);
    }
  }
}

doSomething().then(function(data) {
  console.log(data);
});
*/
console.log('poop');
