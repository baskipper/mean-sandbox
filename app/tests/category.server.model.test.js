'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	Category = mongoose.model('Category');

/**
 * Unit tests
 */
describe('Category Model', function(){

    it('saves new record');

    it('throws validation error when name is empty');

    it('throws validation error when name longer than 15 chars');

    it('throws validation error for duplicate category name');
});
