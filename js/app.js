// Enemies our player must avoid
var Enemy = function(posX,posY,s) {
    
    
    this.x=posX;
    this.y=posY;
    this.speed=s;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
   this.x += this.speed * dt;

    // when off canvas, reset position of enemy to move across again
    if (this.x > 505) {    // 505 canvas width
        this.speed =  90 + Math.floor(Math.random() * 510);
        this.x = -100;
    }

    // Check for collision between player and enemies
    if (this.x < 38 + player.x && this.y < player.y + 30 && player.x < 61+ this.x && 25+ this.y> player.y)
         {

        player.y = 380;
        player.x = 200;
        
         }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var enemyPos=[60,140,220];
var enemy;
var allEnemies=[];

enemyPos.forEach(function(posY) {
	e=new Enemy(0,posY,90+Math.floor(Math.random()*510));
	allEnemies.push(e);
});

var Player=function(posX,posY,s){

	this.sprite="images/char-boy.png";
	this.speed=s;
	this.x=posX;
	this.y=posY;

};
// this function prevent the player to move out the screen
Player.prototype.update=function(){

	if (this.x<0)
		{this.x=0;}

	if (this.x>400)
		{this.x=400;}

	if(this.y<0){
		alert('You Win');
		this.y=380;
		this.x=200;

	}

	if (this.y>380){
	    this.y=380;
	}

};
//Draw the player on the canvas
Player.prototype.render=function(){
	ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
};

//this function handle the keyboard directions <left,right,up,down>
Player.prototype.handleInput=function(key){
	

		if (key==='down')
                 this.y= this.y + (30 + this.speed);
		  
		if (key==='up')
		         this.y= this.y -  (this.speed+30);
		     
		if (key==='left')
		         this.x= this.x - (this.speed+50);
		      
        if (key==='right')
                 this.x = this.x + (50 + this.speed);
		
};
//create instance of Player
var player=new Player(200,380,50);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
