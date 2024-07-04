import axios from "axios";
import _ from "lodash";

_.sample([123, 412, 1244]);

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     console.log("YESSIR");
//     printUser(res.data);
//   })
//   .catch((err) => {
//     console.log("ERROR!", err);
//   });

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log("YESSIR");
    res.data.forEach(printUser);
  })
  .catch((err) => {
    console.log("ERROR!", err);
  });

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}
