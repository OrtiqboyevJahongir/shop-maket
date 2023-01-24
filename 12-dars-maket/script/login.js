"use strict"
    let baseURL = "https://task.samid.uz/v1/user"

$("#login").addEventListener("submit" ,(e) =>{
    e.preventDefault();
    let username =$("#username").value.trim()
    let password = $("#pasword").value.trim()
    
    const params ={
        username:username,
        password:password
    }

    if(params.username.length===0  || params.password.length===0){
        console.log("to'ldiring");
    }else{
        fetch(`${baseURL}/sign-in ` , {
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(params)
        }).then((response) => response.json()).then((result) =>{
            if(result.code==1){
                localStorage.setItem("username" , result.data.username);
                localStorage.setItem("token" , result.data.token)

                window.location.replace("./index.html")
            }else{
                alert(result.errors.password)
            }
        });
    }
})

