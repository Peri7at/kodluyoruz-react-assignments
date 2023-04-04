import axios from "axios";

// An anonymous function, which takes user ID as a parameter.
export default (user_id) => {
  return new Promise(async (resolve, reject) => {
    // Reject the promise if the entered user ID is not a number
    if (typeof user_id != "number") reject("The user ID should be a number.");

    // Retrieve user data with axios as user with specified user ID
    const { data: user } = await axios(
      `https://jsonplaceholder.typicode.com/users/${user_id}`
    );

    // Retrieve posts data of specified user with axios as posts
    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    );

    // Add retrieved posts to the user object
    user.posts = posts;

    // Resolve the promise with user data
    resolve(user);
  });
};
