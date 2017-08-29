global.$       = global.jQuery = require('jquery');
var foundation = require('../../node_modules/foundation-sites/dist/js/foundation.js');
var Chocolat = require('../../node_modules/chocolat/src/js/jquery.chocolat.js');

$(document).foundation();

$(document).ready(function(){
    $('#example1').Chocolat();
});
