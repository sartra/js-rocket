      var sayMyName = function (name){
        alert('My name is ' + name);  
        // in console: 
        // sayMyName('sarah');
      }

      var car = {
        make: 'VW',
        typcae: 'Polo',
        color: 'blue',
        seats: ['seat1', 'seat2'],
        isTurnedOn: false,
        turnOn: function () {
          this.isTurnedOn = true; 
        },
        fly: function() {
          console.log('fly');
        },
        switchCar: function(isOn) {
          console.log('turn car '+ isOn)
          if(isOn == true) {
            this.isTurnedOn = true;
          } else {
            this.isTurnedOn = false;
          }
        }
      };


var doSomethingNifty = function() {
  document.getElementById('cool').className = 'nifty red';

}