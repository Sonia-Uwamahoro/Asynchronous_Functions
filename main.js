// 1. Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.


async function message(messageString, delayTime) {
    await new Promise(resolve => setTimeout(resolve, delayTime));
    console.log(messageString);
  }
  message("Good Morning", 5000);




// 2. You have an array of user IDs and a function getUserData(id) that returns a Promise with user 
// data when given a user ID. Write an asynchronous function that fetches and logs the data for each user 
// ID one by one, in sequence.

async function gettingUserData(ids) {
  for (const id of ids) {
    try {
      const userData = await getUserData(id);
      console.log(userData);
    } catch (error) {
      console.error(` ${id}: I love Javascript`);
    }
  }
}
const allIds = [01, 02, 03];
gettingUserData(allIds);



// 3. You have an asynchronous function performTask() that returns a Promise. The Promise resolves if
//  the task is successful and rejects if there's an error. Write a function that calls performTask() 
// and logs a custom success message if the task is successful, and a custom error message if there's an error.



let success=true;

const performTask = async()=>{
    let successResult = await promise;
    console.log({successResult});
}
let promise =new Promise(function(resolve,reject){
  if(success){
      setTimeout(()=>{resolve("Your Task is successful")});
  }
  else{
      setTimeout(()=>{reject("Your Task failed")});
  }
});
performTask();
