export const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operators = ['+', '-', 'x'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let result: number;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case 'x':
      result = num1 * num2;
      break;
    default:
      result = 0;
  }

  return {
    question: `${num1} ${operator} ${num2} = ?`,
    result: result.toString(),
  };
};