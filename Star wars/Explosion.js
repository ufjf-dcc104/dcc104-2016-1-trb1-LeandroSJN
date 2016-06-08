
var explosionSprite = new Image();
explosionSprite.src = "VFX_ExploIb_D.png";

class Explosion extends GameObject
{
    Draw()
    {
        ctx.drawImage(explosionSprite,
                      Math.floor(this.col)*256,
                      this.col2*256,
                      256,
                      256,
                      this.x-this.ratio,
                      this.y-this.ratio,
                      2*this.ratio,
                      2*this.ratio
        );
        
        if(this.col >= 7)
        {
            if(this.col2 >= 3)
            {
                this.col2 = 3;
                this.col = 7;
            }
            else
            {
                this.col2++;
                this.col = 0;
            }
        }
        else
        {
            this.col+= 25*dt;
        }
    }
    WallCollision()
    {
        
    }
}