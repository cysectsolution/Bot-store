const express = require('express');
const router = express.Router();
const Bot = require('../models/bots');
const mongojs = require('mongojs');

//Post New Bots to db
router.post('/', function(req,res,next) {
  let newBot = new Bot({
    botname : req.body.botname,
    companyname : req.body.comapanyname,
    botdescription: req.body.botdescription,
    country:req.body.country,
    botcategory:req.body.botcategory
});
Bot.newBot(newBot,(err,bot)=>{
    if (err){
      console.log(err)
        res.json({
            success:false,
            msg:"Not successful"
        });
    }else{
        console.log(newBot)
        res.send(newBot);
    }
})
  console.log('This is a post request')
});

router.get('/', function(req, res, next){
  Bot.find(function(err,bot){
      if(err){
          res.send(err);
      }
      res.json(bot);
      
  });
});

router.get('/:id', function(req, res, next){
  
  Bot.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err,bot){
      if(err){
          res.send(err);
      }
      res.json(bot);
  });
});

router.delete('/:id', function(req,res,next){
  Bot.remove({_id:mongojs.ObjectId(req.params.id)}, function(err, bot){
      if(err){
          res.send(err);
      }
      res.json(bot);
  });
});

router.put('/:id', function(req,res,next){
  var bot = req.body;
  var upnewBot = {};

  if(bot.botname){
      upnewBot.botname = bot.botname;
  }
  if(bot.created_date){
      upnewBot.created_date = bot.created_date;
  }
  if(bot.status){
      upnewBot.status = bot.status;
  }

  if (!upnewBot){
      res.status(400);
      res.json({
          "error" : "Bad Data"
      });
  }else {
      Bot.update({_id: mongojs.ObjectId(req.params.id)}, upnewBot, {}, function(err,bot){
          if(err){
              res.send(err);
          }
          res.json(bot);
      });
  }
});
module.exports = router;