const randomBtn = document.getElementById("random-btn")
const form = document.querySelector('form')
const dishList = document.querySelector('dish-list')

const baseURL = "http://localhost:5500/api"


const dishesCallback = ({data: dishChoices}) => displayDishes (dishChoices)

const postDish = body => axios.post(baseURL, body).then(dishesCallback)
const deleteDish = id => axios.delete(`${baseURL}/${id}`).then(dishesCallback)

function submitHandler(element) {
    element.preventDefault()

    let dishInput = document.querySelector("#dish-input")

    dishInput.value = ""
}

function dishItem (option) {
    const dishHolder = document.createElement('div')
    dishHolder.classList.add('dish-holder')

    dishHolder.innerHTML = 
    `<p id = "dish-option"> ${option.dishInput} </p>
    <button onclick="deleteQuote(${option.id})">delete</button>`

    dishList.appendChild(dishHolder)
}

function displayDishes(arr) {
    dishesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        dishItem(arr[i])
    }
}

form.addEventListener("submit", submitHandler)


