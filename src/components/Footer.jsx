import React from 'react';
import styled from 'styled-components'

const FooterWrapper = styled.div`
    position: relative;
    height: auto;
    margin: 5vh auto;
    width: 80%;
    color: rgba(0, 0, 0, .8);
    font-size: .8em;

    text-align: center;
`
function Footer(){

    return(
        <FooterWrapper>
            <p>Feito com <span role="img" aria-label="amor">♥</span> por <a target="blank" href="https://github.com/bdsqqq">@igorbedesqui</a>, atribuições podem ser encontradas <a target="blank" href="https://github.com/bdsqqq/covid19-tracker">no repositorio </a></p>
        </FooterWrapper>
    );
}

export default Footer
