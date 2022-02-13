import React from "react";
import personService from "../services/persons";

const Persons = ({ persons, filter, setPersons }) => {
  const deletePersonWithId = (id) => {
    if (window.confirm(`Delete ${persons.find((person) => person.id === id).name}?`)) {
      personService.deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  return (
    <>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick={() => deletePersonWithId(person.id)}>Delete</button>
          </li>
        ))}
    </>
  );
};

export default Persons;
