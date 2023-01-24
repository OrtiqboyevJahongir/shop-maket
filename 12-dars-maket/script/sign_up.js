"use strict"

let baseURL = "https://task.samid.uz/v1/user"


$("#sign-up").addEventListener("submit" ,(e) =>{
    e.preventDefault();
    let username =$("#userreg").value.trim()
    let email= $("#emailreg").value.trim()
    let password = $("#paswordreg").value.trim()


    const params ={
        username:username,
        email:email,
        password:password
    }
    
    if(params.username.length===0  || params.email.length===0 ||  params.password.length===0){
        alert("to'ldiring")
    }else{
        fetch(`${baseURL}/sign-up`, {
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(params)
        }).then((response) => response.json()).then((result) =>{
                    
            if(result.code=="1"){
                alert("success")
                window.location.replace("./login.html");
            }else{
                alert("boshqattan urinib ko'ring")
            }
        });
    }
})




