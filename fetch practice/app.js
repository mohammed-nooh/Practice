var getTextBtn=document.getElementById("get-text");


var getJsonBtn=document.getElementById("get-json");

getJsonBtn.addEventListener("click",getJsonFn);

getTextBtn.addEventListener("click",getTextFn);


function getTextFn(e){
    fetch("sampletext.txt")
    .then(function (res) {
        return res.text();
    })
    .then(function (data) {
        console.log(data);
        document.getElementById("output").innerHTML = data;
    })
}


function getJsonFn(e){
    fetch("jsonfile.json")
    .then(function(res){
        // console.log(res.json());
        return res.json();
    })
    .then((data) => {
        console.log(data);
        let output=document.getElementById("output");
        let list=document.createElement("ul");
        data.forEach(function(user){
            let listItem=document.createElement("li");
            listItem.append(document.createTextNode(`
            Id : ${user.id}
            Name : ${user.name}
            Email : ${user.email}
            `));
            list.append(listItem);
            output.append(list);
        })
    })
}