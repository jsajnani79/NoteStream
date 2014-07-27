var paint = false
var context;
var clickX = [];
var clickY = [];
var clickDrag = [];
var paint;

var saveCanvas = function(e){
  var _id = $('assignment').attr('id')
};

var redraw = function(e){
  context = e.target.getContext('2d');

  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.strokeStyle = "#df4b26";
  context.lineJoin = "round";
  context.lineWidth = 1;

  for(var i=0; i < clickX.length; i++) {
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.stroke();
  }
}

var addClick = function(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

Template.editor_middle.events({
  'mousedown canvas': function(e){
    context = e.target.getContext('2d')
    paint = true;
  },
  'mouseup canvas': function(e){
    if(paint = true){
      saveCanvas(e);
    }
    paint = false
  },
  'mouseleave canvas': function(e){
    if(paint = true){
      saveCanvas(e);
    }
    paint = false;
  },
  'mousemove canvas': function(e){
    var x = $(e.target).offset().left;
    var y = $(e.target).offset().top;
    if(paint){
      addClick((e.clientX - x)/2, (e.clientY - y)/2, true);
      redraw(e);
    }
  },
  'click .next': function(){

  },
  'click .back': function(){

  },
});
