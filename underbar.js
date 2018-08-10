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





}());    



