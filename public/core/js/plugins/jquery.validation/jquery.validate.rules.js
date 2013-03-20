"use strict";
$(function () {
	
var rules = [];
    rules["language"] = function(value, element) {
        var isValid = value.match(/([nl]|[en])/)
        return isValid;
	};
    rules["path"] = function(value, element) {
		if ( element.value.match(/(\{|\}|\=|\&|\#|\%|\^|\@|\*)/)  ) { return false; }
		else if ( element.value === "" ) { return false; }
		else{ return true; }
	};
	for (var key in rules) {
		$.validator.addMethod(key, rules[key]);
	}
});
