Router.map(function () {
  if (features.foo) {
    this.route('foos', function () {
      this.route('bar');
    });
  }
});
