//no a
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hidegard.org",
}
data.name = "Asep Setiawan";
data.email = "zep.setiawan09@gmail.com";
data.hobby = ['renang', 'game', 'futsal'];

// no b
const {address:{street, city}} = data;

console.log(street, city);