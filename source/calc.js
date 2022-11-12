let input = document.getElementById("calc-screen-text"); 
let buttons = document.querySelectorAll("td");
console.log(buttons);
let inputValue = " "; 
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("button text is ", buttonText);

    if (buttonText == "*") {
      buttonText = "*";
      inputValue += buttonText;
      input.innerHTML=inputValue;  

    } else if (buttonText == "AC") {
      inputValue = "";
      input.innerHTML = inputValue;

    }
    else if(buttonText=="+/-"){
        var a="+";
        var b="-";
        if(inputValue==0 || inputValue=="" || inputValue=="-")
        {
            inputValue='+';
            input.innerHTML = inputValue;
        }
        else if(inputValue=='+')
        {
            inputValue='-';
            input.innerHTML = inputValue;
        }

    } 
    else if (buttonText == "=") {
        input.innerHTML = eval(inputValue);
      
    } else {
      inputValue += buttonText;
      input.innerHTML = inputValue;
    }
  });
}