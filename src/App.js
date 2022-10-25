import { useState } from "react";
import "./App.css";
import Names from "./Names";

const App = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const firstName = (event) => {
    setFirstName(event.target.value);

    console.log("value is:", event.target.value);
  };

  const lastName = (event) => {
    setLastName(event.target.value);

    console.log("value is:", event.target.value);
  };

  const clearFN = (event) => {
    setFirstName("");
  };

  const clearLN = (event) => {
    setLastName("");
  };
  return (
    <div>
      <Names
        onChangeFN={firstName}
        onChangeLN={lastName}
        onClickFN={clearFN}
        onClickLN={clearLN}
      />
      <h3>First name: {firstname}</h3> {"\n"}
      <h3>Last name: {lastname}</h3>
    </div>
  );
};

export default App;
