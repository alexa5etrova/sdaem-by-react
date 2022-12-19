import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { ROOMS } from "data/flats";
import LinkTag from "components/LinkTag/LinkTag";
import Button from "components/Button/Button";
import { ReactComponent as CrossIcon } from "./cross.svg";

import styles from "./Reccomend.module.scss";

const Reccomend = ({ city, districts }) => {
  const [choosenRoomSize, setChoosenRoomSize] = useState("");
  const [choosenDistrict, setChoosenDistrict] = useState("");
  const [nonExpensive, setNonExpensive] = useState(false);
  const [searchSymbol, setSearchSymbol] = useState("&");

  const url = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    url.search === "" ? setSearchSymbol("?") : setSearchSymbol("&");
    setChoosenRoomSize(ROOMS.find((item) => url.search.includes(`rooms=${item.value}`)));
    setChoosenDistrict(
      districts.find((item) => url.search.includes(`district=${encodeURI(item.name)}`))
    );
    setNonExpensive(url.search.includes(`price_lte=100`));
  }, [url, districts]);

  const districtCloseHandler = () => {
    let newUrl =
      url.pathname + url.search.replace(`&district=${encodeURI(choosenDistrict.name)}`, "");
    navigate(newUrl);
  };

  const roomSizeCloseHandler = () => {
    console.log(choosenRoomSize.value);
    let newUrl = url.pathname + url.search.replace(`rooms=${choosenRoomSize.value}`, "");
    navigate(newUrl);
  };

  const nonExpensiveCloseHandler = () => {
    let newUrl = url.pathname + url.search.replace(`price_lte=100`, "");
    navigate(newUrl);
  };

  return (
    <div>
      <p className={styles.text}>Рекомендуем посмотреть:</p>
      <ul className={styles.linkList}>
        {!nonExpensive ? (
          <li>
            <LinkTag
              linkStyle="reccomend"
              to={`${url.pathname + url.search + searchSymbol}price_lte=100`}
            >
              Недорогие
            </LinkTag>
          </li>
        ) : (
          <li>
            <Button btnStyle="switchOff" onClick={() => nonExpensiveCloseHandler()}>
              Недорогие
              <CrossIcon height="10" width="10" className={styles.cross} />
            </Button>
          </li>
        )}

        {!choosenRoomSize ? (
          ROOMS.map((item) => (
            <li key={item.id}>
              <LinkTag
                linkStyle="reccomend"
                to={`${url.pathname + url.search + searchSymbol}rooms=${item.value}`}
              >
                {item.value + "-комнатные"}
              </LinkTag>
            </li>
          ))
        ) : (
          <li>
            <Button btnStyle="switchOff" onClick={() => roomSizeCloseHandler()}>
              {choosenRoomSize.value + "-комнатные"}
              <CrossIcon height="10" width="10" className={styles.cross} />
            </Button>
          </li>
        )}
        {!choosenDistrict ? (
          districts.map((item) => (
            <li>
              <LinkTag
                linkStyle="reccomend"
                to={`${url.pathname + url.search + searchSymbol}district=${item.name}`}
              >
                {item.name}
              </LinkTag>
            </li>
          ))
        ) : (
          <li>
            <Button btnStyle="switchOff" onClick={() => districtCloseHandler()}>
              {choosenDistrict.name}
              <CrossIcon height="10" width="10" className={styles.cross} />
            </Button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Reccomend;
