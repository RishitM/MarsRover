
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_image="rover.png";
rover_x=300;
rover_y=300;
key_code=0;
images=["WK-11 mono.jpg" , "marsWater3.jpg" , "mars_water1.jpg", "mars.jpg"];
randomNumber=Math.floor(Math.random()*4);
background_image=images[randomNumber];
function add() {
    background_img_tag= new Image();
    background_img_tag.onload=update_background;
    background_img_tag.src= background_image ;
     rover_img_tag= new Image();
    rover_img_tag.onload=update_rover;
    rover_img_tag.src= rover_image ;
}
function update_background() {
    ctx.drawImage(background_img_tag,0,0,700,700);
}
function update_rover() {
ctx.drawImage(rover_img_tag,rover_x,rover_y,100,100);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
key_pressed=e.keyCode;
console.log(key_pressed);
if (key_pressed =='38'){
    up();
    console.log("Up Arrow Key");
}
if (key_pressed =='40'){
    down();
    console.log("Down Arrow Key");
}
if (key_pressed =='37'){
    left();
    console.log("Left Arrow Key");
}
if (key_pressed =='39'){
    Right();
    console.log("Right Arrow Key");
}
}
function up() {
  if (rover_y>0){
    rover_y=rover_y-10;
  update_background();
  update_rover();
  }
}
function down() {
    if (rover_y<600){
      rover_y=rover_y+10;
    update_background();
    update_rover();
    }
  }
  function left() {
    if (rover_x>0){
      rover_x=rover_x-10;
    update_background();
    update_rover();
    }
  }
  function Right() {
    if (rover_x<600){
      rover_x=rover_x+10;
    update_background();
    update_rover();
    }
  }
  function changeImage() {
    randomNumber=Math.floor(Math.random()*4);
    background_image=images[randomNumber];
    background_img_tag= new Image();
    background_img_tag.onload=update_background;
    background_img_tag.src= background_image ;
      update_background();
      console.log(randomNumber);
  }