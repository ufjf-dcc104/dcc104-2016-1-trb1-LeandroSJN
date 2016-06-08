
var playerImage = new Image();
playerImage.src = "X-Wing_Top_View.png";

class Player extends GameObject
{
    Draw()
    {
        //ctx.strokeStyle = 'black';
        //ctx.beginPath();
        //ctx.arc(this.x, this.y, this.ratio, 0, 2*Math.PI);
        //ctx.closePath();
        //ctx.stroke();
        
        if(this.danificado > 0)
        {
            ctx.strokeStyle = 'hsl('+(this.danificado/2*120)+', 50%, 50%)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.ratio, 0, 2*Math.PI);
            ctx.closePath();
            ctx.stroke();
        }
        else
        {
            ctx.fillStyle = this.cor;
        }
        this.danificado -= dt;
        ctx.drawImage(playerImage, this.x-this.ratio, this.y-2*this.ratio, 4*this.ratio, 4*this.ratio);
    }
    speedLimit(limit)
    {
        if(this.vx > limit)
            this.vx = limit;
        if(this.vx < -limit)
            this.vx = -limit;
        if(this.vy > limit)
            this.vy = limit;
        if(this.vy < -limit)
            this.vy = -limit;
    }
}