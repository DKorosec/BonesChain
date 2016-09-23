/*Please dont use EasyCanvasLib library in production, this lib is just a quick hax for fast debugging!*/
class EasyCanvasLib{
	constructor(canvasDOM)
	{
		this.canvas = canvasDOM;
		this.ctx = this.canvas.getContext("2d");
	}
	displayBorder()
	{
		this.canvas.style="border:1px solid #000000";
	}
	
	set width(width){ this.canvas.width = width;} 
	get width() { return this.canvas.width; }
	
	set height(height){ this.canvas.height = height; }
	get height() { return this.canvas.height; }
	
	get context() { return this.ctx; }
	get canvasDOM() { return this.canvas; }
	
	clearDisplay()
	{
		this.ctx.save();
		// Use the identity matrix while clearing the canvas
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		this.ctx.clearRect(0, 0, canvas.width, canvas.height);
		// Restore the transform
		this.ctx.restore();
	}
	
	
	fillRect(x,y,width,height,color)
	{
		this.ctx.beginPath();
		this.ctx.fillStyle  = color;
		this.ctx.rect(x,y,width,height);
		this.ctx.fill();
	}
	
	drawRect(x,y,width,height,thickness=1,color=undefined)
	{
		this.ctx.beginPath();
		this.ctx.lineWidth = thickness;
		this.ctx.strokeStyle  = color;
		this.ctx.rect(x,y,width,height);
		this.ctx.stroke();
	}
	
	drawArc(x,y,radius=1,width=1,color=undefined)
	{
		this.ctx.beginPath();
		this.ctx.strokeStyle  = color;
		this.ctx.lineWidth = width;
		this.ctx.arc(x,y,radius,0,2*Math.PI);
		this.ctx.stroke();
	}
	drawPoint(x,y,radius=1,color=undefined)
	{
		this.ctx.beginPath();
		this.ctx.fillStyle  = color;
		this.ctx.arc(x,y,radius,0,2*Math.PI);
		this.ctx.fill();
	}
	drawLine(x1,y1,x2,y2,width=1,color=undefined)
	{
		this.ctx.beginPath();
		this.ctx.lineWidth = width;
		this.ctx.moveTo(x1,y1);
		this.ctx.lineTo(x2,y2);
		this.ctx.strokeStyle = color;
		this.ctx.stroke();
	}
}