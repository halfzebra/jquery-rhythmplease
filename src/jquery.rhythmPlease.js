(function (w, $) {
  'use strict';

  /**
   * jQuery plugin for aligning blocks with vertical rhythm.
   *
   * @param settings
   * @returns {$.fn}
   */
  $.fn.rhythmPlease = function (settings) {

    settings = settings || {};

    var $rhythmPleaseColl = $(this),
        defaults = {

          // Property for compensating. 'height' for blocks, 'margin-bottom' for images.
          'property': 'margin-bottom',

          // Rhythm base, assume "px".
          'base': 28,

          // Resize with the screen width.
          'resize': true
        },
        rhytmStuff = function () {
          var $el = null,
              heigth = 0,
              rhytmedHeight = 0,
              multiplier = 1;

          $rhythmPleaseColl.each(function (key, value) {
            $el = $(value);
            heigth = $el.height();
            multiplier = Math.ceil(heigth / settings.base);
            rhytmedHeight = (multiplier * settings.base) - heigth;

            $el.css(settings.property, rhytmedHeight + 'px');
          });
        };

    settings = $.extend(defaults, settings);

    // First run.
    rhytmStuff(settings);

    if (settings.resize === true) {

      // Attach event for scaling.
      $(w).on('resize', function () {
        if (window.resizeEvt) {
          clearTimeout(w.resizeEvt);
        }

        w.resizeEvt = setTimeout(function () {
          rhytmStuff(settings);
        }, 250);
      });
    }

    return this;
  };
}(window, jQuery));
