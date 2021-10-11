import axios from "axios";
const getData = function (num) {
  
  return new Promise(async (resolve, reject) => {
    
    const { data: user1 } = await axios(
      
      `https://jsonplaceholder.typicode.com/users/${num}`
    );
    const { data: user2 } = await axios(
      
      `https://jsonplaceholder.typicode.com/posts?userId=${num}`
    );
    const allData = [user1, user2[1]]; 

    console.log(allData); 
  });
};
export default getData;