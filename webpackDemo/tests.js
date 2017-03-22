/**
 * Created by hzw on 2016/8/3.
 * connect 342782880
 */
var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -2 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});

function User(name){
    this.name=name
}
User.prototype= {
    save:function(call){
        call()
    }
}
describe('User', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
            var user = new User('Luna');
            user.save(function(err) {
                if (err) throw err;
                done();
            });
        });
        it('should complete this test', function (done) {
            return new Promise(function (resolve) {
                assert.ok(true);
                resolve();
            })
                .then(done);
        });
    });
});

describe('User', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
            var user = new User('Luna');
            user.save(done);
        });
    });
});
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            [1,2,3].indexOf(5).should.equal(-1);
            [1,2,3].indexOf(0).should.equal(-1);
        });
    });
});