import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import  setFilter  from '../../redux/contactsSlice';
import css from './Filter.module.css';

const Filter = ({ value }) => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setFilter(event.currentTarget.value));
    };

    return (
        <div className={css['contact-forma']}>
            <h3 className={css.title}>Find contacts by name</h3>
            <label>
                <input
                    className={css.filter}
                    type="text"
                    name="filter"
                    value={value}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
};

export default Filter;
