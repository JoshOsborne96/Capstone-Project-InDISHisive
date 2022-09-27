let dishChoices = ['DC']

let globalId = 0

module.exports = {
    
    postDish : (req, res) => { 
        let { dishOption } = req.body
        let newDish = {
            id: globalId,
            dishOption
        }

        dishChoices.push(newDish)
        console.log('new' + newDish)
        console.log(dishChoices)
        res.status(200).send(dishChoices)
        globalId++
    
    },
     


    deleteDish : (req, res) => {
        console.log("delete dish" + req.params.id)
        let index = dishChoices.findIndex(elem => elem.id === +req.params.id) 
        console.log("delete dish" + index)
        dishChoices.splice(index, 1)
        console.log('delete dish' + dishChoices)
        console.log("dd")
        res.status(200).send(dishChoices)


    },

    getRandomDish: (req, res) => {
    
        let randomIndex = Math.floor(Math.random() * dishChoices.length);
        let randomDish = randomDish[randomIndex];
        
        res.status(200).send(randomDish);
    },
    
}

