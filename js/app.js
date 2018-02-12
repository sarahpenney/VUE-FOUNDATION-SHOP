
var basic = new Vue ({
  el: '#basic',
  data: {
    message: 'Hello Vue, I was made with an ID'
  }
});

var classElement = new Vue ({
  el: '.class-element',
  data: {
    message: 'Hello Vue, I was made with a class'
  }
});

var me = new Vue ({
  el: '.me',
  data: {
    firstName: 'Sarah',
    lastName: 'Penney',
    town: 'London',
    age: 29
  }
});

var list = new Vue ({
    el: '#list',
    data: {
        menu: [
            {text: "Vue"},
            {text: "Foundation"},
            {text: "Email"}
        ]
    }
});

var helloButton = new Vue ({
    el: '#hello',
    data: {},
    methods: {
        sayHello: function () {
            alert("Hello");
        }
    }
});

var shoppingList = new Vue ({
    el: '#shoppingList',
    data: {
        list: [ 'tampons', 'ice-cream' ],
        item: ''
    },
    methods: {
        addToList: function () {
            this.list.push(this.item);
            delete(this.item);
        }
    }
});
