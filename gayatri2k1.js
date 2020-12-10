function touching(moving,fixed){
    if(fixed.x - moving.x < fixed.width /2 + moving.width/2 
      && fixed.x - moving.x < fixed.width /2 +moving.width/2
      && fixed.y - moving.y < fixed.width /2 + moving.width/2 
      && fixed.y - moving.y < fixed.width /2 +moving.width/2){
      return true;
    }
    else {
      return false
    } 
  }
  
  function bounce(moving,fixed){
    if(fixed.x - moving.x < fixed.width /2 + moving.width/2 
      && fixed.x - moving.x < fixed.width /2 +moving.width/2){
        fixed.velocityX = fixed.velocityX * -1
        moving.velocityX = moving.velocityX * -1
    }
    if (fixed.y - moving.y < fixed.width /2 + moving.width/2 
      && fixed.y - moving.y < fixed.width /2 +moving.width/2){
        fixed.velocityY = fixed.velocityY * -1
        moving.velocityY= moving.velocityY * -1
      }
  }
      