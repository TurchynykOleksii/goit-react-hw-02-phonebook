import css from './ContactList.module.css'

export const ContactList = ({contactField}) => {

  console.log(contactField)
  return (
    <>
      <h2>Contacts</h2>
      <ul className={css.list}>
        {contactField.map(({id, name, number}) => {
          return (
            <li key={id} className={css.listItem}>
              <span>{name}: {number}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}
