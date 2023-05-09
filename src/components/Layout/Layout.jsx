

import { Container, Navigation, Text} from './Layout.styled';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
      <Container>
        <header>
            <Navigation>
                <NavLink to='/'>
<Text>Home</Text>
                </NavLink>
                <NavLink to='/tweets'>
 <Text>Tweets</Text>
                </NavLink>
            </Navigation>
            </header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        
      </Container>
    );
  };