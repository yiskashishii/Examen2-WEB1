let allvalues = document.querySelectorAll(".odometer");
allvalues.forEach((singlevalue) =>{
  let startValue = 0;
  let endValue = parseInt(singlevalue.getAttribute("target"));
  let duration = Math.floor(5000/endValue);

  let counter = setInterval(function () {
    startValue += 1;
    singlevalue.textContent = startValue;

    if(startValue == endValue){
      clearInterval(counter);
    }
  }, duration)
})

