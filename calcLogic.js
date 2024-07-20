let input1 ="";
let input2 ="";
let operation="";
let decimalPressed = false;
let operatorPressed =false;

function add(num1, num2)
{
    return parseFloat(num1)+parseFloat(num2);
}

function substract(num1, num2)
{
    return parseFloat(num1)-parseFloat(num2);
}

function multiply(num1, num2)
{
    return parseFloat(num1)*parseFloat(num2);
}

function divide(num1, num2)
{
    return parseFloat(num1)/parseFloat(num2);
}

function operate(in1, in2, operate)
{
    const displaytext = document.querySelector(".screen");
    let ret;
    if(operate == "+"){
        ret = add(in1,in2);
    }else if(operate == "-"){
        ret = substract(in1, in2);
    }else if(operate == "*"){
        ret = multiply(in1, in2);
    }else{
        ret = divide(in1, in2);
    }
    
    displaytext.textContent = in1 + operate+ in2 + "=" +ret;
    input1 = ret;
    input2 = "";
}

function initButtons()
{
    const buttons = document.querySelectorAll("button");
    buttons.forEach((item)=> 
        {item.addEventListener("click", ()=>registerInput(item.innerHTML));}
);
    const display = document.querySelector(".screen");
    display.textContent = "0"; 
    
}

function registerInput(buttonEvent)
{
    if(buttonEvent == "Clear"){
        operate(0,0,"+");
        operatorPressed = false;
        decimalPressed = false;
        input1 ="";
        input2 = "";
        operation ="";
    }else if(buttonEvent == "+" || buttonEvent == "-" || buttonEvent == "*"
        || buttonEvent == "/"){
        operation = buttonEvent;
        operatorPressed = true;
    }else if(buttonEvent == "="){
        operate(input1,input2, operation);
        operatorPressed = false;
        decimalPressed = false;

    }else{
        if(!operatorPressed)
        {
            input1+= buttonEvent;
        }else{
            input2+= buttonEvent;
        }
    }
}

initButtons();
 