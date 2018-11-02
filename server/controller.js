module.exports = {
    displayHouses: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.display_all_houses()
        .then((houses) => res.status(200).send(houses))
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong."})
            console.log(err)
        })
    },
    createHouse: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, address, city, state, zip} = req.body
        dbInstance.create_house([name, address, city, state, zip])
        .then((houses) => res.status(200).send(houses))
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong."})
            console.log(err)
        })
    },
    deleteHouse: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params
        dbInstance.delete_house([id])
        .then((houses) => res.status(200).send(houses))
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong."})
            console.log(err)
        })
    }
}


































//     create: (req, res, next) => {
//         const dbInstance = req.app.get('db');
//         const {name, description, price, image_url} = req.body;

//         dbInstance.create_product([name, description, price, image_url])
//             .then(() => res.sendStatus(200))
//             .catch(err => {
//                 res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
//                 console.log(err)
//             })
//     },
//     getOne: (req, res, next) => {
//         const dbInstance = req.app.get('db');

//         dbInstance.read_product(req.params.id)
//             .then((product) => res.status(200).send(product))
//             .catch(err => {
//                 res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
//                 console.log(err)
//             })
//     },
//     getAll: (req, res, next) => {
//         const dbInstance = req.app.get('db');

//         dbInstance.read_products()
//             .then((products) => res.status(200).send(products))
//             .catch(err => {
//                 res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
//                 console.log(err)
//             })
//     },
//     update: (req, res, next) => {
//         const dbInstance = req.app.get('db');
//         const {id} = req.params
//         const {desc} = req.query
//         dbInstance.update_product([id, desc])
//             .then(() => res.sendStatus(200))
//             .catch(err => {
//                 res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
//                 console.log(err)
//             })
//     },
//     delete: (req, res) => {
//         const dbInstance = req.app.get('db');
//         const {id} = req.params
//         dbInstance.delete_product([id])
//             .then(() => res.sendStatus(200))
//             .catch(err => {
//                 res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
//                 console.log(err)
//             })
//     }
// }