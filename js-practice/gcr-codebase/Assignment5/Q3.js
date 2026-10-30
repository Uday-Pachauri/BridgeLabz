let user = {
    name: "Uday",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

let user2 = {
    name: "Uday",

    showName: function() {
        console.log(this.name);
    }
};

user2.showName();