(function() {
  'use strict';

  window._ = {};

/////////////////////////////////////////////////////////////////////
    _.flatten = function(nestedArray, result) {
		var result = [];

		var convert = function( ele ) {
		    if( typeof ele === 'number' ) {
			result.push(ele);
		    } else {
			for( var i = 0; i < ele.length; i++ ) {
			convert( ele[i] );
			}
		    }
		}	

		for( var i = 0; i < nestedArray.length; i++ ) {
		    convert(nestedArray[i]);
		}	

		return result;
    };

//////////////////////////////////////////////////////////////////////

	_.zip = function() {
	    var result = [];
	    var temp = [];
	    var key = Array.prototype.slice.call(arguments);
	    var maxLengthArray = _.reduce(key, function(acc, ele){
	      if( acc.length > ele.length ) {
	        return acc;
	      } else {
	        return ele;
	      }
	    });
	    for( var i = 0; i < maxLengthArray.length; i++ ) {
	      temp = [];
	      for( var j = 0; j < key.length; j++ ) {
	        temp.push(key[j][i]);
	      }
	      result.push(temp);
	    }

	    return result;

  	};



}());    



