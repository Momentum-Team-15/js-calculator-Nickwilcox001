// const display = document.querySelector('#answer')
// let buttons = document.querySelectorAll(".smallButtons");

// for (let button of buttons)
//     button.addEventListener("click", (event) => 
//     {
//         console.log(button.innerText)
//         let newElement = document.createTextnode('div')
//         let text = document.createTextNode(event.target.innerText)
//         newElement.appendChild(text)
//         display.appendChild(newElement)
//     })

const display = document.querySelector('#answer')
let buttons = document.querySelectorAll(".smallButtons")

for (let button of buttons)
{
    button.addEventListener("click", event => {
        console.log(button.innerText)
        let newElement = document.createTextNode('div')
        let text = document.createTextNode(event.target.innerText)
        if(button.id === "#enter")
        {
            text = eval(text)
        }
        newElement.appendChild(text)
        display.appendChild(newElement)
        
    })
  

}
