
var Botkit = require('botkit');

var controller = Botkit.slackbot();

var bot = controller.spawn({

      token: "xoxb-174625072208-9ZD671ZmrkFTGxvAwJLyjkjk"

})

bot.startRTM(function(err,bot,payload) {

      if (err) {

              throw new Error('Could not connect to Slack');

                }

});

controller.hears(["Hello","Hi"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {

      bot.reply(message,'Hello, how are you today?');

});

controller.hears(["메뉴","회식"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {

      bot.reply(message,'회식메뉴는 정했나요?');

});
