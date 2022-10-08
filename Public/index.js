const randomBtn = document.getElementById("random-btn")
const form = document.querySelector('form')
const dishList = document.querySelector('#dish-list')
const choiceList = document.querySelector('#choice-list')

const baseURL = "https://in-dish-isive.herokuapp.com/api"


const dishesCallback = ({data: option}) => displayDishes (option)
// const choiceCallback = ({data: obj}) => DisplayChoice (obj)
const errCallback = err => console.log(err)

const postDish = body => axios.post(baseURL, body).then(dishesCallback).catch(errCallback)
const deleteDish = id => axios.delete(`${baseURL}/${id}`).then(dishesCallback).catch(errCallback)
const getRandomDish = () => axios.get("https://in-dish-isive.herokuapp.com/api/random/").then(DisplayChoice).catch(errCallback)




function submitHandler(element) {
    element.preventDefault()
    
    let dishInput = document.querySelector("#dish-input")
    
    let dishObj = {
        dishInput: dishInput.value
    }
    
    postDish(dishObj)
    
    dishInput.value = ""

}

function dishItem (option) {
    const dishHolder = document.createElement('div')
    dishHolder.classList.add('dish-holder')
    
    dishHolder.innerHTML = 
    `<p id = "dish-option"> ${option.dishInput} </p>
    <button id = "delete-button" onclick="deleteDish(${option.id})">delete</button>`
    
    dishList.appendChild(dishHolder)
    
}

function displayDishes(arr) {
    dishList.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
         dishItem(arr[i])
    }
}


//Random choice functions w/ delete

function dishChoice (obj) {
    const choiceHolder = document.createElement('div')
    choiceHolder.classList.add('choice-holder')
    
    choiceHolder.innerHTML = 
    `<div>
    <h3 id = "random-choice-header"> ${obj.dishInput} </h3>
    <button id = "delete-button" onclick="deleteChoice()">delete</button>
    </div>`
    
    choiceList.appendChild(choiceHolder)
    
}

function deleteChoice () {
    choiceList.innerHTML = ``
}

function DisplayChoice({data: obj}) {

    choiceList.innerHTML = ``
    dishChoice(obj)
    
}

function resetApp () {
    axios.delete(baseURL + '/reset').then(console.log('app reset'))
}


form.addEventListener('submit', submitHandler)
randomBtn.addEventListener('click', getRandomDish)
resetApp()
