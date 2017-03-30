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
var img21, img22, img23, img24, img25;
var font5;

var text1,text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19, text20;

function preload(){


text1= "My anaconda don't want none unless you got buns, hun.";
text2= "'Cause darling I'm a nightmare dressed like a daydream.";
text3= "I'm on the right track, baby I was born this way.";
text4= "I'm rising so high, out of my mind, so let it rain over me.";
text5= "All the single ladies, now put your hands up.";
text6= "'Cause I got that boom boom that all the boys chase. All the right junk in all the right places.";
text7= "Baby I don't need dollar bills to have fun tonight.";
text8= "Hey I just met you. And this is crazy. But here's my number. So call me maybe.";
text9= "Yeah, is it too late now to say sorry? Cause I'm missing more than just your body.";
text10= "There's a fire starting in my heart, reaching a fever pitch, and it's bringing me out the dark.";
text11= "Somebody call 911! Shawty fire burning on the dance floor.";
text12= "'Cause girl, you're amazing. Just the way you are.";
text13= "Don't stop, make it pop, DJ, blow my speakers up.";
text14= "Give me everything tonight. For all we know we might not get tomorrow";
text15= "I'm too hot, hot damn. Called a police and a fireman.";
text16= "You shoot me down but I won't fall. I am titanium.";
text17= "I'll keep you my dirty little secret.";
text18= "So I cross my heart and I hope to die. That I'll only stay with you one more night.";
text19= "Baby you light up my world like nobody else.";
text20= "I came in like a wrecking ball. I never hit so hard in love";

font5 = loadFont("text/SourceCodePro-Black.ttf");

}
function setup(){
	createCanvas(windowWidth, windowHeight);
		  img1= createImg('images/Nazi_1.jpg');
	  img2= createImg('images/Nazi_2.jpg');
	  img3= createImg('images/Nazi_3.jpg');
	  img4= createImg('images/Nazi_4.jpg');
	  img5= createImg('images/Nazi_5.jpg');
	  img6= createImg('images/Nazi_6.jpg');
	  img7= createImg('images/Nazi_7.jpg');
	  img8= createImg('images/Nazi_8.jpg');
	  img9= createImg('images/Nazi_9.jpg');
	  img10= createImg('images/Nazi_10.jpg');
	  img11= createImg('images/Nazi_11.jpg');
	  img12= createImg('images/Nazi_12.jpg');
	  img13= createImg('images/Nazi_13.jpg');
	  img14= createImg('images/Nazi_14.jpg');
	  img15= createImg('images/Nazi_15.jpg');
	  img16= createImg('images/Nazi_16.jpg');
	  img17= createImg('images/Nazi_17.jpg');
	  img18= createImg('images/Nazi_18.jpg');
	  img19= createImg('images/Nazi_19.jpg');
	  img20= createImg('images/Nazi_20.jpg');
	  img21= createImg('images/Nazi_21.jpg');
	  img22= createImg('images/Nazi_22.jpg');
	  img23= createImg('images/Nazi_23.jpg');
	  img24= createImg('images/Nazi_24.jpg');
	  img25= createImg('images/Nazi_25.jpg');

}



function draw(){
	
	var imageArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img21, img22, img23, img24, img25, img19, img20];
var textArray = [text1,text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19, text20];

if( mouseIsPressed && mouseX>100 && mouseY>100 && mouseX<500 && mouseY<700){
		var randomimage1 = random(imageArray);
		image(randomimage1, 100, 100, 400, 600);

	}
	
	else if( mouseIsPressed && mouseX>100 && mouseY>100 && mouseX<950 && mouseY<700){

		var randomimage2 = random(imageArray);
		image(randomimage2, 550, 100, 400, 600);


	}
	else if( mouseIsPressed && mouseX>100 && mouseY>100 && mouseX<1400 && mouseY<700){

		var randomimage3 = random(imageArray);
		image(randomimage3, 1000, 100, 400, 600);

	}
	
	if( mouseIsPressed && mouseX>100 && mouseY>100 && mouseX<500 && mouseY<700){
noLoop();
		var randomtext1= random(textArray);

		fill(244, random(86, 152), 66);
		textSize(random(11,23));
		 textFont(font5);
text(randomtext1, 150, random(150,650));
	}
	
	else if( mouseIsPressed && mouseX>100 && mouseY>100 && mouseX<950 && mouseY<700){
noLoop();

		var randomtext2 = random(textArray);
		
		fill(244, random(86, 152), 66);
		textSize(random(11,23));
		 textFont(font5);
text(randomtext2, 650, random(150,650));
noLoop();
	}
	else if( mouseIsPressed && mouseX>100 && mouseY>100 && mouseX<1400 && mouseY<700){

var randomtext3= random(textArray);

fill(244, random(86, 152), 66);
textSize(random(11,23));
		 textFont(font5);
text(randomtext3, 1050, random(150,650));
	}
}
