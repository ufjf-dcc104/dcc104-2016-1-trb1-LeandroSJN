
var shotImage = new Image();
shotImage.src = "laser1.png";

class PlayerShot extends GameObject
{
    Draw()
    {
        //ctx.strokeStyle = 'black';
        //ctx.beginPath();
        //ctx.arc(this.x, this.y, this.ratio, 0, 2*Math.PI);
        //ctx.closePath();
        //ctx.stroke();
        
        var mod = Math.sqrt(Math.pow(this.vx, 2) + Math.pow(this.vy, 2));
        var ang = Math.acos((this.vx)/mod);
        if(this.vy < 0)
        {
            ang = -ang;
        }
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(ang);
        ctx.drawImage(shotImage, -4*this.ratio, -4*this.ratio, 8*this.ratio, 8*this.ratio);
        ctx.restore();
    }
    WallCollision()
    {
        
    }
}