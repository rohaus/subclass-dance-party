var MakeSquareDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this,top, left, timeBetweenSteps, 'squareDancer');
  this.timeBetweenSteps = timeBetweenSteps;
};

MakeSquareDancer.prototype = Object.create(MakeDancer.prototype);
MakeSquareDancer.prototype.constructor = MakeSquareDancer;

MakeSquareDancer.prototype.step = function(){
  var colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  var result = ["#"];
  for (var i = 0; i < 6; i++){
    var rand = colors[Math.floor(Math.random()*colors.length)];
    result.push(rand);
  }
  var color = result.join("");
  console.log("going through MakeSquareDancer.prototype.step");
  if(this.$node.hasClass("lineUp")){
    return;
  }else{
    this.$node.css({"border-style":"dashed","border-color":color});
    this.$node.animate({
      top:Math.floor(Math.random()*1000),
      left:Math.floor(Math.random()*1000),
      "border-radius":Math.random()*5 + 10
    },2000);
    MakeDancer.prototype.step.call(this);
  }
};
