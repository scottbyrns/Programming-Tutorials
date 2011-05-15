console.log('Initializing the canvas tutorial.');
// Declare an anonymous function to provide a protected scope so we do not clobber the global name space.
(function () {
	
	window.testCanvas = new com.tutorials.canvas.CanvasModel(
			document.getElementById('mainCanvas'),
			1000,
			1000
	);
		
})();