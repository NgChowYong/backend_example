const mongoose = require('mongoose');
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: {type: String, required: true, maxLength: 100},
    last_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date}
});

AuthorSchema.virtual('name').get(function() {
    let fullname = '';
    // console.log(typeof this.first_name);
    if (this.first_name && this.last_name){
        fullname = `${this.last_name}, ${this.first_name}`;
    }
    return fullname;
});

AuthorSchema.virtual('url').get(function() {
    return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual('life_span').get(function() {
    let birth_date = '';
    if (this.date_of_birth){
        birth_date = DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED);
    }
    let death_date = '';
    if (this.date_of_death){
        death_date = DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED);
    }
    return `${birth_date} - ${death_date}`;
});

module.exports = mongoose.model('Author', AuthorSchema);