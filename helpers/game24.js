const game24 = (numbers) => {
  return solve(numbers);
};

const solve = (numbers) => {
  if (numbers.length == 0) return false;
  if (numbers.length == 1) return Math.abs(numbers[0] - 24) < 0.000001;

  for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      if (i == j) {
        continue;
      }

      var numbers2 = [];
      for (var k = 0; k < numbers.length; k++) {
        if (k != i && k != j) {
          numbers2.push(numbers[k]);
        }
      }

      for (var opt = 0; opt < 4; opt++) {
        if (opt < 2 && j > i) continue;
        if (opt == 0) numbers2.push(numbers[i] + numbers[j]);
        if (opt == 1) numbers2.push(numbers[i] * numbers[j]);
        if (opt == 2) numbers2.push(numbers[i] - numbers[j]);
        if (opt == 3) {
          if (numbers[j] != 0) {
            numbers2.push(numbers[i] / numbers[j]);
          } else {
            continue;
          }
        }
        
        if (solve(numbers2)) return true;
        numbers2.pop();
      }
    }
  }

  return false;
};

module.exports = { game24 };
