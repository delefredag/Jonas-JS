const hasDriversLicense = true; //변수A
const hasGoodVision = true; //변수 B

console.log(hasDriversLicense && hasGoodVision );
//🆃 true && true : true;
//  true && false🄵: false; 

console.log(hasDriversLicense || hasGoodVision );
//🆃 true || false : true;✨

console.log(!hasDriversLicense);


// const shouldDrive = hasDriversLicense && hasGoodVision;
// if(shouldDrive){
//     console.log('Sarah is able to drive!');
// }else{
//     console.log('Someone else should drive...');
// }

const notTired = true; //변수C
// if문 변수C앞에 !부정 붙여주면 '피곤하지않음'이 '사실이 아님' = '피곤함' 
// true && true && true ➡️ false문이 실행됨 

if(hasDriversLicense && hasGoodVision && notTired){
    console.log('Sarah is able to drive!');
}else{
    console.log('Someone else should drive...');
}