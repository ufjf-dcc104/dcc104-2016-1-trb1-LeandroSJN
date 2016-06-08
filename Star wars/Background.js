var backgroundImage = new Image();
backgroundImage.src = "fundo.png";

class Background extends GameObject
{
    Draw()
    {
        ctx.drawImage(backgroundImage, this.x-2*this.ratio, this.y-this.ratio, 4*this.ratio, 2*this.ratio);
    }
}