

function Promise(fn) {
  var state = 'pending',
      deferred,
      val;

  function resolve(valN) {
    val = valN;
    state = 'resolved';

    if (deferred) {
      handle(deferred);
    }
  }

  function reject(reason) {
    val = reason;
    state = 'rejected';

    if (deferred) {
      handle(deferred);
    }
  }

  function handle(handler) {
    if (state === 'pending') {
      deferred = handler;
      return;
    }
    if (state == 'resolved') {
      handler.resolve(val);
    } else {
      handler.reject(val);
    }
  }
  this.then = function(onResolved, onRejected) {
    var handler = {};
    handler.resolve = onResolved;
    handler.reject = onRejected;
    handle(handler);
  };
  fn(resolve, reject);
}

function doit() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var s = 'd';
      if (s === 's') {
        resolve(s);
      } else {
        reject('incorrect');
      }
    }, 10);
  });
}

var s;
s = doit();
s.then(function(data) {
  console.log(data);
}, function(reason) {
  console.log(reason);
});
