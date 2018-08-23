'use strict';

let through = require('through2');

const PLUGIN_NAME = 'gulp-assets';

let gulpAssets = ( url, assetsPath) => {
	let opt = {
		imgUrl: '',
		assetsUrl: '',
		assetsPath: ''
	}
	if (typeof url !== 'string') {
		for (const key in url) {
			opt[key] = url[key]
		}
	} else {
		opt.imgUrl = url || ''
		opt.assetsUrl = url || ''
	}
	if(opt.assetsUrl !== '' && opt.assetsUrl.substr(opt.assetsUrl.length - 1) !== '/'){
			opt.assetsUrl = opt.assetsUrl + '/'
	}
	if(opt.imgUrl !== '' && opt.imgUrl.substr(opt.imgUrl.length - 1) !== '/'){
			opt.imgUrl = opt.imgUrl + '/'
	}
	if (assetsPath) {
		opt.assetsPath = assetsPath
	}
	return through.obj((file, enc, cb) => {

		if (file.isBuffer() && (opt.assetsUrl !== '' || opt.imgUrl !== '' )) {
			let fileString = file.contents.toString();
			if (opt.assetsUrl !== '' || opt.imgUrl !== '') {	
				if (!opt.type) {
					opt.type = 'img,css,font,' + opt.assetsPath
				}
				let assetsPath = opt.assetsPath
				if(opt.assetsPath.length !== 0){
					assetsPath = assetsPath + '/'
				}
				if (opt.type.indexOf(opt.assetsPath) > -1) {
					let assetsReplaceUrl = opt.assetsUrl + assetsPath
					const assetsRegexp = new RegExp(`\\.\\.\\/\\.\\.\\/${opt.assetsPath}\\/|\\.\\.\\/${opt.assetsPath}\\/|\\.\\/${opt.assetsPath}\\/`, 'gim');
					fileString = fileString.replace(assetsRegexp, assetsReplaceUrl);
				}
				if (opt.type.indexOf('img') > -1) {
					let imgReplaceUrl = opt.imgUrl + assetsPath
					// 替换 img
					fileString = fileString.replace(/(\.\.\/\.\.\/img\/|\.\.\/img\/|\.\/img\/)/g, imgReplaceUrl + 'img/');
				}
				if (opt.type.indexOf('font') > -1) {
					let fontReplaceUrl = opt.assetsUrl + assetsPath
					// 替换 img
					fileString = fileString.replace(/(\.\.\/\.\.\/font\/|\.\.\/font\/|\.\/font\/)/g, fontReplaceUrl + 'font/');
				}
				file.contents = new Buffer(fileString || '');

				cb(null, file);
				return;
			} else {
				file.contents = new Buffer(fileString || '');
				cb(null, file);
				return;
			}
		}

		cb(null, file);
	});

};

module.exports = gulpAssets;
