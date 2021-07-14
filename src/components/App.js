
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4';
import Header from './Header';
import Contact from './Contact';
import List from './List';
import Details from './Details';
function App() {
  const key = "contacts";
  const [contacts, setcontacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setcontacts([...contacts, { id: uuid(), ...contact }]);//local storage ke liye useeffect
  };
  const remove = (id) => {
    const copycontact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setcontacts(copycontact);
  };

  useEffect(() => {
    const retrieve = JSON.parse(localStorage.getItem(key));
    if (retrieve) setcontacts(retrieve);
  }, [])
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route path="/"
            exact
            render={(props) => (<List {...props} contacts={contacts} getContactid={remove} />)}
          //contacts={contacts} mtlb list mai data pass hora with help of props
          />
      

          <Route path="/add" render={(props) => (<Contact {...props} addContactHandler={addContactHandler} />)} />
          <Route path="/contact/:id" component={Details} />

          {/* '/' tells homepages */}
          {/* <Contact addContactHandler={addContactHandler} /> */}
          {/* <List  contacts={contacts} getContactid={remove}/> */}
          {/* contact as a property props */}
        </Switch>

      </Router>
    </div>
  );
}

export default App;
