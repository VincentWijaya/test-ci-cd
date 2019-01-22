const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

describe('/', () => {
  it('Should return hello world', (done) => {
    chai.request(app)
      .get('/')
      .then((res) => {
        const { body } = res;

        body.should.be.a('object');
        body.message.should.equal('Hello world');
        body.success.should.equal(false);

        done();
      })
      .catch((e) => {
        console.log(e);
      });
  });
});
