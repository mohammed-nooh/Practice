const formElement=document.querySelector("#my-form");
const nameInput=document.querySelector("#name");
const emailInput=document.querySelector("#email");
const msgElement=document.querySelector(".msg");
const btn=document.querySelector(".btn");
const userList=document.querySelector("#users");

formElement.addEventListener("submit",onSubmit);

function onSubmit(e){
    e.preventDefault();
    // console.log("succes");
    if(nameInput.value==='' || emailInput.value===''){
        msgElement.classList.add("error");
        msgElement.innerHTML="please enter all fields";
    }

}