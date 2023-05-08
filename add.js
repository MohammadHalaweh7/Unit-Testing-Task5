const filterNumbers = (numbers) => {
  return numbers.split("+").map(Number);
};

const removeThousands = (numbers) => {
  return numbers.filter((num) => num <= 1000);
};

const add = (numbers) => {
  if (!numbers) {
    return 0;
  }

  const numFilteredArrayAllowed = removeThousands(filterNumbers(numbers));

  const negativeNumbersArray = numFilteredArrayAllowed.filter((num) => num < 0);
  if (negativeNumbersArray.length > 0) {
    throw new Error(
      `Negatives are not allowed: (${negativeNumbersArray.join(" | ")})`
    );
  }

  return numFilteredArrayAllowed.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
};

const addMultiple = (numbers) => {
  const numFilteredArrayAllowed = removeThousands(filterNumbers(numbers));

  if (numFilteredArrayAllowed.length > 2) {
    throw new Error("Support up to 2 numbers only");
  }

  return add(numbers);
};

module.exports = { add, addMultiple };
