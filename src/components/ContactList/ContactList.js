import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
    const dispatch = useDispatch();

    const handleDeleteClick = (contactId) => {
        dispatch(deleteContact(contactId));
    };

    return (
        <ul className={css.list}>
            {contacts.map((contact) => (
                <li className={css.name} key={contact.id}>
                    {contact.name} - {contact.number}
                    <button
                        className={css['btn-delete']}
                        type="button"
                        onClick={() => handleDeleteClick(contact.id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ContactList;