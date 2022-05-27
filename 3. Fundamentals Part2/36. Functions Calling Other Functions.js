function cutFruitPieces(fruit) { //3️
    return fruit * 4;           //4️
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples); //2️
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges=.`;
    return juice;                   //5
}

console.log(fruitProcessor(2, 3)); //1️

// it's good example to illustrate 
// DON'T REPEAT YOURSELF PRINCIPLE  ~ dry code ~


//연습
function severalBrands(clothe){
    return clothe * 3;
}

function jonarFashion (shoes, pants){
    const myShoes = severalBrands(shoes);
    const yourPants = severalBrands(pants);
    
    const looking =`looking with ${myShoes} pair of shoes and ${yourPants} pair of pants`;
    return looking;
}

console.log((jonarFashion(3,4)));