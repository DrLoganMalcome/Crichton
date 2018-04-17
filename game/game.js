
		function Food()
	{
	 this.life=0;
	 this.x=0;
	 this.y=0;
	 this.img=new Image();
	 this.type;
	}
	
			function FoodFall()
	{
	 this.life=0;
	 this.x=0;
	 this.y=0;
	 this.img=new Image();
	 this.type;
	}


var c=document.getElementById("myCanvas");
ctx=c.getContext("2d");

var cImage=new Image();

score=0;

crouton=new Object()

crouton.x=400;
crouton.y=450;

crouton.eat=0;

crouton.cheese=0;

crouton.eating=0;

crouton.dir=true;

crouton.speed=3;

addImage=0;

crouton.image=new Array();

crouton.image[0]=new Image();
crouton.image[1]=new Image();
crouton.image[2]=new Image();
crouton.image[3]=new Image();
crouton.image[0].src="g/cw1.png";
crouton.image[1].src="g/cw2.png";
crouton.image[2].src="g/cw3.png";
crouton.image[3].src="g/cw4.png";

crouton.image[4]=new Image();
crouton.image[5]=new Image();
crouton.image[6]=new Image();
crouton.image[7]=new Image();
crouton.image[4].src="g/cwm1.png";
crouton.image[5].src="g/cwm2.png";
crouton.image[6].src="g/cwm3.png";
crouton.image[7].src="g/cwm4.png";

crouton.image[9]=new Image()
crouton.image[9].src="g/ckickm.png";

crouton.image[10]=new Image()
crouton.image[10].src="g/ckick.png";


crouton.image[11]=new Image()
crouton.image[11].src="g/cEatm1.png";

crouton.image[12]=new Image()
crouton.image[12].src="g/cEat1.png";



var cheese=new Image();
var apple=new Image();
var iceCream=new Image();

otherCheese=0;
otherX=0;
otherY=0;
otherDir=true;

cheese.src="foods/cheese.png";
apple.src="foods/apple.png";
iceCream.src="foods/iceCream.png";

var floor=new Image();
floor.src="backs/back1.png";

var sky=new Image();
sky.src="backs/sky.png";

var music=new Audio('music.mp3');
	music.play();
	music.onload=function()
	{
	  music.play();
	}
	
	var eats=new Audio('eat.mp3');
	var kicks=new Audio('kick.wav');
	
for(var t=0;t<1200;t++)
{
	
}

var timer=setInterval("tick()",10);

function clicker(event)
{
			for(var ll=0;ll<9;ll++)
			{
			if(food[ll].life>0)
			 {
				if(event.clientX>food[ll].x && event.clientX<food[ll].x+120) {
					if(event.clientY>food[ll].y && event.clientY<food[ll].y+100 ) {



for(var l=0;l<9;l++)
	 {
			if(foodFall[l].life<1)
			{
				foodFall[l].life=1;
				foodFall[l].x=food[ll].x;
				foodFall[l].y=food[ll].y;
				
				rnd=Math.random()*3;
				rnd=Math.floor(rnd);
				
				if(food[ll].type==0)
				{
					foodFall[l].type=0;
					foodFall[l].img=cheese;
					
				}
								else if(food[ll].type==1)
				{
					foodFall[l].type=1;
					foodFall[l].img=apple;
					
				}
								else
				{
					foodFall[l].type=2;
					foodFall[l].img=iceCream;
					
				}
				
				l=111;
				//break;
			}						
					}
					food[ll].life=0;
				}
			 }
			}
}
}

function start()
{
 
}

var currentImage=0.0;

var walk=true;

var rnd;

var foodTime=0;

var food=new Array(8)
var foodFall=new Array(8)

for(var l=0;l<9;l++)
	{
			food[l]=new Food();
	}
	
	for(var l=0;l<9;l++)
	{
			foodFall[l]=new FoodFall();
	}

function tick()
{
	
	foodTime--;
	
	if(foodTime<1)
	{
		
		for(var l=0;l<9;l++)
	 {
			if(food[l].life<1)
			{
				food[l].life=1;
				food[l].x=-100;
				food[l].y=5;
				
				rnd=Math.random()*3;
				rnd=Math.floor(rnd);
				
				if(rnd==2)
				{
					food[l].type=0;
					food[l].img=cheese;
					
				}
								else if(rnd==1)
				{
					food[l].type=1;
					food[l].img=apple;
					
				}
								else
				{
					food[l].type=2;
					food[l].img=iceCream;
					
				}
				
				l=111;
				//break;
			}
	 }
	 foodTime=100+Math.random()*125;
	}
	
	// ctx.clearRect(0,0,800,600);
	
		ctx.drawImage(sky,0,0);
	
	ctx.drawImage(floor,0,380);
	
			for(var l=0;l<9;l++)
			{
			if(food[l].life>0)
			 {
				food[l].x+=5;
				ctx.drawImage(food[l].img,food[l].x,food[l].y);
			//	document.write(food[l].y)
				ctx.stroke();
				
				if(food[l].x>800)
				{
					food[l].life=0;
				}
				
			 }
			
			}
			
			
			
			for(var l=0;l<9;l++)
			{
			if(foodFall[l].life>0)
			 {
				foodFall[l].y+=3;
				ctx.drawImage(foodFall[l].img,foodFall[l].x,foodFall[l].y);
			//	document.write(food[l].y)
				ctx.stroke();
				
				if(foodFall[l].y>600)
				{
					foodFall[l].life=0;
				}
				
				
				if(crouton.x>foodFall[l].x && crouton.x<foodFall[l].x+120)
				{
									if(crouton.y-120>foodFall[l].y-70 && crouton.y-90<foodFall[l].y+90)
				{
					foodFall[l].life=0;
					if(foodFall[l].type==0)
					{
						walk=false;
						crouton.cheese=51;
						otherCheese=100;
						otherX=crouton.x;
otherY=crouton.y;
otherDir=crouton.dir;
kicks.play();
						
					}
										if(foodFall[l].type==1 || foodFall[l].type==2)
					{
						eats.play();
						crouton.eat=50;
					}

				}
				}
				
				
			 }
			
			}
	
	
	//ctx.fillText(crouton.cheese);
	
	if(crouton.cheese>0)
	{
		crouton.cheese--;
		if(crouton.cheese<1)
		{
			walk=true;
		}
	}
	
	
		if(walk==true)
	{
		currentImage+=.05;
		
		if(currentImage>3.9)
		{
			currentImage=0;
		}
		
		
		if(crouton.dir==false)
	{
		
		crouton.x-=crouton.speed;

	}
	
	else{
		crouton.x+=crouton.speed;
	}
		
		
		
	}
	
	addImage=0;
	
	if(crouton.dir==false)
	{
		
	
		
		if(walk==true)
		{
			addImage=4;
		}
	}
	
	else{
	
	}
	
	if(crouton.x>800){
		crouton.dir=false;
	}
	if(crouton.x<0)
	{
		crouton.dir=true;
	}
	
	

	cImage=crouton.image[Math.floor(currentImage)+addImage]
	
	if(crouton.cheese>0){
		score-=1;
			if(crouton.dir==false)
	{
		cImage=crouton.image[9];
	}
	else
	{
		cImage=crouton.image[10];
	}
	}
	
		if(crouton.eat>0)
	{
		score+=2;
		crouton.eat--;
		
		
			if(crouton.dir==false)
	{
		cImage=crouton.image[11];
	}
	else
	{
		cImage=crouton.image[12];
	}
		
	}
	
	
	ctx.drawImage(cImage,crouton.x-150,crouton.y-150,300,300);
	
	
							if(otherCheese>0)
							{
								otherCheese--;
								if(otherDir==true)
								{
									otherX+=10;
									otherY-=4;
								}
								else
								{
										otherX-=10;							
									otherY-=4;
								}
								
								ctx.drawImage(cheese,otherX-60,otherY);
								
							}

	

	ctx.stroke();
	
	document.forms[0].iny.value=score;
	
}


