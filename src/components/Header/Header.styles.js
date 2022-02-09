import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;

export const LogoImg = styled.img`
    width: 100px;
    height: 50px;

    @media screen and (max-width: 500px) {
        width: 50px;
        height: 25px;
    }
`;

export const HTag = styled.h3`
    font-size: var(--fontMed);
    color: #fff;
`;

export const TMDBLogoImg = styled.img`
    width: 100px;
    
    @media screen and (max-width: 500px) {
        width: 80px;
    }
`;