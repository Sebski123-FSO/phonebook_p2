import React from "react";
import personService from "../services/persons";

const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setnewNumber, notification }) => {
  const onSubmitNewName = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      const existingPerson = persons.find((person) => person.name === newName);
      if (newNumber !== existingPerson.number) {
        if (window.confirm(`${existingPerson.name} has already been added to phonebook, replace old number (${existingPerson.number}) with a new one (${newNumber})?`)) {
          const updatedContact = { ...existingPerson, number: newNumber };
          personService
            .update(updatedContact)
            .then((returnedContact) => {
              setPersons(persons.map((person) => (person.id === returnedContact.id ? returnedContact : person)));
              notification(`Updated number for ${returnedContact.name}`);
            })
            .catch((error) => {
              if (error.response) {
                notification(error.response.data.error, true);
              } else {
                notification(`${existingPerson.name} has already been removed from the server`, true);
                personService.getAll().then((allPersons) => {
                  setPersons(allPersons);
                });
              }
            });
        }
      } else {
        alert(`${newName} already exists`);
      }
    } else {
      const newContact = { name: newName, number: newNumber };
      personService
        .add(newContact)
        .then((returnedContact) => {
          setPersons(persons.concat(returnedContact));
          setNewName("");
          setnewNumber("");
          notification(`Added ${returnedContact.name}`);
        })
        .catch((error) => {
          notification(error.response.data.error, true);
        });
    }
  };

  const onNameInputChange = (event) => {
    setNewName(event.target.value);
  };

  const onNumberInputChange = (event) => {
    setnewNumber(event.target.value);
  };

  return (
    <form onSubmit={onSubmitNewName}>
      <div>
        name: <input value={newName} onChange={onNameInputChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={onNumberInputChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
