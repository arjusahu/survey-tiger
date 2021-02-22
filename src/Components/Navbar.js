import { Navbar, Button, Form, FormControl, Nav } from "react-bootstrap";
import images from "../images/foot.jpg";
let NavbarCom = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">survey-tiger</Navbar.Brand>
      </Navbar>
      <div className="heading">
        <img src={images} />
        <h1>Survey-Tiger</h1>
      </div>
    </>
  );
};
export default NavbarCom;
