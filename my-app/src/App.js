import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/AddUser";
import { useState } from "react";
import UserList from "./components/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((previous) => {
      return [
        ...previous,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
