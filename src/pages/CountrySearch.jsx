import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) return;
    setIsLoading(true);
    fetchByRegion(region)
      .then(data => setCountries(data))
      .catch(error => setIsError(error.message))
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const handleSubmit = region => {
    setSearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm handleSubmit={handleSubmit} />
        <CountryList countries={countries} />
        {isLoading && <Loader />}
        {isError && <Heading>{isError}</Heading>}
      </Container>
    </Section>
  );
};
