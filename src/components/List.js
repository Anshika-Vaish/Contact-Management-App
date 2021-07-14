import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
//functional component


const List = (props) => {
 // console.log(props); list of contacts through props

  const deleteConactHandler = (id) => {
    props.getContactid(id);
  };

  const renderContactList = props.contacts.map((contact) => {//map contacts
    return (
      <Card //card import hogya 
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div>
    <div class="main">
      <h2>Contact List
        <Link to="/add">
          <p align="right">
          <button className="ui button blue right">Add Contact
          </button>
          </p>


        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>;
      {/* get list by render list function */}
    </div>
    </div>

  );
};

export default List;
