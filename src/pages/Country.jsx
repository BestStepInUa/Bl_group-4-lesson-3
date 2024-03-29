import { Section, Container, CountryInfo, Loader, Heading } from 'components';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const location = useLocation();
  const goBackLocationRef = useRef(location.state?.from || '/');
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchCountry(countryId)
      .then(data => setCountry(data))
      .catch(error => setIsError(error.message))
      .finally(() => setIsLoading(false));
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLocationRef.current} />
        {country && <CountryInfo {...country} />}
        {isLoading && <Loader />}
        {isError && <Heading>{isError}</Heading>}
      </Container>
    </Section>
  );
};
