// import { Children } from 'react';
import css from './Sections.module.css';
import PropTypes from 'prop-types';

export const Sections = ({ title, children }) => {
  return (
    // <React.Fragment>
    //   <div>{title}</div>
    //   <div>{children}</div>
    // </React.Fragment>
    <>
      <div className={css.title}>{title}</div>
      <div className={css.titleChild}>{children}</div>
    </>
  );
};

Sections.propTypes = {
  title: PropTypes.string.isRequired,
};
