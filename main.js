canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["https://cdn.cheapism.com/images/Summer_Car_Races.2e16d0ba.fill-1440x605.png",
"https://wallpaperaccess.com/full/955484.jpg",
"https://assets.gamepur.com/wp-content/uploads/2021/02/28022110/Full-Throtle.jpg",
"https://www.lifewire.com/thmb/sAK1fte11PQg2NGaVmm7qG9r0RI=/1280x1024/filters:fill(auto,1)/speed-racing-pro-2-aee2f9e3fbbf45d5b42264e6cf04f2f1.png"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;

background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);
rover_image = "https://i.postimg.cc/YqdnnNX1/car1.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}
	
