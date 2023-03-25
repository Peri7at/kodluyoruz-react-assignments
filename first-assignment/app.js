import axios from "axios";

export default (user_id) => {
  return new Promise(async (resolve, reject) => {
    if (typeof user_id != "number") reject("Please correct the user ID.");
    const { data: user } = await axios(
      `https://jsonplaceholder.typicode.com/users/${user_id}`
    );

    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    );

    user.posts = posts;
    resolve(user);
  });
};
