const Car = require('../models/Car')

Car.deleteMany({})
    .then(() => {
        const myCar = Car.create({
            year: 2003,
            make: 'Honda',
            model: 'Accord',
            image: 'https://healthelevate.com/wp-content/uploads/2018/10/2003-2005_Honda_Accord_coupe_-_03-16-2012.jpg',
            isAvailable: true
        })
            .then((car) => {
                Promise.all([myCar]).then(() => {
                    car.save()
                    console.log('successfully seeded')
                })
            })
    })