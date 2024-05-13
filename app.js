let addfriend = document.querySelector("#addfriend")


let stranger = document.querySelector("#strainger")

let check = true



addfriend.addEventListener("click", () => {
    if(check === true){
        addfriend.innerHTML = "Remove" 
        stranger.textContent = "Request Sent"
        stranger.style.color = "violet"
        addfriend.style.backgroundColor = "purple"
       
        document.querySelector(".container").style.backgroundColor = "yellow"
        
       
        check = false
    }
    else {
          stranger.textContent = "Stranger"
          addfriend.textContent = "Add_Friend"
         stranger.style.color = "violet"
         document.querySelector(".container").style.backgroundColor = "yellow"
         document.querySelector(".container").style.backgroundColor = "rgb(117, 145, 196)"
       
      
         check = true;
    }

})

