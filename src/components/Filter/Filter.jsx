import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <div>
      <label>Find contacts by Name </label>
      <input
        className={css.filter__name}
        type="text"
        name="filter"
        placeholder="Angelina"
        onChange={handleChange}
      />
    </div>
  );
};
