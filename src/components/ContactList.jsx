
import ContactItems from './ContactItems';
import PropTypes from 'prop-types'
import styles from './ContactList.module.css'

function ContactList({contacts , deleteHandler}) {
  if(!contacts) return null
  ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteHandler: PropTypes.func.isRequired
  };  
  return (
    <div className={styles.container}>
        <h3>Contact List</h3>
        {contacts.length ? 
        ( <ul className={styles.contacts}>
          {contacts.map(contact =>
              <ContactItems 
              key={contact.id} 
              data={contact} 
              deleteHandler={deleteHandler}
              />
            )}
        </ul>) : (<p className={styles.message}>No contact yet!</p>)}
       
    </div>
  )
}


// ContactList.propTypes = {
//   myProp: PropTypes.string.isRequired, // Add the missing prop type validation
// };
// ContactList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string
//     })
//   )
// };

export default ContactList