"use strict"


    $("#toggle-btn").addEventListener("click" , (e) =>{
        $(".home").style.width = "50%"
        document.body.style.overflow = "hidden"
    })

    $(".res-togle").addEventListener("click" , (e) =>{
        $(".home").style.width = 0
        document.body.style.overflow = ""
    })


    $("#my-porofil").addEventListener("click" , (e) =>{
            $(".close-site").classList.toggle("none")
    } ) 
    

const username = localStorage.getItem("username")

$(".profile-title").innerHTML = username


$(".close-site").addEventListener("click" , () =>{
localStorage.clear()
isBack()
})


function isBack(){
    if(!localStorage.getItem("token")){
        window.location.replace("./login.html")
    }
}
isBack()