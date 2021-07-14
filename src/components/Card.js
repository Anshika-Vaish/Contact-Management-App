import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/icon-ios7-contact-outline-512.png';


const Card = (props) => {
  const { id, name, email } = props.contact;//id name email ko props.contact se initialize hogya
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default Card;