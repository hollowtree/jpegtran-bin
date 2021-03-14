# jpegtran-bin ![GitHub Actions Status](https://github.com/imagemin/jpegtran-bin/workflows/test/badge.svg?branch=master)

> [libjpeg-turbo](http://libjpeg-turbo.virtualgl.org/) is a derivative of libjpeg that uses SIMD instructions (MMX, SSE2, NEON) to accelerate baseline JPEG compression and decompression on x86, x86-64, and ARM systems. On such systems, libjpeg-turbo is generally 2-4x as fast as the unmodified version of libjpeg, all else being equal.

You probably want [`imagemin-jpegtran`](https://github.com/imagemin/imagemin-jpegtran) instead.


## Install

```
$ npm install --save jpegtran-bin
```

### Downloading From a Custom Source
By default, this package will download jpegtran-bin from GitHub. To use a custom source, set the npm config property `imagemin_local_url`. The downloader will append `/<name>/<version>/vendor/<dist>`.

```
$ npm install jpegtran-bin --imagemin_local_url=https://mymirror.local/path
```

Or add property into your `.npmrc` file([https://docs.npmjs.com/files/npmrc](https://docs.npmjs.com/files/npmrc))

```
imagemin_local_url=https://mymirror.local/path
```

Another option is to use the environment variable `IMAGEMIN_LOCAL_URL`.

```
$ IMAGEMIN_LOCAL_URL=https://mymirror.local/path npm install jpegtran-bin
```


## Usage

```js
const {execFile} = require('child_process');
const jpegtran = require('jpegtran-bin');

execFile(jpegtran, ['-outfile', 'output.jpg', 'input.jpg'], error => {
	console.log('Image minified!');
});
```


## CLI

```
$ npm install --global jpegtran-bin
```

```
$ jpegtran --help
```


## License

MIT © [Imagemin](https://github.com/imagemin)
