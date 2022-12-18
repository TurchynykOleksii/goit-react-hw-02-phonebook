import css from './ContactList.module.css'


export const ContactList = ({changeList, onDeleteContact}) => {

  return (
    <>
      <h2>Contacts</h2>
      {changeList.length > 0 && <ul className={css.list}>
        {changeList.map(({id, name, number}) => {
          return (
            <li key={id} className={css.listItem}>
              <span className={css.span}>{name}: {number}</span>
              <button className={css.button} type="button" onClick={() => onDeleteContact(id)}>delete</button>
            </li>
          )
        })}
      </ul>}
    </>
  )
}
