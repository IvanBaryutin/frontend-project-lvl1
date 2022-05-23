import readlineSync from 'readline-sync';

export const isEven = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(randomNumber);
};

export default isEven;
