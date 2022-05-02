import { Nav, NavLink, NavMenu } from "./navbarelements";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/query1" activeStyle>
            Query 1
          </NavLink>
          <NavLink to="/query2" activeStyle>
            Query 2
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
    
export default Navbar;