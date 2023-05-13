setTimeout(bgChange,5000)
function bgChange(){
    document.querySelector(".clock").classList.remove("bg-warning")
    document.querySelector(".clock").classList.add("bg-info")
}

setInterval(time,1000)
function time(){
    var date = new Date() 
    document.querySelector(".time").innerHTML=date.toLocaleTimeString()
    document.querySelector(".date").innerHTML=date.toDateString()
}
