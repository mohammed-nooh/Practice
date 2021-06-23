var btnClickAdd=document.querySelector("#add");
var btnClickSub=document.querySelector("#subtract");
var btnClickMul=document.querySelector("#multiply");
var btnClickDiv=document.querySelector("#divide");
var outputDiv=document.querySelector("#outputContainer");


var no1=document.querySelector("#no1");
var no2=document.querySelector("#no2");



// no1.addEventListener("click",function clickEvent() {
//     console.log(no1.value);
//     console.log(parseInt(no1.value));
//     console.log(valno1);
    
// })

btnClickAdd.addEventListener("click",addEvent);
btnClickSub.addEventListener("click",subEvent);
btnClickMul.addEventListener("click",mulEvent);
btnClickDiv.addEventListener("click",divEvent);


function addEvent(){
    // console.log("clicked");
    var result=(parseInt(no1.value,10)+parseInt(no2.value,10));
    console.log(no1.value);
    console.log(no2.value);
    console.log(result+" is the output");
    document.querySelector("#outputContainer").innerText=result;
}
function subEvent(){
    // console.log("clicked");
    var result=(parseInt(no1.value,10)-parseInt(no2.value,10));
    console.log(no1.value);
    console.log(no2.value);
    console.log(result+" is the output")
}

function mulEvent(){
    // console.log("clicked");
    var result=(parseInt(no1.value,10)*parseInt(no2.value,10));
    console.log(no1.value);
    console.log(no2.value);
    console.log(result+" is the output")
}

function divEvent(){
    // console.log("clicked");
    var result=(parseInt(no1.value,10)/parseInt(no2.value,10));
    console.log(no1.value);
    console.log(no2.value);
    console.log(result+" is the output")
}