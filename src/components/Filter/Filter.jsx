import PropTypes from 'prop-types';

import css from '../Filter/filter.module.css';

function Filter({ filter, onChangeFilter }) {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={onChangeFilter}
        className={css.input}
      />
    </label>
  );
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
