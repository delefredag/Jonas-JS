/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
// let's BMI식
//1. full name, mass, height 
//2. const calcBMI() -> store value
//3. compare console higher " string "
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () { //✅
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () { //✅
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

//"John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}

//✅calcBMI 함수에 백틱없이 this 쓰고 this.variable 저장 
//연습 
const ji = {
    fullName: 'JY KIM',
    mass: 54,
    height: 1.55,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const jonar = {
    fullName: 'JONAR MALMSTEIN',
    mass: 80,
    height: 1.78,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
ji.calcBMI(); //✅앞에 ji.쓰기 
jonar.calcBMI(); //✅콘솔 보려면 요나함수도 실행해야함  
console.log(ji.bmi, jonar.bmi);
if (ji.bmi > jonar.bmi) {
    console.log(`${ji.fullName}'s BMI${ji.bmi} is higher than ${jonar.fullName}'s BMI${jonar.bmi}`)//✅if 안에 콘솔로그
} else {
    console.log(`${jonar.fullName}'s BMI${jonar.bmi} is higher than ${ji.fullName}'s BMI${ji.bmi}`)
};
