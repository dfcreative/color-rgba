const assert = require('assert')
const rgba = require('./')

assert.deepEqual(rgba('rgba(1,2,3,.5)', false), [1,2,3,.5])
assert.deepEqual(rgba('rgba(0,0,0,0)', false), [0,0,0,0])
assert.deepEqual(rgba('hsla(0,0,0,1)'), [0,0,0,1])
assert.deepEqual(rgba('rgba(255,255,255,1)'), [1,1,1,1])
assert.deepEqual(rgba('rgba(127.5,127.5,127.5,.5)'), [.5,.5,.5,.5])
assert.deepEqual(rgba([1,1,1,1], false), [1,1,1,1])
assert.deepEqual(rgba('rgb(300,300,300)'), [1,1,1,1])
assert.deepEqual(rgba('rgba(-300,-300,-300,-1)'), [0,0,0,0])
assert.deepEqual(rgba([0,0,0,0]), [0,0,0,0])

assert.equal(rgba('xyz'), null)
// console.log(rgba('hsla(170, 50%, 45%, 1)'))
