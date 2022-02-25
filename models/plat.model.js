const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

let PlatSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, required: true} ,
    _titre: {type: String, required: true},
    _prix: {type: Number, required: true},
    _image: {type: String, required: true},
    _categorie: {type: String, required: true},
});
autoIncrement.initialize(mongoose.connection);
PlatSchema.plugin(autoIncrement.plugin, 'Plat');


// Export the model
module.exports = mongoose.model('Plat', PlatSchema);