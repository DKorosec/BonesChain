class Bone
{
	constructor(dir,pos = new Vec2(0,0))
	{
		this.pos = pos;
		this.dir = dir;
	}
	
	getEnd()
	{
		return this.pos.add(this.dir);
	}
	
	getStart()
	{
		return this.pos.copy()
	}
	
	len()
	{
		return this.dir.len();
	}
}