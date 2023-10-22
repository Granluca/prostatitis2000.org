

jQuery(document).ready(function () {

  jQuery('ul.nav li.dropdown, ul.nav li.dropdown-submenu').hover(function() {
        jQuery(this).find(' > .dropdown-menu').stop(true, true).delay(250).slideToggle();
    }, function() {
        jQuery(this).find(' > .dropdown-menu').stop(true, true).delay(50).fadeOut();
    });
			


});