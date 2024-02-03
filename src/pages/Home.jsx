import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getCountries()
      .then(data => setCountries(data))
      .catch(error => setIsError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
        {isLoading && <Loader />}
        {isError && <Heading>{isError}</Heading>}
      </Container>
    </Section>
  );
};
