import React from 'react';
import { Link } from 'react-router-dom';

// import MyLogo from '../../images/logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, TMDBLogoImg, HTag } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
          <Link to='/' style={{ textDecoration: 'none' }}>
            {/* <LogoImg src={MyLogo} alt='my-logo' /> */}
            <HTag>Richard KM MovieDB</HTag>
          </Link>
          

          <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;
