(function () {


	var CanvasWithLine = function () {
		console.log('Construct a new CanvasWithLine object.')
		this.canvasModel = new com.tutorials.canvas.CanvasModel(
				document.getElementById('mainCanvas').getContext('2d'),
				1000,
				1000
		);
	};
	
	CanvasWithLine.prototype = {
		getCanvasModel: function () {
			console.log('Get the canvas model.');
			return this.canvasModel;
		},
		
		setCanvasModel: function (canvasModel) {
			console.log('Set the canvas model.');
			this.canvasModel = canvasModel || this.canvasModel;
		}
	};
	
	/**
	 * This is the method that will actually draw and render the line.
	 */
	CanvasWithLine.prototype.drawLine = function () {
		console.log('Drawing line.');
		var canvas = this.getCanvasModel().getCanvas();
		
		canvas.beginPath();
		canvas.moveTo(0,0);
		canvas.lineTo(100, 100);
		canvas.stroke();
	};
	
	
	var myCanvasWithLine = new CanvasWithLine();
	myCanvasWithLine.drawLine();

	
})();