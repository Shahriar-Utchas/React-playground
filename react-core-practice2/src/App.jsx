import { Suspense } from "react";
import "./App.css";
import Batsman from "./batsman";
import Counter from "./count";
import Users from "./Users";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
//aysnc function
// const fetchUsers = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

function App() {
  // const users = fetchUsers();
  return (
    <>
      <h4>React Core Concepts part-2</h4>
      {/* <Counter></Counter> */}
      {/* <Batsman></Batsman> */}
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
    </>
  );
}

export default App;
