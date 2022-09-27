const randomBtn = document.getElementById("random-btn")
const form = document.querySelector('form')
const dishList = document.querySelector('#dish-list')

const baseURL = "http://localhost:5500/api"


const dishesCallback = ({data: dishes}) => displayDishes (dishes)
const errCallback = err => console.log(err.response.data)

const postDish = body => axios.post(baseURL, body).then(dishesCallback).catch(errCallback)
const deleteDish = id => axios.delete(`${baseURL}/${id}`).then(dishesCallback).catch(errCallback)
const getRandomDish = () => axios.get("http://localhost:5500/api/randomDish/").then(res => {const data = res.data; alert(data)})

function submitHandler(element) {
    element.preventDefault()

    let dishInput = document.querySelector("#dish-input")

    let dishObj = {
        dishInput: dishInput.value
    }

    dishItem(dishObj)

    dishInput.value = ""
}

function dishItem (option) {
    const dishHolder = document.createElement('div')
    dishHolder.classList.add('dish-holder')

console.log(option)

    dishHolder.innerHTML = 
    `<p id = "dish-option"> ${option.dishInput} </p>
    <button onclick="deleteDish(${option.id})">delete</button>`

    dishList.appendChild(dishHolder)
}

function displayDishes(arr) {
    dishesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        dishItem(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

randomBtn.addEventListener('click', getRandomDish)
