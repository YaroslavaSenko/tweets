
import { NavArea, NavUl, NavLI, NavLink } from './Navigation.styled';


export const Navigation = () => {
 
  
    return (
      <NavArea>
        <NavUl>
          <NavLI>
            <NavLink to="/">Home</NavLink>
          </NavLI>
          
            <NavLI>
              <NavLink to="/tweets">Tweets</NavLink>
            </NavLI>
          
        </NavUl>
      </NavArea>
    );
  };