# postcss-icon.cssicon

Icons data for [postcss-icon plugin](https://github.com/retyui/postcss-icon)

Based on [cssicon.space](http://cssicon.space)

![cssicon](https://raw.githubusercontent.com/retyui/postcss-icon.cssicon/master/retyui.github.io_postcss-icon_cssicon.png)

## Install
```bash
npm install -D postcss-icon.cssicon
# or
yarn add -D postcss-icon.cssicon
```

## Use
```js
const postcss     = require('postcss');
const postcssIcon = require('postcss-icon');
const dataCssicon = require('postcss-icon.cssicon');

const CSS = `
.custom-selector{
	@icon: cssicon-search; /* 'cssicon-' is Prefix , 'search' is name Icon*/ }
.custom-selector2{ /* or */
	@icon cssicon-search; }
`;

postcss(
	postcssIcon({
		prefix: 'cssicon-', /* required when using multiple Icon.data sets */
		data: dataCssicon
	})
).process(CSS).then(({css,messages}) => {
	console.log(css);
	messages
		.filter(i => i.type === "warning")
		.map(e => console.log(e.toString()));
});
```

## [All name icons](https://retyui.github.io/postcss-icon/cssicon/)

```js
Object.keys(require('.')).sort().map(e => `\`${e}\``).join(', ')
```
`arrow-down`, `arrow-left`, `arrow-right`, `arrow-up`, `audio`, `audio-solid`, `battery`, `battery-0`, `battery-1`, `battery-3`, `battery-solid`, `battery-solid-0`, `battery-solid-1`, `battery-solid-3`, `bell`, `bell-solid`, `bookmark`, `bookmark-solid`, `browser`, `browser-solid`, `camera`, `camera-solid`, `card`, `card-solid`, `center-align`, `chat`, `chat-solid`, `check`, `clock`, `clock-h3m30`, `clock-h3m30-solid`, `clock-h9m0`, `clock-h9m0-solid`, `clock-h9m30`, `clock-h9m30-solid`, `clock-solid`, `close`, `cloud`, `cloud-download`, `cloud-download-solid`, `cloud-lightning`, `cloud-raindrop`, `cloud-solid`, `cloud-upload`, `cloud-upload-solid`, `code`, `download`, `edit`, `edit-solid`, `export`, `eye`, `eye-solid`, `eye-solid2`, `eye-solid3`, `flag`, `flag-solid`, `float`, `float-solid`, `focus`, `grin`, `grin-solid`, `grin-wink`, `heart`, `heart-solid`, `import`, `indent`, `justified`, `key`, `key-solid`, `key2`, `key2-solid`, `keyboard`, `keyboard-solid`, `laptop`, `laptop-solid`, `laugh`, `laugh-solid`, `left-align`, `left-double-quote`, `left-double-quote-solid`, `left-single-quote`, `left-single-quote-solid`, `link`, `lock`, `lock-solid`, `magnify`, `magnify-solid`, `mail`, `mail-solid`, `map`, `menu`, `minify`, `minify-solid`, `minus`, `mobile`, `mobile-solid`, `moon`, `moon-solid`, `more`, `more-solid`, `more-vertical`, `more-vertical-solid`, `mouse`, `mouse-solid`, `mustache`, `mustache-solid`, `navigate`, `navigate-solid`, `no-raindrop`, `outdent`, `paperclip`, `paragraph-direction`, `pensive`, `pensive-solid`, `picture`, `picture-solid`, `pilcrow`, `pilcrow-solid`, `pin`, `pin-solid`, `plus`, `print`, `print-solid`, `profile`, `profile-solid`, `rain`, `raindrop`, `raindrop-solid`, `refresh`, `relieved`, `relieved-smiley`, `relieved-smiley-solid`, `relieved-solid`, `remove`, `retweet`, `right-align`, `right-double-quote`, `right-double-quote-solid`, `right-single-quote`, `right-single-quote-solid`, `sad`, `sad-solid`, `search`, `search-solid`, `shutdown`, `signal`, `smile`, `smile-solid`, `smiley`, `smiley-solid`, `snow`, `stop`, `stop-solid`, `suitcase`, `suitcase-1`, `suitcase-2`, `suitcase-3`, `sun`, `sun-brightness`, `sun-horizon`, `sun-horizon-solid`, `sun-raindrop`, `sun-raindrop-solid`, `sun-solid`, `sunrise`, `sunrise-solid`, `sunset`, `sunset-solid`, `tablet`, `tablet-solid`, `tag`, `tag-solid`, `target`, `target-solid`, `tougue`, `tougue-solid`, `trash`, `trash-solid`, `tv`, `tv-solid`, `unamused`, `unamused-solid`, `unlock`, `unlock-solid`, `upload`, `upload2`, `watch`, `watch-solid`, `wink`, `wink-laugh`, `wink-smiley`, `wink-tougue`
