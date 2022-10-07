let dishChoices = []

let globalId = 0

module.exports = {
    
    postDish: (req, res) => { 
        let { dishInput } = req.body
        let newDish = {
            id: globalId,
            dishInput
        }

        dishChoices.push(newDish)
        res.status(200).send(dishChoices)
        globalId++
    
    },
     


    deleteDish: (req, res) => {
        let index = dishChoices.findIndex(elem => elem.id === +req.params.id) 
        dishChoices.splice(index, 1)
        res.status(200).send(dishChoices)


    },

    getRandomDish: (req, res) => {
    
        let randomIndex = Math.floor(Math.random() * dishChoices.length);
        let randomDish = dishChoices[randomIndex];
        
        res.status(200).send(randomDish);
    },

    resetApp: (req, res) => {
        dishChoices = []
        globalId = 0
        res.sendStatus(200)
    }
}