const { App, LogLevel } = require('@slack/bolt');
require('dotenv').config();

const app = new App({
  appToken: process.env.SLACK_APP_TOKEN,
  token: process.env.SLACK_BOT_TOKEN,
  logLevel: LogLevel.WARN,
  socketMode: true
});

app.message('hi', async ({ say }) => {
  await say(`Hello!`);
});

app.event('app_mention', async ({ say }) => {
  await say(`Shut up.`);
});

app.message(/.*<@UC734HMC4>.*/, async ({ say }) => {
  await say(`He is busy.`);
});

app.message('help', async ({ message, client }) => {
  await client.chat.postMessage({
    channel: 'CC6JF4EDN',
    text: `<@${message.user}> is asking for help in <#${message.channel}>.`
  });
});

(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
