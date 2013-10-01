var MakePolkaDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this,top, left, timeBetweenSteps, 'polkaDancer');
  this.timeBetweenSteps = timeBetweenSteps;
};

MakePolkaDancer.prototype = Object.create(MakeDancer.prototype);
MakePolkaDancer.prototype.constructor = MakePolkaDancer;

MakePolkaDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);

  var colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  var result = ["#"];
  for (var i = 0; i < 6; i++){
    var rand = colors[Math.floor(Math.random()*colors.length)];
    result.push(rand);
  }
  var color = result.join("");
  
  this.$node.css({"border-style":"dashed","border-color":color});
  this.$node.animate({
    top:Math.random()*1000,
    left:Math.random()*1000,
    "border-radius":Math.random()*50
  },3000);
}
