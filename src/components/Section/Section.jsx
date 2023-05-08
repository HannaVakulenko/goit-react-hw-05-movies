import { SectionStyled } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
  return <SectionStyled>{children}</SectionStyled>;
};

Section.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Section;
