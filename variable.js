const book = {
    "title": "Manusia Setengah Salmon",
    "author": "Raditya Dika",
    "publisher": {
      "name": "Gagas Media",
      "address": "Jakarta Selatan"
    }
  }
  
  // destructuring
  const {_title, _author, publisher:{name, address}} = book;
  
  console.log(title, author, name, address);