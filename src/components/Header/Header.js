import "./Header.scss";
import { Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <div className="header">
      <h1 className="heading-primary--main">Schedule</h1>
      <Button colorScheme="purple">Create</Button>
    </div>
  );
};

export default Header;
