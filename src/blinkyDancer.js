var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this,top, left, timeBetweenSteps, "blinkyDancer");
  this.timeBetweenSteps = timeBetweenSteps;
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
  var colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  var result = ["#"];
  for (var i = 0; i < 6; i++){
    var rand = colors[Math.floor(Math.random()*colors.length)];
    result.push(rand);
  }
  var color = result.join("");
  var triangle = "solid transparent "+Math.floor(Math.random()*50) + "px";
  var bottomTriangle = "solid "+color+" "+Math.floor(Math.random()*50) + "px";
  this.$node.css({
    "width": 0, 
    "height": 0, 
    "border-bottom": triangle,  /* left arrow slant */
    "border-top": bottomTriangle, /* right arrow slant */
    "border-right": bottomTriangle, /* bottom, add background color here */
    "font-size": 0,
    "line-height": 0
  });
  this.$node.toggle();
}

