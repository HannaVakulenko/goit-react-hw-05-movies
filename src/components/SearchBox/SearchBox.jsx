import { SearchForm, Input, SearchButton } from './SearchBox.styled';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

const SearchBox = ({ onSubmit }) => {
  const onSearchQuery = e => {
    e.preventDefault();

    const query = e.target.elements.query.value;

    if (!query) {
      toast.error('Please enter something');
      return;
    }

    onSubmit(query);
    e.target.reset();
  };

  return (
    <SearchForm onSubmit={onSearchQuery}>
      <Input
        id="searchQuery"
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <SearchButton type="submit">
        <BsSearch size="16" />
      </SearchButton>
    </SearchForm>
  );
};

export default SearchBox;

SearchBox.propType = {
  //   value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
