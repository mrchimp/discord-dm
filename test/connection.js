require('dotenv').load();
const mongoose = require('mongoose');

before(function (done) {
  mongoose.connect(process.env.MONGODB_HOST).then(() => {
    done();
  }).catch(function (error) {
    console.log('CONNECTION ERROR: ', error);
  });
});

beforeEach(function (done) {
  mongoose.connection.collections.players.drop(() => {
    done();
  });
});

after(function (done) {
  mongoose.connection.collections.players.drop(() => {
    mongoose.disconnect();
    done();
  });
});
