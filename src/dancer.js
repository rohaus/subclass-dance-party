var MakeDancer = function(top, left, timeBetweenSteps, style){
  this.$node = $('<span class="dancer '+style+'"></span>');
  this.setPosition(top, left);
  this.step();
  this.stop = clearTimeout;
};

MakeDancer.prototype.setPosition = function(top, left){
  this.$node.css({top: top, left: left});
};

MakeDancer.prototype.step = function(){
  var dancer = this;
  setTimeout(function(){dancer.step()}, this.timeBetweenSteps);
};

