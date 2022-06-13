const jiArray = [
    'Ji',
    'Kim',
    2037 - 1994,
    'Student',
    ['Kim', 'Yang', 'Shin'],
    true
];
//0, 1, ..., 4
//4, 3, ..., 1  array backwards  


for (let i = jiArray.length - 1; i >= 0; i--) {
    console.log(i, jiArray[i]);
}

// loop inside loop
for (let exercise = 1 ; exercise <=4 ; exercise++){
 console.log( `----- Starting exercise----- ${exercise}`);  //1 : 2 : ... : 4

 for (let rep = 1; rep < 6; rep++ ){
     console.log(`Exercise ${exercise}Lifting weight repetition ${rep}🧛‍♀️`); //1~5 : 1~5 : ... : 1~5
 }
}

// ji's workout with PT Jonar 
for (let setTrainer = 1; setTrainer <=3 ; setTrainer++ ){
    console.log(`You're almost there!${setTrainer}🙋🏻‍♂️`);
    
    for(let ji = 1; ji <=5; ji++){
        console.log(`I workout hard${ji}🏋️‍♀️`);
    }
}

// Starting pitcher's PERFECT PITCHING 
for (let pitcher =1; pitcher <=9 ; pitcher++){
    console.log(`I'm a No.1 pitcher of Kia Tigers on ${pitcher}th inning 🐯`); 
    for(let out = 1 ; out <=3; out ++){
        console.log(`STRIKE OUT${out}🅺`)
        for(let pitching = 1; pitching <=3 ; pitching ++){
            console.log(`Here's my strike ${pitching}⚾️`);
        }
    }
}
