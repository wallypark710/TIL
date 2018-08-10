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
//////////////////////////////////////////////////////////////////////

	_.intersection = function() {
	    var key = Array.prototype.slice.call(arguments);
	    var result = [];

	    var temp = key[0];

	    for( var i = 0; i < temp.length; i++) {
	      for( var j = 1; j < key.length; j++ ) {
	        if( _.some(key[j], function(ele) { return temp[i] === ele }) ) {
	          result.push(temp[i]);
	        }
	      }
	    }
	    
	    return result;
	  };

/////////////////////////////////////////////////////////////////////

	_.difference = function(array) {
	    var key = Array.prototype.slice.call(arguments);

	    var result = [];
	    var tAndF = 0;

	    for( var i = 0; i < array.length; i++) {
	      tAndF = 0;
	      for( var j = 1; j < key.length; j++ ) {
	        tAndF += _.every(key[j], function(ele) { return array[i] !== ele }); 
	      }

	      if( tAndF === arguments.length - 1) {
	        result.push(array[i]);
	      }

	    }
	    
	    return result;
	  };


////////////////////////////////////////////////////////////////////


}());    



