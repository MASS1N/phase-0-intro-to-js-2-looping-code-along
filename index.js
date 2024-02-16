// Code your solutions in this file
// index.js

// Task 1
function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  
  // Task 2
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage:
  const names = ['Alice', 'Bob', 'Charlie'];
  const event = 'birthday';
  const messages = writeCards(names, event);
  console.log(messages);
  
  countDown(5);
  