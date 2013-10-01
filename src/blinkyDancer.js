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
  this.$node.animate({top:this.top,left:"+=50"});
  this.$node.toggle();
}

