
var mouseevent="empty";


canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="";
width_of_line="";
radius="";
lokesh=1;

canvas.addEventListener("mousedown",mousedown);

function mousedown(e)
{
    color = document.getElementById("colour").value;
width_of_line = document.getElementById("width_of_line").value;
radius = document.getElementById("radius").value;
    mouseevent="mousedown";
}

canvas.addEventListener("mouseup",mouseup);

function mouseup(e)
{
    mouseevent="mouseup";
}

canvas.addEventListener("mouseleave",mouseleave);

function mouseleave(e)
{
    mouseevent="mouseleave";
}

canvas.addEventListener("mousemove",mousemove);

function mousemove(e)
{
    mouseevent="mousemove";
current_mouse_x = e.clientX -canvas.offsetLeft;

current_mouse_y = e.clientY -canvas.offsetTop;

if(mouseevent =="mousedown") {

    console.log("x =" + current_mouse_x + "y ="+ current_mouse_y);
    ctx.lineTo(current_mouse_x, current_mouse_y);
    ctx.stroke();
    


ctx.beginPath();
ctx.storkeStyle=color;
ctx.lineWidth=width_of_line;
ctx.arc(current_mouse_x,current_mouse_y,radius,0,2 *Math.PI);
ctx.stroke();





}



}

