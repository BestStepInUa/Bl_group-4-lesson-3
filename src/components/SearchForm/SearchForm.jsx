import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ handleSubmit }) => {
  const [region, setRegion] = useState('');

  const handleSelectChange = evt => {
    setRegion(evt.target.value);
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    if (!region) {
      alert('Select any region');
      return;
    }
    handleSubmit(region);
  };
  return (
    <SearchFormStyled onSubmit={handleFormSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        name="region"
        required
        onChange={handleSelectChange}
        defaultValue="default"
      >
        <option disabled value="default">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
