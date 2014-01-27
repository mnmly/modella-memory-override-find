/**
 * Overrides modella-memory's find method
 * 
 * @param {memory} memory
 * @param {String} findBy
 */

module.exports = function override(memory, findBy){

  var _find = memory.find;

  // Override 
  memory.find = function(obj, fn){
    if(typeof obj === 'object'){
      for(var k in this.store){
        if (obj[findBy] === this.store[k][findBy]()){
          return fn(null, this.store[k]);
        }
      }
      return fn(new Error('Could not find one with ' + findBy + '==' + obj[findBy]));
    } else {
      return _find.call(this, obj, fn);
    }
  };
};

