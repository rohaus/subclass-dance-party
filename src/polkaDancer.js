var MakePolkaDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this,top, left, timeBetweenSteps, 'polkaDancer');
  this.timeBetweenSteps = timeBetweenSteps;
};

MakePolkaDancer.prototype = Object.create(MakeDancer.prototype);
MakePolkaDancer.prototype.constructor = MakePolkaDancer;

MakePolkaDancer.prototype.step = function(){
  if(this.$node.hasClass("lineUp")){
    return;
  }else{
    this.$node.animate({
      top:Math.random()*1000,
      left:Math.random()*1000
    },3000);
    MakeDancer.prototype.step.call(this);
  }
};