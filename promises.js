

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

  function handle(onResolved) {
    if (state === 'pending') {
      deferred = onResolved;
      return;
    }

    onResolved(val);
  }
  this.then = function(onResolved) {
    handle(onResolved);
  };
  fn(resolve);
}

function doit() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      var s = 'poop';
      resolve(s);
    }, 10);
  });
}

var s;
s = doit();
s.then(function(data) {
  console.log(data)
});
