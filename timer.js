
   
   const dayOutput = document.querySelector(".pDays")
   const hourOutput = document.querySelector(".pHour")
   const minuteOutput = document.querySelector(".pMinutes")
   const secondOutput = document.querySelector(".pSeconds")

const countDown = () =>{

    const endDate =  new Date("Nov 20, 2022 20:00:00").getTime();
    const now =  new Date().getTime();
    
    const difference = endDate - now;
   
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

   


    let timeDay = Math.floor(difference / day);
    
    let timeHour = Math.floor((difference % day) / hour);
    let timeMinute = Math.floor((difference % hour) / minute);
    let timeSecond = Math.floor((difference % minute) / second);


 
   if(timeHour  < 10  ){
     timeHour = "0" + timeHour 


   }

   if(timeMinute  < 10  ){

    timeMinute = "0" + timeMinute


  }
  if(timeSecond  < 10  ){

    timeSecond = "0" + timeSecond 


  }


    dayOutput.innerHTML=timeDay;
    hourOutput.innerHTML = timeHour;
    minuteOutput.innerHTML = timeMinute;
    secondOutput.innerHTML = timeSecond;



 

}

setInterval(countDown, 1000);

