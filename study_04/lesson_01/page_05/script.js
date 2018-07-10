function attack(item) {
  if (item === 'throwing stars') {
    return 'It\'s super effective!';
  }

  return 'It\'s effective!';
}

console.log(attack('throwing stars'));
