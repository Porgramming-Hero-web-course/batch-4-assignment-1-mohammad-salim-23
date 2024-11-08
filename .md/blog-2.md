How to handle asynchronous operations using async/await over callback/promise TypeScript?

promise:
Syntax:
const Promise = new Promise((resolve, reject) => {
  // Asynchronous operation 
  // if success give result otherwise reject request
  
});
Proomises are used to handle outcome of an asynchronous operation , .then() for successful result and .catch() for error
steps:
1. Create an Asynchronous Function
async function testAsyncFunction(): Promise<void> {
  // Asynchronous code with await keyword
  try {
    const result = await testPromiseFunction();
   r
  } catch (error) {
    // Handle errors
  }
}
2. Use the await Keyword
   this keyword help excecution the function until the promise is resolved or rejected.

