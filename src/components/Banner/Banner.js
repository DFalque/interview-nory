import "./Banner.scss";
import { CloseIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { closeBanner } from "../../redux/actions/bannerAction";

const Banner = () => {
  const dispatch = useDispatch();

  const handlerBanner = () => {
    dispatch(closeBanner());
  };

  return (
    <div className="Banner">
      <p className="paragraph--bold--white">
        Lower the labour spend for days and departments marked with an icon, or
        create a new optimal schedule.
      </p>
      <CloseIcon
        color="white"
        className="Banner--close"
        onClick={() => handlerBanner()}
      />
    </div>
  );
};

export default Banner;
