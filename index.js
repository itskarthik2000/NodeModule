/**
 * Escape special characters in the given string of html
 *
 * @param {String} html
 * @return {String}
 */
module.exports = {

	escape: function(html){
		return String(html)
			.replace(/&/g,'&amp;')
			.replace(/"/g,'&quot;')
			.replace(/'/g,'&#39;')
			.replace(/>/g,'&gt;')
			.replace(/</g,'&lt;');
	}

};

