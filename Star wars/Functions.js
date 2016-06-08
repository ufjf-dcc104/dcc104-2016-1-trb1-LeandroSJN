function createshot(x, y)
{
    var shot = new PlayerShot();
    var direction = directionalVector(player, aim);
    shot.x = x;
    shot.y = y;
    shot.ratio = 8;
    shot.cor = 'yellow';
    shot.col = 0;
    shot.vx = 800*direction[0];
    shot.vy = 800*direction[1];
    return shot;
}

function createEnemyShot(x, y, enemy)
{
    var shot = new EnemyShot();
    var direction = directionalVector(enemy, player);
    shot.x = x;
    shot.y = y;
    shot.ratio = 8;
    shot.cor = 'yellow';
    shot.col = 0;
    shot.vx = 700*direction[0];
    shot.vy = 700*direction[1];
    return shot;
}
        
function criaInimigo(x, y)
{
    var inimigo = new Enemy();
    inimigo.ratio = 20;
    inimigo.x = x;
    inimigo.y = y;
    dir = directionalVector(player, inimigo);
    inimigo.vx = dir[0]*(Math.random()*(-300 + 100) - 100);
    inimigo.vy = dir[1]*(Math.random()*(-300 + 100) - 100);
    return inimigo;
}

function directionalVector(object1, object2)
{
    var vector = [];
    vector[0] = object2.x - object1.x;
    vector[1] = object2.y - object1.y;
    var mod = Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2));
    vector[0] = vector[0]/mod;
    vector[1] = vector[1]/mod;
    return vector;
}

function freiaPlayer()
{
    if(player.vx > 0)
    {
        player.vx += -20;
    }
    else if(player.vx < 0)
    {
        player.vx += +20;
    }
    if(player.vy > 0)
    {
        player.vy += -20;
    }
    else if(player.vy < 0)
    {
        player.vy += +20;
    }
}
		
function bloco1()
{
    var num = Math.random()*(6);
    for (var i = 1; i < num; i++)
    {
        inimigos.push(criaInimigo(screen.width, 200*i));
    }
}