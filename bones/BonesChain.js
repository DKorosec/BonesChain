class BonesChain
{
	constructor(bones = [])
	{
		this.bones = bones;
	}

	addBone(bone)
	{
		if(this.bones.length > 0)
			bone.pos = this.bones[this.bones.length-1].getEnd();
		this.bones.push(bone); 
	}
	
	move(bone_idx,newPos)
	{
		if(bone_idx <= 0)
			return this.moveTailToLast(newPos,0);
		if(bone_idx >= this.bones.length)
			return this.moveTailToFirst(newPos,this.bones.length-1);
		
		this.moveTailToFirst(newPos,bone_idx-1);
		this.moveTailToLast(newPos,bone_idx); 
	}
	
	moveTailToFirst(newPos,idx)
	{
		if(idx < 0 || idx >= this.bones.length)
			return;
		
		var currentBone = this.bones[idx];
		var newDir = currentBone.pos.vecTo(newPos);
		newDir = newDir.resize(currentBone.len());
		currentBone.dir = newDir;
		var oldPos = currentBone.pos;
		currentBone.pos = newPos.sub(newDir);
		this.moveTailToFirst(currentBone.pos,idx-1);
	}
	
	moveTailToLast(newPos,idx)
	{
		if(idx < 0 || idx >= this.bones.length)
			return;
		var currentBone = this.bones[idx];
		var newDir = currentBone.getEnd().vecTo(newPos).resize(currentBone.len());
		currentBone.pos = newPos.copy();
		currentBone.dir = newDir.scale(-1);
		this.moveTailToLast(currentBone.getEnd(),idx+1);
	}
	
}