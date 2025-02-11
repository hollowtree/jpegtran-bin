'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url_prefix = process.env.RAW_GITHUBUSERCONTENT_LOCAL_URL ||
	process.env.npm_config_imagemin_local_url ||
	process.env.IMAGEMIN_LOCAL_URL ||
	'https://raw.githubusercontent.com/imagemin';

const url = `${url_prefix}/jpegtran-bin/v${pkg.version}/vendor/`;

module.exports = new BinWrapper()
	.src(`${url}macos/jpegtran`, 'darwin')
	.src(`${url}linux/x86/jpegtran`, 'linux', 'x86')
	.src(`${url}linux/x64/jpegtran`, 'linux', 'x64')
	.src(`${url}freebsd/x86/jpegtran`, 'freebsd', 'x86')
	.src(`${url}freebsd/x64/jpegtran`, 'freebsd', 'x64')
	.src(`${url}sunos/x86/jpegtran`, 'sunos', 'x86')
	.src(`${url}sunos/x64/jpegtran`, 'sunos', 'x64')
	.src(`${url}win/x86/jpegtran.exe`, 'win32', 'x86')
	.src(`${url}win/x64/jpegtran.exe`, 'win32', 'x64')
	.src(`${url}win/x86/libjpeg-62.dll`, 'win32', 'x86')
	.src(`${url}win/x64/libjpeg-62.dll`, 'win32', 'x64')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'jpegtran.exe' : 'jpegtran');
