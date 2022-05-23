import React from "react";
import "./PlayerForm.css";

export function PlayerForm(props) {
  const onFirstNameChange = (event) => {
    let value = event.target.value;
    props.setFirstName(value);
  }
  const onLastNameChange = (event) => {
    let value = event.target.value;
    props.setLastName(value);
  }
  return (
    <React.Fragment>
      <label htmlFor="firstName">First name:</label>
      <input name="firstName" value={props.firstName} onChange={onFirstNameChange} />
      <label htmlFor="lastName">Last name:</label>
      <input name="lastName" value={props.lastName} onChange={onLastNameChange} />
      <button className="add-button" onClick={props.onClick}>Add</button>
    </React.Fragment>
  )
}
