import {Component} from "react";
import {Form} from './Form';
import {ContactList} from "./ContactList";
import {nanoid} from 'nanoid'
import {Filter} from './Filter'

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
    filter: ''
  }

  getId = () => {
    let nanoIds = nanoid()
    return nanoIds
  }

  onSubmitForm = (e) => {
    const {name, number} = e.target.elements;
    e.preventDefault()
    const formFields = {
      id: this.getId(),
      name: name.value,
      number: number.value,
    }

    this.setState({
      contacts: this.state.contacts.concat(formFields),
      name: name.value,
      number: number.value,
      id: this.getId()
    })
    e.currentTarget.reset()
  }

  onFilterContacts = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  filterArrContacts = () => {
    const {contacts, filter} = this.state;
    return contacts.filter(current => current.name.toLowerCase().includes(filter.toLowerCase())
    )
  }


  render() {
    return (
      <div className="app">
        <h1>Phonebook</h1>
        <Form fieldStat={this.state} submitProps={this.onSubmitForm}/>
        <Filter filter={this.onFilterContacts}/>
        <ContactList changeList={this.filterArrContacts()}

        />
      </div>
    )
  }
}
