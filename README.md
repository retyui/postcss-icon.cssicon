# postcss-icon.cssicon

Icon set data for [postcss-icon plugin](https://github.com/retyui/postcss-icon), based on [cssicon.space](http://cssicon.space)

[![postcss-icon.cssicon](https://raw.githubusercontent.com/retyui/postcss-icon.cssicon/master/preview.png)](https://retyui.github.io/postcss-icon/cssicon/)

## Install

```bash
npm install -D postcss-icon.cssicon postcss-icon
# or
yarn add -D postcss-icon.cssicon postcss-icon
```

## Input

```css
.custom-selector {
  @icon: cssicon-close; /* 'cssicon-' is Prefix , 'close' is name Icon*/
  color: gold;
  /* ... your css code */
}
```

## Output

```css
.custom-selector::after{
  content: '';
  /* ... */
}
/* after before i span if needed */
.custom-selector{
  color: #000;
  width: 20px;
  heigth: 20px;
  /* ... */
  color: gold;
  /* ... your css code */
}
```

## Use ([more examples](https://github.com/retyui/postcss-icon/tree/master/example/))

```js
const     postcss = require('postcss');
const postcssIcon = require('postcss-icon');

const CSS = `
.custom-selector {
  @icon: cssicon-close;
}`;

postcss(
  postcssIcon({
    "postcss-icon.cssicon": {
      prefix: 'cssicon-' /* required when using multiple Icon data sets */
    },
    "postcss-icon.OtherSetName": { /* Options */ }
  })
).process(CSS).then(({css, messages}) => {
  console.log(css);
  messages
    .filter(i => i.type === "warning")
    .map(e => console.log(e.toString()));
});
```

## Other icon sets:

### Font icons:

- [postcss-icon.material-design](https://github.com/retyui/postcss-icon.material-design) (count icons : 932) [result demo](https://retyui.github.io/postcss-icon/material-design/)
- [postcss-icon.font-awesome-v4](https://github.com/retyui/postcss-icon.font-awesome-v4) (count icons : 786) [result demo](https://retyui.github.io/postcss-icon/font-awesome-v4/)

### Css only icons:

- [postcss-icon.icono](https://github.com/retyui/postcss-icon.icono) (count icons : 131) [result demo](https://retyui.github.io/postcss-icon/icono/)
- [postcss-icon.rosa](https://github.com/retyui/postcss-icon.rosa) (count icons : 78) [result demo](https://retyui.github.io/postcss-icon/rosa/)
- [postcss-icon.airpwn](https://github.com/retyui/postcss-icon.airpwn) (count icons : 39) [result demo](https://retyui.github.io/postcss-icon/airpwn/)
- [postcss-icon.stiffi](https://github.com/retyui/postcss-icon.stiffi) (count icons : 34) [result demo](https://retyui.github.io/postcss-icon/stiffi/)
- [postcss-icon.joshnh](https://github.com/retyui/postcss-icon.joshnh) (count icons : 24) [result demo](https://retyui.github.io/postcss-icon/joshnh/)

## All name icons (count: 192) [result demo](https://retyui.github.io/postcss-icon/cssicon/)

`arrow-down`, `arrow-left`, `arrow-right`, `arrow-up`, `audio`, `audio-solid`, `battery`, `battery-0`, `battery-1`, `battery-3`, `battery-solid`, `battery-solid-0`, `battery-solid-1`, `battery-solid-3`, `bell`, `bell-solid`, `bookmark`, `bookmark-solid`, `browser`, `browser-solid`, `camera`, `camera-solid`, `card`, `card-solid`, `center-align`, `chat`, `chat-solid`, `check`, `clock`, `clock-h3m30`, `clock-h3m30-solid`, `clock-h9m0`, `clock-h9m0-solid`, `clock-h9m30`, `clock-h9m30-solid`, `clock-solid`, `close`, `cloud`, `cloud-download`, `cloud-download-solid`, `cloud-lightning`, `cloud-raindrop`, `cloud-solid`, `cloud-upload`, `cloud-upload-solid`, `code`, `download`, `edit`, `edit-solid`, `export`, `eye`, `eye-solid`, `eye-solid2`, `eye-solid3`, `flag`, `flag-solid`, `float`, `float-solid`, `focus`, `grin`, `grin-solid`, `grin-wink`, `heart`, `heart-solid`, `import`, `indent`, `justified`, `key`, `key-solid`, `key2`, `key2-solid`, `keyboard`, `keyboard-solid`, `laptop`, `laptop-solid`, `laugh`, `laugh-solid`, `left-align`, `left-double-quote`, `left-double-quote-solid`, `left-single-quote`, `left-single-quote-solid`, `link`, `lock`, `lock-solid`, `magnify`, `magnify-solid`, `mail`, `mail-solid`, `map`, `menu`, `minify`, `minify-solid`, `minus`, `mobile`, `mobile-solid`, `moon`, `moon-solid`, `more`, `more-solid`, `more-vertical`, `more-vertical-solid`, `mouse`, `mouse-solid`, `mustache`, `mustache-solid`, `navigate`, `navigate-solid`, `no-raindrop`, `outdent`, `paperclip`, `paragraph-direction`, `pensive`, `pensive-solid`, `picture`, `picture-solid`, `pilcrow`, `pilcrow-solid`, `pin`, `pin-solid`, `plus`, `print`, `print-solid`, `profile`, `profile-solid`, `rain`, `raindrop`, `raindrop-solid`, `refresh`, `relieved`, `relieved-smiley`, `relieved-smiley-solid`, `relieved-solid`, `remove`, `retweet`, `right-align`, `right-double-quote`, `right-double-quote-solid`, `right-single-quote`, `right-single-quote-solid`, `sad`, `sad-solid`, `search`, `search-solid`, `shutdown`, `signal`, `smile`, `smile-solid`, `smiley`, `smiley-solid`, `snow`, `stop`, `stop-solid`, `suitcase`, `suitcase-1`, `suitcase-2`, `suitcase-3`, `sun`, `sun-brightness`, `sun-horizon`, `sun-horizon-solid`, `sun-raindrop`, `sun-raindrop-solid`, `sun-solid`, `sunrise`, `sunrise-solid`, `sunset`, `sunset-solid`, `tablet`, `tablet-solid`, `tag`, `tag-solid`, `target`, `target-solid`, `tougue`, `tougue-solid`, `trash`, `trash-solid`, `tv`, `tv-solid`, `unamused`, `unamused-solid`, `unlock`, `unlock-solid`, `upload`, `upload2`, `watch`, `watch-solid`, `wink`, `wink-laugh`, `wink-smiley`, `wink-tougue`
