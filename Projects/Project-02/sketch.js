var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var img12;
var img13;
var img14;
var img15;
var img16;
var img17;
var img18;
var img19;
var img20;
var fontRegular;

var text1,text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19, text20;

function preload(){
	  img1= loadImage('images/Nazi_1.jpg');
	  img2= loadImage('images/Nazi_2.jpg');
	  img3= loadImage('images/Nazi_3.jpg');
	  img4= loadImage('images/Nazi_4.jpg');
	  img5= loadImage('images/Nazi_5.jpg');
	  img6= loadImage('images/Nazi_6.jpg');
	  img7= loadImage('images/Nazi_7.jpg');
	  img8= loadImage('images/Nazi_8.jpg');
	  img9= loadImage('images/Nazi_9.jpg');
	  img10= loadImage('images/Nazi_10.jpg');
	  img11= loadImage('images/Nazi_11.jpg');
	  img12= loadImage('images/Nazi_12.jpg');
	  img13= loadImage('images/Nazi_13.jpg');
	  img14= loadImage('images/Nazi_14.jpg');
	  img15= loadImage('images/Nazi_15.jpg');
	  img16= loadImage('images/Nazi_16.jpg');
	  img17= loadImage('images/Nazi_17.jpg');
	  img18= loadImage('images/Nazi_18.jpg');
	  img19= loadImage('images/Nazi_19.jpg');
	  img20= loadImage('images/Nazi_20.jpg');

text1= "hi there";
text2= "go away";
text3= "no don't do that";
text4= "";
text5= "";
text6= "";
text7= "";
text8= "";
text9= "";
text10= "";
text11= "";
text12= "";
text13= "";
text14= "";
text15= "";
text16= "";
text17= "";
text18= "";
text19= "";
text20= "";

}
function setup(){
	createCanvas(windowWidth, windowHeight);
}



function draw(){
	
	var imageArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];


if( mouseIsPressed && mouseX>100 && mouseY>100 && mouseX<500 && mouseY<700){
		var randomimage1 = random(imageArray);
		image(randomimage1, 100, 100, 400, 600);

text(text1, 150, 200);
	}
	
	else if( mouseIsPressed && mouseX>100 && mouseY>100 && mouseX<950 && mouseY<700){

		var randomimage2 = random(imageArray);
		image(randomimage2, 550, 100, 400, 600);

text(text2, 650, 200);

	}
	else if( mouseIsPressed && mouseX>100 && mouseY>100 && mouseX<1400 && mouseY<700){

		var randomimage3 = random(imageArray);
		image(randomimage3, 1000, 100, 400, 600);

text(text3, 1050, random(200,400));
	}
	
}
