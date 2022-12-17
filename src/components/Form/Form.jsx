import css from './Form.module.css'

export const Form = ({submitProps}) => {
  return (
    <form onSubmit={submitProps} className={css.form}>
      <label className={css.label}>
        <span className={css.span}>Name:</span>
        <input className={css.input} type="text"
               name="name"
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required/>
      </label>
      <label className={css.label}>
        <span className={css.span}>Phone:</span>
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">add contact</button>
    </form>
  )
}
