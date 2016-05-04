define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config, callback) {
    config.globalResources('./tabs');
    config.globalResources('./tab');

    if (typeof callback === 'function') {}
  }
});