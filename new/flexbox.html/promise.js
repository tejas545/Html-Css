let completed = true;
let project = new Promise(function (resolve , reject) {
    if(completed) {
        resolve("Project completed");
    }else{
        reject("Project not yet completed");
    }
});
project.then((message) => console.log(message));




let sent = false;
let service = new Promise(function (resolve , reject){
    if(sent){
        resolve("project completed");
    }else{
        reject("Project not yet completed");
    }
});
service.catch((message) => console.log(message))
.finally(() => console.log("Thanks for completing the project"));