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

  var Counter=
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
