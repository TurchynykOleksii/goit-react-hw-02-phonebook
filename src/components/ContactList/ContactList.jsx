import css from './ContactList.module.css'


export const ContactList = ({changeList}) => {

  return (
    <>
      <h2>Contacts</h2>
      {changeList.length > 0 && <ul className={css.list}>
        {changeList.map(({id, name, number}) => {
          return (
            <li key={id} className={css.listItem}>
              <span>{name}: {number}</span>
            </li>
          )
        })}
      </ul>}
    </>
  )
}
