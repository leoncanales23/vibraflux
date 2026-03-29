'use strict';

const { Config } = require('remotion');

Config.setVideo({
  fps: 30,
  width: 1920,
  height: 1080,
  codec: 'h264',
  output: 'vibraflux.mp4',
  pixelFormat: 'yuv420p',
});

module.exports = Config;