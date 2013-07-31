/*!
 * lunr.utils
 * Copyright (C) @YEAR Oliver Nightingale
 */

/**
 * A namespace containing utils for the rest of the lunr library
 */
lunr.utils = {}

/**
 * Print a warning message to the console.
 *
 * @param {String} message The message to be printed.
 * @memberOf Utils
 */
lunr.utils.warn = (function (global) {
  return function (message) {
    // Just dropping this for now. We can warn in the future if needed.
  }
})(this)

/**
 * Returns a zero filled array of the length specified.
 *
 * @param {Number} length The number of zeros required.
 * @returns {Array}
 * @memberOf Utils
 */
lunr.utils.zeroFillArray = (function () {
  var zeros = [0]

  return function (length) {
    while (zeros.length < length) {
      zeros = zeros.concat(zeros)
    }

    return zeros.slice(0, length)
  }
})()
