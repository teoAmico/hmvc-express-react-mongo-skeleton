'use-strict'
exports.id = 'users'

exports.up = function (done) {
  var coll = this.db.collection('users')
  coll.insert({
    name: 'Matteo Amico',
    username: 'admin',
    email: 'admin@example.com',
    password: '',
    created_at: '',
    active: true,
    role: 'admin'
  }, done)
};

exports.down = function (done) {
  var coll = this.db.collection('users')
  coll.remove({}, done)
};
