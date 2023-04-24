function getFruit(fruit){
    return new Promise((resolve, reject) =>{
    if(fruit != "watermelon"){
    setTimeout(() =>{
    resolve(`Here is your ${fruit}.`);
    }, 1000)
    }
    else{
    setTimeout(() =>{
    reject("Sorry we're out of watermelons.")
    }, 2000)
    }
    })
    }
    
    let fruit = prompt("Enter a fruit name: ");
    getFruit(fruit).then(value => {result.innerHTML = value}).catch(err => {result.innerHTML = err});