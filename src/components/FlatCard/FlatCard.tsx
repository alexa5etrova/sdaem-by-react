import TileCard from "./TileCard/TileCard";
import ListCard from "./ListCard/ListCard";
import HomeFlatCard from "./HomeFlatCard/HomeFlatCard";
import { FlatCardProps } from "./FlatCard.prop";

const FlatCard = ({ flat, view, page }: FlatCardProps): JSX.Element => {
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
  return <></>;
};
export default FlatCard;
