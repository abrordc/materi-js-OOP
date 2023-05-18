const date = new Date();
 
const timeInJakarta = date.toLocaleString('id-ID', {
  timeZone: 'Asia/Jakarta',
});
 
const timeInTokyo = date.toLocaleString('ja-JP', {
  timeZone: 'Asia/Tokyo',
});
 
const timeInMakassar = date.toLocaleString('id-ID', {
  timeZone: 'Asia/Makassar',
});
 
console.log(timeInJakarta);
console.log(timeInTokyo);
console.log(timeInMakassar);