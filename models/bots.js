var mongoose = require('mongoose');

//model of how the collection will look like
var BotSchema = new mongoose.Schema({
    botname: { type: String, required: true },
    companyname: { type: String },
    botdescription: { type: String },
    country: { type: String },
    botcategory: { type: String }
});

module.exports = mongoose.model('Bot', BotSchema);

module.exports.newBot = function(newBot,cb){
    newBot.save(cb)

}


module.exports.getBotById= function(id,cb){
    
    Vintage.findById(id,cb);

}
module.exports.getBot = function(bot,cb){
    Vintage.find();
}