
// var basic = new Vue ({
//   el: '#basic',
//   data: {
//     message: 'Hello Vue, I was made with an ID'
//   }
// });
//
// var classElement = new Vue ({
//   el: '.class-element',
//   data: {
//     message: 'Hello Vue, I was made with a class'
//   }
// });

var me = new Vue ({
  el: '.me',
  data: {
    firstName: 'Sarah',
    lastName: 'Penney',
    town: 'Manchester',
    age: 29
  }
});


// var helloButton = new Vue ({
//     el: '#hello',
//     data: {},
//     methods: {
//         sayHello: function () {
//             alert("Hello");
//         }
//     }
// });

var wishList = new Vue ({
    el: '#wishList',
    data: {
        list: [ 'tampons', 'ice-cream' ],
        item: '',
        menu: [
          {text: "Melody", price: "£3.10p", imageSrc: "images/ada.jpg"},
          {text: "Keeper", price: "£2.30p", imageSrc: "/images/face.jpg"},
          {text: "Me", price: "£1.20p", imageSrc: "/images/IMG_1188.jpg"},
          {text: "Jason", price: "£2.40p", imageSrc: "/images/static1.squarespace.png"}
        ]
    },
    methods: {
        addToList: function () {
          //TODO: add value of whichever ou clicked and not just first one
            this.list.push(this.menu[0].text);
            // delete(this.item);
        }
    }
});
