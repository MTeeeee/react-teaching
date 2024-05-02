import Card from "./Card/Card";
import hotelList from "../hotelList";

function createCard(hotel) {
  return (
    <Card title={hotel.title} img={hotel.img} description={hotel.description} />
  );
}

function List() {
  return <div>{hotelList.map(createCard)}</div>;
}

export default List;
