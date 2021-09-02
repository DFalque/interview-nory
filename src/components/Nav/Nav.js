import "./Nav.scss";

import { CalendarIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveLink } from "../../redux/actions/navAction";

const Nav = () => {
  const stateNav = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  const handleActive = (icon) => {
    dispatch(changeActiveLink(icon));
  };

  return (
    <div className="Nav">
      <CalendarIcon
        w={10}
        h={10}
        onClick={() => handleActive("firstIcon")}
        className={`Nav--icon ${stateNav["firstIcon"]}`}
      />
      <CalendarIcon
        w={10}
        h={10}
        onClick={() => handleActive("secondIcon")}
        className={`Nav--icon ${stateNav["secondIcon"]}`}
      />
      <CalendarIcon
        w={10}
        h={10}
        onClick={() => handleActive("thirdIcon")}
        className={`Nav--icon ${stateNav["thirdIcon"]}`}
      />
      <CalendarIcon
        w={10}
        h={10}
        onClick={() => handleActive("fourthIcon")}
        className={`Nav--icon ${stateNav["fourthIcon"]}`}
      />
    </div>
  );
};

export default Nav;
