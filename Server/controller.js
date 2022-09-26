let dishChoices = []

let globalId = 0

module.exports = {
    
    postDish : (req, res) => { 
        let { dishOption } = req.body
        let newDish = {
            id: globalId,
            dishOption
        }

        quoteList.push(newDish)
        res.status(200).send(dishChoices)
        globalId++
    
    },
     


    deleteDish : (req, res) => {
        let index = dishChoices.findIndex(elem => elem.id === +req.params.id)
        dishChoices.splice(index, 1)
        res.status(200).send(dishChoices)


    }
}