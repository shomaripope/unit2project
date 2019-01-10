const Car = require('../models/Car');
const User = require('../models/User');
const Post = require('../models/Post');
Car.deleteMany({})
    .then(() => {
        const myCar = Car.create({
            year: 2003,
            make: 'Honda',
            model: 'Accord',
            image: 'https://healthelevate.com/wp-content/uploads/2018/10/2003-2005_Honda_Accord_coupe_-_03-16-2012.jpg',
            isAvailable: true,
            post: []
        })
            .then((car) => {
                Promise.all([myCar]).then(() => {
                    car.save()
                    console.log('successfully seeded')
                })
            })
    });

    User.deleteMany({})
    .then(() => {
        const userData = User.create({
            name: 'Shomari Pope',
            image: 'https://healthelevate.com/wp-content/uploads/2018/10/shomPope.png',
    location: 'Atlanta',
    content: 'hello world!',
            cars: []
        })
            .then((user) => {
                Promise.all([userData]).then(() => {
                    user.save()
                    console.log('successfully seeded')
                })
            })
    });

    Post.deleteMany({})
    .then(() => {
        const userPost = Post.create({
            title: 'nice car!',
            author: 'Ari N-Kosi',
            date: date(),
            comment: 'hello world to you too!'
        })
            .then((userComment) => {
                Promise.all([userPost]).then(() => {
                    userComment.save()
                    console.log('successfully seeded')
                })
            })
    });