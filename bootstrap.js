/**
 * Helper method to include external javascript files.
 * Included resources are included into the global namespace (window).
 */
window.include = window.include || function () {
	// Fetch the documents head element from the DOM.
	var documentHead = document.getElementsByTagName('head')[0];
	/**
	 *	Itterate over the arguments to this method call and include the javascript file with the provided path.
	 */
	for (var i = 0, argumentCount = arguments.length; i < argumentCount; i += 1) {
		var script = document.createElement('script');
		script.setAttribute("type", "text/javascript");
		script.setAttribute("src", arguments[i]);
		
		documentHead.appendChild(script);
		
		console.log('Includeing: ' + arguments[i]);
	}
};


