// var container=document.querySelector("header .container");

// var rowElement=document.querySelector("header .row");

// var newDiv=document.createElement("div");
// newDiv.className="hello";
// newDiv.id="hello1";
// newDiv.setAttribute("title","hello div");
// console.log(newDiv);

// var divcontent=document.createTextNode("Hello World");

// newDiv.appendChild(divcontent);
// container.insertBefore(newDiv,rowElement);


// console.log(rowElement);
// console.log(container)
// var output=document.querySelector(".output-block");
// var button=document.getElementById("button");

// var input=document.querySelector("input[type='text']");

// input.addEventListener("keyup",clickEvent);




// function clickEvent(e){
//     console.log(e.target.value);
//     // console.log(e.altKey);
//     output.innerHTML="<h3>"+e.target.value+"</h3>";
// }

var form=document.getElementById("addForm");
var itemList=document.getElementById("items");
var filter=document.getElementById("filter");

itemList.addEventListener("click",removeList);

form.addEventListener("submit",addList);

filter.addEventListener("keyup",filterFn);

function addList(e){
    e.preventDefault();
    var data=document.getElementById("item").value;
    var li=document.createElement("li");
    li.className="list-group-item";
    li.append(document.createTextNode(data));
    var deleteBtn=document.createElement("button");
    deleteBtn.className="btn btn-danger btn-sm float-right delete";
    deleteBtn.append(document.createTextNode("X"));
    li.append(deleteBtn);
    itemList.append(li);

}


function removeList(e){
    // console.log(1);
    if(e.target.classList.contains("delete")){
        if(confirm("are you sure")){
            let deleteli=e.target.parentElement;
            // itemList.removeChild(deleteli);
            deleteli.remove();
        }
    }
}


function filterFn(e){
    var text=e.target.value.toLowerCase();
    var list=document.getElementsByTagName("li");
    var arr=Array.from(list);
    arr.forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    })

}