//////   Loadanig Screen   //////////////

$(document).ready(function () {
    $(".loading-screen").fadeOut(2500, function () {
        $("body").css("overflow", "auto");
    });

})

/////////  Loadanig Screen End  ///////////


import {Movies} from './movieDbApi.js';
import {Menu} from './menu.js';
import {Form} from './form.js';

new Movies;
new Menu;
new Form;

