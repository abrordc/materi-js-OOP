//Synchronous vs Asynchronous

.log("Selamat datang!");
setTimeout(() => {
  console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);
console.log("Ada yang bisa dibantu?");


//Callback function

const orderCoffee = () => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
    }, 3000);
    return coffee;
}
 
const coffee = orderCoffee();
console.log(coffee);

//Promise => janji; erjalan di asynchronous
//    1. pending (janji sedang dalam prosess)
//    2. Fulfilled (janji terpenuhi)
//    3. Rejected (janji gagal terpenuhi)

const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}
 
 
const makeCoffee = () => {
    return new Promise(executorFunction);
}
const coffeePromise = makeCoffee();
console.log(coffeePromise);
//jika true 
/* output
Promise { 'Kopi berhasil dibuat' }
*/
//jika false
/* output
Promise { <rejected> 'Mesin kopi tidak bisa digunakan' }
*/

