com.tutorials.canvas.CanvasModel = function (canvas, height, width) {
	console.log('Creating a new instnace of a CanvasModel.');

	this.setCanvas(canvas);
	this.setHeight(height || 350);
	this.setWidth(width || 150);
};

com.tutorials.canvas.CanvasModel.prototype = {
	/**
	 *  Get the canvas element.
	 */
	getCanvas: function () {
		console.log('Getting the canvas.');
		return this.canvas;
	},
	/**
	 * Set the canvas element.
	 */
	setCanvas: function (canvas) {
		console.log('Setting the canvas.');
		this.canvas = canvas || this.canvas;
	},
	
	getHeight: function () {
		console.log('Getting the canvas height.');
		return this.height;
	},
	
	setHeight: function (height) {
		console.log('Setting the canvas height.');
		this.height = height || this.height;
		this.getCanvas().height = this.getHeight();
	},
	
	getWidth: function () {
		console.log('Getting the canvas width.');
		return this.width;
	},
	
	setWidth: function (width) {
		console.log('Setting the canvas width.');
		this.width = width || this.width;
		this.getCanvas().width = this.getWidth();
	}
};