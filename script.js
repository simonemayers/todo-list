let button = document.querySelector("#add-item-button")
let input = document.querySelector("input")


function clearInput(){
    return document.querySelector("input").value = ""
}

function addItem(){
    let listItem = document.createElement("li")
    listItem.innerHTML = input.value
    listItem.className = "list-item"
    if(Array.from(document.querySelector("#list").children).map(i => i.innerHTML).includes(input.value)){
        alert(`You already have ${input.value} on your list! Try adding something else`)
    }
    else if(!input.value){
        alert("Please enter at least 1 character")
    } 
    else{
        document.querySelector("#list").appendChild(listItem)
    }
    clearInput()
}


button.addEventListener("click", addItem)
input.addEventListener("keyup",function(e){
    if(e.key === "Enter"){
        e.preventDefault()
        addItem()
    }
})

function removeItem(){
}

document.querySelector("#list").addEventListener("click", function(e){
    e.preventDefault()
    e.target.classList.add("cross-out")
    setTimeout(() => {
        document.querySelector(".cross-out").remove()
    }, 1000)
    console.log(e.target)
})