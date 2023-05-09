

import { Container } from './Layout.styled';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
      <Container>
        <header>
            <nav>
                <NavLink to='/'>
<h2>Home</h2>
                </NavLink>
                <NavLink to='/tweets'>
 <h2>Tweets</h2>
                </NavLink>
            </nav>
            </header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        
      </Container>
    );
  };