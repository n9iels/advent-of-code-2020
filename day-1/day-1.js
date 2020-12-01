/**
 * Run the assignmnet
 *
 * @param {number[]} input
 */
function run(input) {
  const sortedArray = input.sort((a, b) => a - b);

  for (i = 0; i < sortedArray.length; i++) {
    const expectedNumber = 2020 - sortedArray[i];
    const exists = sortedArray.find((number) => number === expectedNumber);

    if (!exists) {
      continue;
    }

    return sortedArray[i] * expectedNumber;
  }
}

/**
 * Run the assignmnet
 *
 * @param {number[]} input
 */
function run_part2(input) {
  const sortedArray = input.sort((a, b) => a - b);

  loop1: for (i = 0; i < sortedArray.length; i++) {
    for (j = 0; j < sortedArray.length; j++) {
      if (sortedArray[i] + sortedArray[j] > 2020) {
        continue loop1;
      }

      for (k = 0; k < sortedArray.length; k++) {
        if (sortedArray[i] + sortedArray[j] + sortedArray[k] === 2020) {
          return sortedArray[i] * sortedArray[j] * sortedArray[k];
        }
      }
    }
  }
}

module.exports = {
  run: run,
  run_part2: run_part2,
};
