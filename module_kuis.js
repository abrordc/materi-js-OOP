const Tiger = require('./Tiger.js') 
const Wolf = require('./Wolf.js')

const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl();
  }
  return 'Harimau dan serigala sama-sama kuat!';
};

const myTiger = new Tiger();
const myWolf = new Wolf();

const result = fight(myTiger, myWolf);

console.log(result);
// TODO 4
module.exports = {fight,myTiger,myWolf,result};