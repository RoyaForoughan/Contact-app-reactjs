
import PropTypes from 'prop-types'
import styles from './ContactItem.module.css'

export default function ContactItems({data :{id,name , lastName ,email , phone} , deleteHandler}) {
  ContactItems.propTypes = {
    data: PropTypes.object.isRequired,
    deleteHandler: PropTypes.func.isRequired
  }; 
  return (
    <li className={styles.item} >
    <p>{name} {lastName}</p>
    <p>
      <span>📭 </span> {email}
    </p>
    <p>
      <span>📱 </span> {phone}
    </p>
    <button onClick={() => deleteHandler(id)}>🗑 </button>
  </li>
  )
}
