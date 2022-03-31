let button = document.querySelector("#add-item-button")
let input = document.querySelector("input")


function clearInput(){
    return document.querySelector("input").value = ""
}

function addItem(){
    let listItem = document.createElement("li")
    let firstLetter = input.value.slice(0, 1).toUpperCase()
    let restLetters = input.value.slice(1).toLowerCase()
    let capitalized = firstLetter + restLetters
    // let importantButton = document.createElement("button")
    let listItemContainer = document.createElement("div")
    listItem.innerHTML = capitalized; 
    listItem.className = "list-item"
    if(Array.from(document.querySelector("#list").children).map(i => i.innerHTML).includes(capitalized)){
        console.log(e.target)
        e.target.classList.add("highlight");
        alert(`You already have ${capitalized} on your list! Try adding something else`)
    }
    else if(!input.value){
        alert("Please enter at least 1 character")
    } 
    else{
        document.querySelector("#list").appendChild(listItemContainer)
        listItemContainer.appendChild(listItem)
        // listItemContainer.appendChild(importantButton)
        // importantButton.classList.add("btn")
        // importantButton.classList.add("btn-dark")
        // importantButton.innerHTML = "!"
        listItemContainer.classList.add("list-item-container")
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
    e.target.parentElement.classList.add("cross-out")
    setTimeout(() => {
        document.querySelector(".cross-out").remove()
    }, 1000)
})