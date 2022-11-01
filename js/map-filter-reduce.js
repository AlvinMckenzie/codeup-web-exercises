const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

console.log(users);

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const usersObj = users.filter(x => {
    let java = 'java';
    if (x.languages.length >= 3) {
        return x.languages
    }
    else {
        return x.languages.push(java)
    }
})

console.log(usersObj);

//Use .map to create an array of strings where each element is a user's email address

const usersEmails = users.map(x => {
    return x.email
})

console.log(usersEmails);

//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let years = []
users.forEach(x => years.push(x.yearsOfExperience))
const userTotalExp = years.reduce((x, y) => {
    return x + y
}, 0);

console.log(userExp);

const userExp = userTotalExp / users.length;

//Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce(function (x, y){
    if(y.email.length > x.length){
        x = y.email
    }
    return x
}, "")

console.log(longestEmail);

//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let names = users.map(x =>  x.name)
// let nameObject = names.reduce((name, index) => {
//     return name + ", " + index
// }, "")
//
// console.log('This is your instructors:' + nameObject)

let asString =users.reduce(function(previousValue,currentValue,currentIndex, currentIndex, myArr){
    let punctuation = ','

    if(currentIndex === myArr.length - 1){
        punctuation = '.'
    }
    return previousValue+currentValue.name + punctuation + ''
}, "Your instructors are: ")




//Bonus
//
// Use .reduce to get the unique list of languages from the list of users.

let languages = users.reduce((a, b) => {

    b.languages.forEach(x => {
        if (!a.includes(x)) {
            a.push(x)
        }
    })
    return a
}, [])

console.log(languages)