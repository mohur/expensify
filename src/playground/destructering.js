//Object destructering
const person = {
    firstName: 'Maher',
    age: 23,
    location: {
        city: 'Detroit',
        temp: 24
    }
};

const { firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age} years old.`);

const { city, temp } = person.location;
console.log(`${city} is at around ${temp} degrees fahrenheit`);

const book = {
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    publisher: {
        name: 'Pascal Covici'   
    }
};

const { title, author } = book;
console.log(`The book, ${title}, was written by ${author}.`);

const { name = 'Self-Published' } = book.publisher;
console.log(`The publisher of such book was ${name}.`);

//Array destructering
const item = ['Hazelnut Iced Coffee', '$1.50', '$2.00', '$4.00'];
const [drink, , small] = item;
console.log(`A ${drink} costs at around ${small}.`);