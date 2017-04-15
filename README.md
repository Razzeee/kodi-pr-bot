# kodi-pr-bot [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Bot helping with code review for the kodi addon repo

## Usage

### Github configuration
Add a new webhook to your github repo and point it to your server/instance of this addon. Port will be ``7777` and append `webhook` to the url. Set a secret and set the same secret in the `.config` file in the folder of the bot.
![Github configuration][webhook-config]

Now run:
```js
npm run start
```
## License

MIT © [Kolja Lampe]()


[npm-image]: https://badge.fury.io/js/kodi-pr-bot.svg
[npm-url]: https://npmjs.org/package/kodi-pr-bot
[travis-image]: https://travis-ci.org/xbmc/kodi-pr-bot.svg?branch=master
[travis-url]: https://travis-ci.org/xbmc/kodi-pr-bot
[daviddm-image]: https://david-dm.org/xbmc/kodi-pr-bot.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/xbmc/kodi-pr-bot
[coveralls-image]: https://coveralls.io/repos/xbmc/kodi-pr-bot/badge.svg
[coveralls-url]: https://coveralls.io/r/xbmc/kodi-pr-bot
[webhook-config]: pictures/webhook-config.png
