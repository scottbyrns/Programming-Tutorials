(function () {


	var CanvasWithSineWave = function () {
		console.log('Construct a new CanvasWithLine object.')
		this.canvasModel = new com.tutorials.canvas.CanvasModel(
				document.getElementById('mainCanvas').getContext('2d'),
				1000,
				1000
		);
		
		this.setNumberOfSteps(13);
	};
	
	CanvasWithSineWave.prototype = {
		getCanvasModel: function () {
			console.log('Get the canvas model.');
			return this.canvasModel;
		},
		
		setCanvasModel: function (canvasModel) {
			console.log('Set the canvas model.');
			this.canvasModel = canvasModel || this.canvasModel;
		},
		
		setNumberOfSteps: function (steps) {
			this.numberOfSteps = steps || this.numberOfSteps;
		},
		
		getNumberOfSteps: function () {
			return this.numberOfSteps;
		}
	};
	
	CanvasWithSineWave.prototype.clearCanvas = function () {
		this.getCanvasModel().getCanvas().clearRect(
			0,
			0,
			this.getCanvasModel().getWidth(),
			this.getCanvasModel().getHeight()
		);
	};
	
	/**
	 * This is the method that will actually draw and render the line.
	 */
	CanvasWithSineWave.prototype.drawSineWave = function (myX) {
		console.log('Drawing line.');
		var canvas = this.getCanvasModel().getCanvas();
		
		// sine path from 0 to rads radians scales by sx
        var deltaX = 2 * (Math.PI) / this.getNumberOfSteps();
        var x = myX || 0;
        var pointOnX = 0;
        var pointOnY = 100;


        canvas.beginPath();
        canvas.moveTo(pointOnX, pointOnY);
       
        for (var i=0; i < this.getNumberOfSteps(); i+= 1) {
            x += deltaX;
            y = Math.sin(x);

            pointOnX += (180.0 / (Math.PI)) * deltaX;
            pointOnY = 100 - 50 * y;

            canvas.lineTo(pointOnX, pointOnY);
        }
        canvas.stroke(); 
        canvas.closePath();
	};
	
	
	var myCanvasWithSineWave = new CanvasWithSineWave();
	myCanvasWithSineWave.drawSineWave();
	
	// var animatedSineWaveInterval = setInterval(function () {
	// 	myCanvasWithSineWave.clearCanvas();
	// 	myCanvasWithSineWave.drawSineWave(
	// 		// myCanvasWithSineWave.getNumberOfSteps()	
	// 	);
	// 	myCanvasWithSineWave.setNumberOfSteps(
	// 		myCanvasWithSineWave.getNumberOfSteps() + 1
	// 	);
	// 	if (myCanvasWithSineWave.getNumberOfSteps() > 20) {
	// 		clearInterval(animatedSineWaveInterval);
	// 	}
	// }, 100);

	
})();