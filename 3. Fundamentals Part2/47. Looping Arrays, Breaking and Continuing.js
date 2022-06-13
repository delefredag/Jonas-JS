const jiArray = [
    'Ji',
    'Kim',
    2037 - 1994,
    'Student',
    ['Kim', 'Yang', 'Shin'],
    true
];
const types = [];
//console.log(jiArray[0]);
//console.log(jiArray[1]);
// ... 
//console.log(jiArray[4]);

//array is zero based[0] cuz when it comes to reading elements out of the array.
for (let i = 0; i < jiArray.length; i++) {
    // Reading from ji array
    console.log(jiArray[i], typeof jiArray[i]);

    // Filling types array
    //types[i] = typeof jiArray[i]; //[ 'string', 'string', 'number', 'string', 'object', 'boolean' ]
    types.push(typeof jiArray[i]); // this is more cleaner 
}
console.log(types);

//practical example
const years = [1994, 2007, 1968, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years [i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jiArray.length; i++) {
    if(typeof jiArray[i] !== 'string') continue; // string 아니면 continue 
    console.log(jiArray[i], typeof jiArray[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jiArray.length; i++) {
    if(typeof jiArray[i] === 'number') break; // number 이면 break 
    console.log(jiArray[i], typeof jiArray[i]);
}

