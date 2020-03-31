import React from 'react';
import styled from 'styled-components'
import { device } from '../device'

import doctors from '../media/doctors.svg'

const Doctors = styled.img`
    width: 80%;

    margin-top: -15%;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    margin: 0 auto;
    width: 100%;
`
const TextWrapper = styled.div`
    width: 100%;

    @media ${device.laptop}{
        width: 80%;
    }
`
const Text = styled.p`
    width: 100%;
    font-size: 1em;
    text-align: justify;
`
const Bold = styled.span`
    font-weight: 700;
`

function Main(props){
    return(
        <>
            <Wrapper>
                <Doctors src={doctors} alt=""/>
                <TextWrapper>
                    <h1>Obrigado!</h1>
                    <Text> Graças à sua colaboração e ao trabalho duro de profissionais de diversas áreas <Bold>{props.data.recovered}</Bold> vidas foram salvas.<br/> Juntos nós podemos vencer esse virus, <a target="blank" href="https://coronavirus.saude.gov.br/">descubra como ajudar...</a></Text>
                </TextWrapper>
            </Wrapper>
        </>
    );
}

export default Main