# gulp-domain-replace [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> A domain replace asset url plugin for for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-domain-replace` as a development dependency:

```shell
npm install --save-dev gulp-domain-replace
```

Then, add it to your `gulpfile.js`:

### Simple domain replace

```javascript
var domainReplace = require("gulp-domain-replace");

gulp.src("./src/*.html")
  .pipe(domainReplace('cdn域名'))
  .pipe(gulp.dest("./dist"));
```
replace with img domain
```javascript
var domainReplace = require("gulp-domain-replace");

gulp.src("./src/*.html")
  .pipe(domainReplace({
    imgUrl: '图片cdn域名',
		assetsUrl: 'cdn域名'
  }))
  .pipe(gulp.dest("./dist"));
```
## API

### assets(url|options, assetsPath)

#### url|options
Type: either a `string` or a `object`

Example:

```html
<!-- build:myJsTag -->
<script src="./assets/js/foo.js"></script>
<script src="./assets/css/foo.css"></script>
<!-- endbuild -->
```

```js
domainReplace('cdn域名', 'assets')
```




## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-domain-replace
[npm-image]: https://badge.fury.io/js/gulp-domain-replace.png

[travis-url]: http://travis-ci.org/kombucha/gulp-domain-replace
[travis-image]: https://secure.travis-ci.org/kombucha/gulp-domain-replace.png?branch=master

[coveralls-url]: https://coveralls.io/r/kombucha/gulp-domain-replace
[coveralls-image]: https://coveralls.io/repos/kombucha/gulp-domain-replace/badge.png

[depstat-url]: https://david-dm.org/kombucha/gulp-domain-replace
[depstat-image]: https://david-dm.org/kombucha/gulp-domain-replace.png
