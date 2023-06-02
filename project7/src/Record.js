import React from "react";

const Record = ({ bookTitle, memberName, borrowedDate, returnedDate }) => {
  return (
    <div className="record">
      <p>
        <strong>Book:</strong> {bookTitle}
      </p>
      <p>
        <strong>Member:</strong> {memberName}
      </p>
      <p>
        <strong>Borrowed Date:</strong> {borrowedDate}
      </p>
      <p>
        <strong>Returned Date:</strong> {returnedDate || "Not returned yet"}
      </p>
    </div>
  );
};

export default Record;
