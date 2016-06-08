var aimImage = new Image();
aimImage.src = "aim.png";

class Aim extends GameObject
{
    Move(x, y)
    {
        this.x = x;
        this.y = y;
    }
    Draw()
    {
        ctx.drawImage(aimImage, this.x-this.ratio, this.y-this.ratio, 2*this.ratio, 2*this.ratio);
    }
}