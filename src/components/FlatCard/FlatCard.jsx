import TileCard from "./TileCard/TileCard";
import ListCard from "./ListCard/ListCard";

const FlatCard = ({ flat, view }) => {
  if (view === "tile") {
    return <TileCard flat={flat} />;
  }
  if (view === "list") {
    return <ListCard flat={flat} />;
  }
};
export default FlatCard;
