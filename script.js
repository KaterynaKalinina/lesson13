
const slides = [
    new Slide(
        1,
        'Poo 1',
        'https://images.app.goo.gl/Nyif5pJnvr7n2tQd9',
        'Content 1'
    ),

    new Slide(
        2,
        'Poo 2',
        'https://images.app.goo.gl/Nyif5pJnvr7n2tQd9',
        'Content 2'
    ),

    new Slide(
        3,
        'Poo 3',
        'https://images.app.goo.gl/Nyif5pJnvr7n2tQd9',
        'Content 3'
    ),
];

slides.forEach( (slide) => {
    console.log(slide);
});

slides.forEach( ({title}) => {
    console.log(title);
});


// const newArr = slides.map(slide => `${slide.title} - ${slide.content}`);
// console.log(newArr);

// const listOfUsers = [
//     {id: 1,
//     name: 'Petya',
//     avatar: '',
//     about: '...',
//     taxesPaid: true,
//     debt: 0,
//     },

//     {  
//         id: 2,
//         name: 'Vasya',
//         avatar: '',
//         about: '...',
//         taxesPaid: false,
//         debt: 1000,
//     },

//     {  
//         id: 3,
//         name: 'Inokentiy',
//         avatar: '',
//         about: '...',
//         taxesPaid: false,
//         debt: 35000,
//     },
// ];

// const listOfUsersFromUsers = listOfUsers.map(
//     (user) => new Slide(user.id, user.name, user.avatar, user.about)
// );
// listOfUsersFromUsers[0].toggle();
// console.log(listOfUsersFromUsers);

// const usersWithAvatar = listOfUsersFromUsers.filter((user) => !!user.avatar);
// console.log(usersWithAvatar);

// const atLeastOne = listOfUsers.some((user) => !user.taxesPaid);
// console.log(atLeastOne);

// const allOfUsers = listOfUsers.every((user) => !user.taxesPaid);
// console.log(allOfUsers);

// const debt = listOfUsers.reduce((acc, next) => acc + next.debt, 0);
// console.log(debt);