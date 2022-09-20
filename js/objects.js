(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {};
        person['firstName'] = 'Alvin'
        person['lastName'] = 'Mckenzie'
    console.log(person.firstName)
    console.log(person.lastName)


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person['sayHello'] = 'Hello from ' + person.firstName + person.lastName + '!'
    console.log(person.sayHello)


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


for(let i = 0; i <= shoppers.length - 1; i++) {
if (shoppers[i].amount >= 200){
     let discountPrice = .12;
     let totalDiscount = shoppers[i].amount * discountPrice;
     let total = shoppers[i].amount - (shoppers[i].amount* discountPrice);
    console.log(shoppers[i].name + ' original price is: ' +  shoppers[i].amount +' the discount amount is: ' + totalDiscount + ' the total after the discount is: ' + total + '.' )
}else {
    console.log(shoppers[i].name + ' total price is: ' + shoppers[i].amount + ' did not spend enough for the discount.')
}
}



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books =[
        {
        title: 'Dragon Master',
        author: {
            firstName: 'Tracey',
            lastName: 'West'
        }
        },
        {
            title: 'Monsters and how to tame them',
            author: {
                firstName: 'Kevin',
                lastName: 'Hart'
            }
        },
        {
            title: 'Arthur',
            author: {
                firstName: 'Marc',
                lastName: 'Brown'
            }
        },
        {
            title: 'A song of ice and fire',
            author: {
                firstName: 'George R.R.',
                lastName: 'Martin'
            }
        },
        {
            title: 'Feeding the Soul',
            author: {
                firstName: 'Tabitha',
                lastName: 'Brown'
            }
        }
    ]

for (let i = 0; i <= books.length -1; i++){
    console.log(books[i].title)
    console.log(books[i].author.firstName)
    console.log(books[i].author.lastName)
}

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for (let i = 0; i <= books.length -1; i++){
        console.log('Book # ' + (i + 1))
        console.log('Tittle: ' + books[i].title)
        console.log('Author: ' + books[i].author.firstName + ' ' + books[i].author.lastName)
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();