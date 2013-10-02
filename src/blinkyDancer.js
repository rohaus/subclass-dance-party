var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this,top, left, timeBetweenSteps, "blinkyDancer");
  this.timeBetweenSteps = timeBetweenSteps;
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function(){
  if(this.$node.hasClass("lineUp")){
    return;
  }else{
    this.$node.animate({top:this.top,left:"+=25"});
    this.$node.toggle();
    MakeDancer.prototype.step.call(this);
  }
}

