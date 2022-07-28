import FlatCard from "../FlatCard/FlatCard";

const Carousel = ({ flats }) => {
  return (
    <>
      {flats.slice(0, 3).map((item) => (
        <FlatCard key={item.id} flat={item} />
      ))}
    </>
  );
};

export default Carousel;
