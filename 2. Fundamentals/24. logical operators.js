const hasDriversLicense = true; //๋ณ์A
const hasGoodVision = true; //๋ณ์ B

console.log(hasDriversLicense && hasGoodVision );
//๐ true && true : true;
//  true && false๐ต: false; 

console.log(hasDriversLicense || hasGoodVision );
//๐ true || false : true;โจ

console.log(!hasDriversLicense);


// const shouldDrive = hasDriversLicense && hasGoodVision;
// if(shouldDrive){
//     console.log('Sarah is able to drive!');
// }else{
//     console.log('Someone else should drive...');
// }

const notTired = true; //๋ณ์C
// if๋ฌธ ๋ณ์C์์ !๋ถ์  ๋ถ์ฌ์ฃผ๋ฉด 'ํผ๊ณคํ์ง์์'์ด '์ฌ์ค์ด ์๋' = 'ํผ๊ณคํจ' 
// true && true && true โก๏ธ false๋ฌธ์ด ์คํ๋จ 

if(hasDriversLicense && hasGoodVision && notTired){
    console.log('Sarah is able to drive!');
}else{
    console.log('Someone else should drive...');
}