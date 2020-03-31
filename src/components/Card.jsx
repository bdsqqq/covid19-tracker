import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em;
    height: 24rem;
    max-width: 18.75rem;

    background-image: linear-gradient(to top, #a6c1ee66 0%, #fbc2eb66 100%);
    border-radius: 24px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.17);

    text-align: center;
`
const Title = styled.span`
    font-size: 6em;
    font-weight: 700;
`
const Text = styled.span`
    font-size: 2em;
    font-weight: 400;
`
const Footer = styled.span`
    font-size: 1em;
`
function Card(props){

    return(
        <Wrapper>
            <div>
                <Title>{props.jsonData.data.recovered}</Title><br/>
                <Text>Pacientes recuperados no Brasil</Text>
            </div>
            <Footer>Atualizado em: {props.jsonData.dt}</Footer>
        </Wrapper>
    );
}

export default Card