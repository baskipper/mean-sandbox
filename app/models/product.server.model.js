'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

function validateLength(v) {
    return v.length <= 40;
}

/**
 * Product Schema
 */
var ProductSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: 'invalid category'
    },
    name: {
        type: String,
        default: '',
        required: 'name cannot be blank',
        trim: true,
        validate: [validateLength, 'name must be 40 chars in length or less']
    },
    quantityPerUnit: {
        type: String
    },
    unitPrice: {
        type: Number,
        default: 0
    },
    unitsInStock: {
        type: Number,
        default: 0,
        min: 0
    },
    unitsOnOrder:{
        type: Number,
        default: 0,
        min: 0
    },
    discontinued:{
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }

});

mongoose.model('Product', ProductSchema);
