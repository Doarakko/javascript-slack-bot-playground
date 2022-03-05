# javascript-slack-bot-playground

## Requirements

- npm
- Slack
- Heroku

## Usage

### 1. Prepare source code.

Fork [this](https://github.com/Doarakko/javascript-slack-bot-playground) repository.

```sh
git clone https://github.com/<id>/javascript-slack-bot-playground
```

### 2. Create Slack App using `manifest.yml`.

Go to [here](https://api.slack.com/apps) and create from an app manifest.

Get App-Level Token(xapp-aaaa) with connections:write and Bot User OAuth Token(xoxb-bbbb).

### 3. Edit `.env`.

```sh
cp .env.example .env
```

Enter SLACK_APP_TOKEN and SLACK_BOT_TOKEN.

### 4. Install library

```sh
npm install
```

### 5. Run

```sh
npm run dev
```

## Deploy on Heroku

### 1. Commit and push.

```
git add -A
git commit -m "Go"
git push origin main
```

### 2. Create Heroku app and set config and buildpack.

Create app from [here](https://dashboard.heroku.com/new-app).

Set `SLACK_APP_TOKEN` and `SLACK_BOT_TOKEN`, add Node.js buildpack from `Settings` tab.

### 3. Deploy

Connect to GitHub and choose repository from `Deploy` tab.

Click `Enable Automatic Deploys` and `Deploy Branch`.
