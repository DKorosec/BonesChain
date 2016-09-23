/*
  REALY DIRTY CODE HERE, JUST FOR VISUAL DEMO.
*/
var ecl = new EasyCanvasLib(document.getElementById("canvas"));
ecl.displayBorder();
ecl.width = 800;
ecl.height = 500;
mousePos = null;
mouseDown = false;
grabBoneIdx = 0;

/*
  HOW TO CREATE CHAIN!
*/
var s = new BonesChain();
//first we add the start bone! this bone has a direction (and length - of a vector) and a starting position where we want to put the bone!
s.addBone(new Bone(new Vec2(10,0),new Vec2(10,250)));
for(var i=0;i<50;i++)
	s.addBone(new Bone(new Vec2(10,0))); //other bones only need direction, because they are chained to prev absolute positioN!
/*-------------------*/


function render(bones)
{
	for(var bone of bones)
	{
		ecl.drawLine(...bone.pos,...bone.pos.add(bone.dir),2,"green");
	}
}

function logic()
{
	ecl.clearDisplay();
	if(mousePos != null && mouseDown)
	{
		s.move(grabBoneIdx,new Vec2(mousePos.x,mousePos.y));
	}
	render(s.bones);
	setTimeout(logic,1000/60);
}

setTimeout(logic,1000/60);




document.onmousedown = function(e) {
	
	grabBoneIdx = 0;
	var radius = Infinity;
	if(mousePos != null)
	{
		var m = new Vec2(mousePos.x,mousePos.y);
		for(var i=1;i<s.bones.length;i++)
		{
			var bone = s.bones[i];
			var cbone = s.bones[grabBoneIdx];
			if(bone.pos.distance(m) < cbone.pos.distance(m))
				grabBoneIdx = i;
		}
		radius = s.bones[grabBoneIdx].pos.distance(m);
		var bone = s.bones[s.bones.length-1];
		var cbone = s.bones[grabBoneIdx];
		if(bone.getEnd().distance(m) < cbone.pos.distance(m))
		{	
			grabBoneIdx = s.bones.length;
			radius = bone.getEnd().distance(m);
		}
	}
	if(radius < 50)
		mouseDown = true;
    else
		mouseDown = false;
};

document.onmouseup = function(e) {
	mouseDown = false;
};


canvas.addEventListener('mousemove', function(evt) {
	mousePos = getMousePos(ecl.canvas, evt);
}, false);

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

