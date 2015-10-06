'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Validation
 */
function validateLength(v)
{
    // a custom validation function for checking string length to be used by the model
    return v.length <=15;
}




/**
 * Category Schema
 */
var CategorySchema = new Schema({
    //the property name
    created: {
        // types are defined e.g. String, Dae, Number (http://mongoosjs.com/docs/guide.html)
        type: Date,
        // default values can be set
        default: Date.now
    },
    description: {
        type: String,
        default: '',
        // types have specific functions e.g. trim, lowercase, uppercase (http://mongoosejs.com/docs/api.html#schema-string-js)
        trim: true

    }
});

mongoose.model('Category', CategorySchema);
