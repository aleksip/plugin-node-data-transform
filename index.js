'use strict';

const pluginName = 'plugin-node-data-transform';

function onPatternWriteBegin(patternlab, pattern) {
}

function registerEvents(patternlab) {
  patternlab.events.on('patternlab-pattern-write-begin', onPatternWriteBegin);
}

function pluginInit(patternlab) {
  if (!patternlab) {
    console.error('patternlab object not provided to pluginInit');
    process.exit(1);
  }

  // Attempt to only register events once.
  if (
    patternlab.config.plugins[pluginName] !== undefined &&
    patternlab.config.plugins[pluginName].enabled &&
    !patternlab.config.plugins[pluginName].initialized
  ) {
    // Register events.
    registerEvents(patternlab);

    // Set the plugin initialized flag to true to indicate it is installed and
    // ready.
    patternlab.config.plugins[pluginName].initialized = true;
  }
}

module.exports = pluginInit;
