import TileCard from "./TileCard/TileCard";
import ListCard from "./ListCard/ListCard";
import HomeFlatCard from "./HomeFlatCard/HomeFlatCard";

const FlatCard = ({ flat, view, page }) => {
  if (page === "home") {
    return <HomeFlatCard flat={flat} />;
  }
  if (page === "flats") {
    if (view === "tile") {
      return <TileCard flat={flat} />;
    }
    if (view === "list") {
      return <ListCard flat={flat} />;
    }
  }
};
export default FlatCard;
