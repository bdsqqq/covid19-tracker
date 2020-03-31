import React from 'react';
import styled from 'styled-components'
import { device } from '../device'

import Main from './Main'
import Card from './Card'

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  
  padding: 0;
  margin: 5rem auto;
  max-width: 90%;

  @media ${device.laptop}{
    flex-direction: row;
    align-items: stretch;
  }
`

function Body(props) {
    const jsonData = props.jsonData;

    if (jsonData === null) {
      return(
        <>
          <BodyWrapper>
            <Card jsonData={{
              "data" : {
                "recovered" : "---"
              },
              "dt" : "---"
            }}/>
            <Main data={{
              "data" : {
                "recovered" : "---"
              }
            }}/>
          </BodyWrapper>
        </>
      );
    } else{
        return(
          <BodyWrapper>
            <Card jsonData={jsonData}/>
            <Main data={jsonData.data}/>
          </BodyWrapper>
        );
      }
    
}

export default Body;
