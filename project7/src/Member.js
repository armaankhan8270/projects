import React from "react";

const Member = ({ name, email, id, onRemove }) => {
  return (
    <div className="member">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
};

export default Member;
