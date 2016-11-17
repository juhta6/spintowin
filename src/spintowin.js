tabris.ui.set("toolbarVisible", false);
var page = new tabris.Page({
topLevel: true
}).open();

//---------------------------------------------------------------------------------------------------------------------------
var start = "Enable";
var scale = 0;
var scale1 = 0;
var height = 512;
var width = 12
var set = 1;

new tabris.Button({
  layoutData: {bottom: 10, width: 120, height: 50, centerX: 0},
  text: start
}).on("tap",function(widget){
 if (start == "Enable"){
  animatend(widget)
  this.set("text", start = "Disable")
 } else if (start == "Disable"){
  page.find("#bar").dispose();
  this.set("text", start = "Enable")
 }
}).appendTo(page)

function animatend(widget){
 page.find("#bar").dispose();
 new tabris.Composite({
  id: "bar",
  layoutData: {centerX: 0,centerY: 0, width: width, height: height},
  cornerRadius: 6,
  background: "black"
}).on("resize", function(widget){
  widget.animate({transform: {rotation: 1*Math.PI, scaleY: scale, scaleX: scale1}},{easing: "linear", duration: 3000})
}).on("animationend", function(widget){
     if (set == 1){
     set = 2
     scale = 512
     scale1 = 2
     width = 12
     height = 1
   } else if (set == 2){
     set = 3
     scale = 0.01
     scale1 = 1
     width = 12
     height = 512
     } else if (set == 3){
     set = 4
     scale = 512
     scale1 = 2
     width = 12
     height = 1
      } else if (set == 4){
     set = 1
     scale = 0.01
     scale1 = 1
     width = 12
     height = 512
      }
       animatend(widget)
}).appendTo(page)}
