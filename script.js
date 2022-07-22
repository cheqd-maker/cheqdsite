window.addEventListener('load',function(){
	const canvas= document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width = 900;
	canvas.height = 800;

	
	class InputHandler{
		constructor(){
			this.keys = [];
			window.addEventListener('keydown',e => {
				if((	e.key==='ArrowDown' ||
					 	e.key === 'ArrowUp' || e.key==='ArrowLeft' || e.key === 'ArrowRight')
						&& this.keys.indexOf(e.key) === -1){
					this.keys.push(e.key);
				}

			});
			
			window.addEventListener('keyup',e=>{
				if(		e.key==='ArrowDown' || 
						e.key === 'ArrowUp' ||
						e.key === 'ArrowLeft' ||
						e.key === 'ArrowRight'){
					this.keys.splice(this.keys.indexOf(e.key),1);
				}
			})
		}
	}
	class Player{
		constructor(gameWidth,gameHeight){
			this.gameWidth=gameWidth;
			this.gameHeight=gameHeight;
			this.width=220;
			this.height=284;
			this.x =this.gameWidth/2;
			this.y = this.gameHeight/2;
			this.image = document.getElementById('playerImage');
			this.frameX = this.frameY = 0;
			this.speed = 0;
		}
		draw(context){
			
			context.fillRect(this.x,this.y,this.width,this.height);
			context.drawImage(this.image,this.x,this.y,this.width,this.height);
		}
		update(){
			this.x += this.speed;
			if (input.keys.indexOf('ArrowRight')>-1){
				this.speed=5;
			}
		}
	}
	
	class Background{
		this.image=getElementById('playerImage');
		this.x = canvas.width/2
		this.y = canvas.height/2
	}
	function displayStatusText(){}

	const input = new InputHandler();
	const player = new Player(canvas.width, canvas.height);
	player.draw(ctx);
	player.update();

	const sun = new image();
	function init(){
		sun.src = 'hero.png'
	}
	
	function animate(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.drawImage(sun,0,0,50,50)
		player.draw(ctx);
		player.update();
		requestAnimationFrame(animate);
	}
	animate();
});