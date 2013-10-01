var MakeDancer = function(top, left, timeBetweenSteps, style){
  this.$node = $('<span class="dancer '+style+'"></span>');
  this.setPosition(top, left);
  this.step();
  this.stop = clearTimeout;
};

MakeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.step = function(){
  var dancer = this;
  if(this.$node.hasClass("lineUp")){
    return;
  }
  setTimeout(function(){dancer.step()}, this.timeBetweenSteps);
};
