    var timer = null;
    var countdownNumber = 10; 

var changeState = function (state) {

    document.body.className = 'body-state'+ state;

    clearInterval(timer);
    countdownNumber = 10;
    document.getElementById('countdown').innerHTML = countdownNumber;

    // COUNTDOWN
    if (state==2) {

        timer = setInterval(function (){
          countdownNumber --; 
          document.getElementById('countdown').innerHTML = countdownNumber;
          
          if (countdownNumber > 5 && countdownNumber <= 8){
            //be nervous
            document.getElementById('nervous').className = 'nervous show';
          } else {
            document.getElementById('nervous').className = 'nervous';
          }

          if (countdownNumber < 5 && countdownNumber >1){
            //can't wait
            document.getElementById('cant-wait').className = 'cant-wait show';
          } else {
            document.getElementById('cant-wait').className = 'cant-wait';
          }

          if (countdownNumber <= 0){
            changeState(3);
          }; 
        }, 500);

    } else if (state == 3) {
          
          var success = setTimeout(function(){
                var randomNumber = Math.round(Math.random()*10);

          console.log('randomNumber: ' + randomNumber);

                //success 
                if (randomNumber > 4){
                    changeState(4);
;                } else {
                    changeState(5); // oh noo!
                };

          }, 2000);

     } else if (state == 1) {
    document.getElementById('cant-wait').className = 'cant-wait';
    document.getElementById('nervous').className = 'nervous';
  }

    };

   
