/*var User =
function (name, age){
  this.name=name;
  this.age=age;
}
User.prototype.say=function () {
  alert("Hello? I am"+this.name)
  }
  var newUser=new User("Alex", 22);
  var newUser2=new User("Igor", 32);
console.log(newUser);
  newUser.say();
*/

  /*var Counter=
  function() {
    this.total=0;

  };
    Counter.prototype.increase= function(){
      this.total++
      //console.log(this.total);
    };
    Counter.prototype.decrease= function(){
      this.total--
    };
    Counter.prototype.showRes= function(){
      //return this.total
      console.log(this.total)
    };

  var newCounter=new Counter();
  newCounter.increase();
  newCounter.increase();
  newCounter.increase();
  newCounter.decrease();
  newCounter.decrease();
  newCounter.showRes();
*/
  var Robot=
  function(x,y) {
    this.x=0;
    this.y=0;
  };
    Robot.prototype.right= function(){
      this.y++
      switch (true) {
          case this.y>10||this.y<-10:
            alert("STOP y is more then 10")
            break;
      //    default:continue;
        }
    };
    Robot.prototype.left= function(){
      this.y--
      switch (true) {
          case this.y>10||this.y<-10:
            alert("STOP y is more then 10")
            break;
        //  default:continue;
        }
    };
    Robot.prototype.back= function(){
      this.x--
      switch (true) {
          case this.x>10||this.x<-10:
            alert("STOP x is more then 10")
            break;
      //    default:continue;
        }
    };
    Robot.prototype.forward= function(){
      this.x++
      switch (true) {
          case this.x>10||this.x<-10:
            alert("STOP x is more then 10")
            break;
      //    default:continue;
        }
    };
    Robot.prototype.showRes= function(){
    //  switch (true) {
      //    case this.x>10||this.x<-10:
        //    alert("STOP x is more then 10")
          //  break;}
    console.log("Now coordinate is x="+this.x+", y="+this.y);
    };
  var newRobot=new Robot();
  newRobot.left();
  newRobot.left();
  newRobot.left();
  newRobot.right();
  newRobot.right();
  newRobot.right();
  newRobot.right();
  newRobot.right();
  newRobot.right();
  newRobot.right();
  newRobot.right();
  newRobot.right();
  newRobot.right();
  newRobot.right();
  newRobot.right();
  newRobot.right();
  newRobot.right();
  newRobot.right();
  newRobot.forward();
  newRobot.back();
  newRobot.back();
  newRobot.back();
  newRobot.back();
  newRobot.back();
  newRobot.back();
  newRobot.back();
  newRobot.back();
  newRobot.back();
  newRobot.back();
  newRobot.showRes();
