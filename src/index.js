let modalOpen = false
function modalManager(){
    var modal = document.getElementById("questInfo")
    if (modalOpen == true){
        modalOpen = false
        modal.setAttribute("style", "display:none;")
    }
    else{
        modalOpen = true
        modal.setAttribute("style", "display:flex;")
    }
}

