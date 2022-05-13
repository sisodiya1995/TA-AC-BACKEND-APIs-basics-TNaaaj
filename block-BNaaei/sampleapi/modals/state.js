var mongoose = require('mongoose');
var schema = mongoose.Schema;

var stateschema = new schema({
 name : String ,
 country : [{type :schema.Types.ObjectId ,ref :"Country"}] ,
 population : Number ,
 ethnicity : String ,
 neighbouring_states : {type : schema.Types.ObjectId ,ref :"State"},

},{timestamps : true})

var State = mongoose.model('State' ,stateschema);
module.exports = State;