import React, { useState } from 'react';
import styled from 'styled-components'
import useInterval from './useInterval'
import { device } from './device'

import Body from './components/Body'
import Footer from './components/Footer'

const BodyWrapper = styled.div`
  margin: 0 auto;
  height: auto;

  @media ${device.laptop}{
    max-width: 90%;
  }
`
const Wrapper = styled.div`
  padding: 2rem;
  margin: 0;
`
const Header = styled.div`
  text-transform: uppercase;
`
const Title = styled.span`
  font-size: 2em;
  font-weight: 400;

  @media ${device.tablet}{
    font-size: 2.5em;
  }
`
const Line = styled.hr`
  margin: 0;
  border: none;
  width:50%;
  height:.5em;
  background-image: linear-gradient(to left, #a6c1ee66 0%, #fbc2eb66 100%);
`
const SubTitle = styled.div`
  margin: 1rem 0;
  max-width: 90%;
  font-size: 1.5em;

  @media ${device.tablet}{
    margin: 2rem auto;
  }
`

function App() {
  const nada = () => {};
  const [jsonData, setJsonData] = useState(null);
  const [delay, setDelay] = useState(0);

  async function fetchData() {
    ((delay === 0) ? setDelay(1000*1000) : nada() )
    const api_url = 'https://bdsq-rest-api.herokuapp.com/coronga/getcoronga'

    const response = await fetch(api_url);
    const jsonData = await response.json();
    console.log(jsonData);
    setJsonData(jsonData);
  };

  useInterval(() => {
    fetchData();
  }, delay);

  return (
    <BodyWrapper>
      <Wrapper>
        <Header>
          <Title>pacientes recuperados do Covid-19</Title>
        </Header>
        <Line/>
        <SubTitle>
          Durante essa pandemia, é comum olhar para todo lado e se deparar com um número de infectados ou mortos, mas você já parou pra pensar em quantas pessoas se recuperaram?
        </SubTitle>
        <Body jsonData={jsonData}/>
      </Wrapper>
      <Footer/>
    </BodyWrapper>
  );
}

export default App;
