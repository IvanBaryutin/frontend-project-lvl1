import readlineSync from 'readline-sync';

export const sayHello = () => {
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello ${userName}!`);
};

export default sayHello;
