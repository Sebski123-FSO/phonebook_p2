import React, { useState, useEffect } from "react";
import personService from "./services/persons";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setnewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((allPersons) => {
      setPersons(allPersons);
    });
  }, []);

  const notification = (message, isError = false) => {
    setNotificationMessage(`${message}${isError ? "_msg_is_err" : ""}`);
    setTimeout(() => {
      setNotificationMessage(null);
    }, 3000);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notificationMessage} />
      <Filter setFilter={setFilter}></Filter>
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setnewNumber={setnewNumber} notification={notification}></PersonForm>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} setPersons={setPersons}></Persons>
    </div>
  );
};

export default App;
