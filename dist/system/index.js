'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      function configure(config, callback) {
        config.globalResources('./tabs');
        config.globalResources('./tab');

        if (typeof callback === 'function') {}
      }

      _export('configure', configure);
    }
  };
});