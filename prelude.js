/* jshint unused:false */

'use strict';

var _R;        // Return register

var _S   = []; // Stack frame data
var _SP  = 0;  // Beginning of current stack frame
var _SQ  = 0;  // End of current stack frame
var _SR  = 0;  // Current stack frame reference
var _PSP = []; // Beginnings of previous stack frames

var _A   = []; // Array frame data
var _AP  = 0;  // Beginning of current array frame
