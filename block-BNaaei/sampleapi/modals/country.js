var mongoose = require('mongoose');
var schema = mongoose.Schema;

var countryschema = new schema({
 name : String ,
 states : [{type :schema.Types.ObjectId ,ref :"State"}] ,
 continent : String ,
 population : Number ,
 ethnicity : String ,
 neighbouring_countires :{type : schema.Types.ObjectId ,ref :'Country'} ,
 area : Number
},{timestamps : true})

var Country = mongoose.model('Country' ,countryschema);
module.exports = Country;