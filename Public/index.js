const randomBtn = document.getElementById("random-btn")
const form = document.querySelector('form')
const dishList = document.querySelector('#dish-list')

const baseURL = "http://localhost:5500/api"


const dishesCallback = ({data: option}) => displayDishes (option)
const errCallback = err => console.log(err)

const postDish = body => axios.post(baseURL, body).then(dishesCallback).catch(errCallback)
const deleteDish = id => axios.delete(`${baseURL}/${id}`).then(dishesCallback).catch(errCallback)
const getRandomDish = () => {
    axios.get("http://localhost:5500/api/random/")
    .then(res => 
        {const data = res.data; alert(data)})}

function submitHandler(element) {
    element.preventDefault()

    let dishInput = document.querySelector("#dish-input")

    let dishObj = {
        dishInput: dishInput.value
    }

    postDish(dishObj)

    // dishItem(dishObj)

    dishInput.value = ""
}

function dishItem (option) {
    const dishHolder = document.createElement('div')
    dishHolder.classList.add('dish-holder')

    dishHolder.innerHTML = 
    `<p id = "dish-option"> ${option.dishInput} </p>
    <button onclick="deleteDish(${option.id})">delete</button>`

    dishList.appendChild(dishHolder)
}

function displayDishes(arr) {
    dishList.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        dishItem(arr[i])
    }
}

function dishChoice (arr) {
    const dishChoiceHolder = document.createElement('div')
    dishChoiceHolder.classList.add('dish-choice-holder')

    dishChoiceHolder.innerHTML = ''

}

form.addEventListener('submit', submitHandler)

randomBtn.addEventListener('click', getRandomDish)
