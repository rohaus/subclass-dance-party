var MakeSquareDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this,top, left, timeBetweenSteps, 'squareDancer');
  this.timeBetweenSteps = timeBetweenSteps;
};

MakeSquareDancer.prototype = Object.create(MakeDancer.prototype);
MakeSquareDancer.prototype.constructor = MakeSquareDancer;

MakeSquareDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
  this.$node.animate({top:Math.random()*500,left:Math.random()*500},500);
}
