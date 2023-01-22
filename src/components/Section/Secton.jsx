import PropTypes from 'prop-types';
import css from '../Section/section.module.css';

function Section({ title, children }) {
  return (
    <section className={css.section}>
      {title ? <h2 className="title">{title}</h2> : ' '}
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
