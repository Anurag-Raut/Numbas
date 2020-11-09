Numbas.queueScript('localisation',['i18next','localisation-resources'],function(module) {
    i18next.init({
        lng: Numbas.locale.preferred_locale,
        lowerCaseLng: true,
        keySeparator: false,
        nsSeparator: false,
        interpolation: {
            unescapePrefix: '-',
            format: function(value,format) {
                if(format=='niceNumber') {
                    return Numbas.math.niceNumber(value);
                }
            }
        },
        resources: Numbas.locale.resources
    });
    module.exports.R = function(){{ return i18next.t.apply(i18next,arguments) }};
});
