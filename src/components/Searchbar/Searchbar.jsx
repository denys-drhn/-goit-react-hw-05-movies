import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');
  const [prevSearch, setPrevSearch] = useState('');
  const [, setSearchParams] = useSearchParams();

  //   const movieName = searchParams.get('query');

  const handleChange = event => {
    setSearch(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      // если строка пустая и мbl нажали кнопку поиска
      alert('Please, fill in the input field');
      return;
    }
    // проверка на одинаковое слово
    if (search === prevSearch) {
      alert('Same request');
      setSearch('');
      return;
    }

    setSearchParams({ query: search }); // записываем поисковый запрос в хук useSearchParams
    setPrevSearch(search);
    onSubmit(search); // передаем поисковый запрос в функцию onSubmit
    setSearch(''); // reset
  };

  return (
    <div className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <input
          className={css.SearchFormInput}
          name="search"
          value={search}
          onChange={handleChange}
          type="text"
          autoComplete="on"
          autoFocus
        />
        <button type="submit" className={css.SearchFormButton}>
          Search
        </button>
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
