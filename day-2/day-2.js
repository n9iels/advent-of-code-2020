/**
 * Run the assignmnet
 *
 * @param {string} input
 * @return Amount of password that applies to the given policy
 */
function run(input, checkFunction) {
  return input.split("\n").reduce((prev, curr) => {
    const parsedInput = parseInput(curr);
    const isValid = checkFunction(
      parsedInput.min,
      parsedInput.max,
      parsedInput.letter,
      parsedInput.password
    );

    return isValid ? prev + 1 : prev;
  }, 0);
}

/**
 * @typedef PasswordWithPolicy
 * @type {object}
 * @property {number} min Minimum amount of occurences
 * @property {number} max Maximum amount of occurences
 * @property {string} letter Letter that the policy applies to
 * @property {string} password Password that the plicy aplies to
 */

/**
 * Parse a given password and plicy into an object.
 *
 * @param {string} input Password and policy in the format: 1-3 a: password
 * @return {PasswordWithPolicy}
 */
function parseInput(input) {
  const colonPositon = input.indexOf(":");

  return {
    min: Number(input.substr(0, input.indexOf("-"))),
    max: Number(input.slice(input.indexOf("-") + 1, colonPositon - 2)),
    letter: input.charAt(colonPositon - 1),
    password: input.substr(colonPositon + 2),
  };
}

/**
 * Check if a password meets the given poicy.
 *
 * @param {number} min Minimum amount that a letter must appear
 * @param {number} max Maximum amount that a letter may appear
 * @param {string} letter Letter where the policy applies to
 * @param {string} password Password that must be checked
 */
function checkPassword(min, max, letter, password) {
  const amountOfOccurences = password
    .split("")
    .reduce((prev, curr) => (curr === letter ? prev + 1 : prev), 0);

  return amountOfOccurences >= min && amountOfOccurences <= max;
}

/**
 * Check if a password meets the given poicy.
 *
 * @param {number} first First position that the letter may appear
 * @param {number} second Second position that the letter may appear
 * @param {string} letter Letter where the policy applies to
 * @param {string} password Password that must be checked
 */
function checkPasswordNew(first, second, letter, password) {
  // The policy does not account for a zero-based index
  charAtFirst = password.charAt(first - 1);
  charAtSecond = password.charAt(second - 1);

  return (
    (charAtFirst === letter && charAtSecond !== letter) ||
    (charAtFirst !== letter && charAtSecond === letter)
  );
}

module.exports = {
  run: run,
  parseInput: parseInput,
  checkPassword: checkPassword,
  checkPasswordNew: checkPasswordNew,
};
