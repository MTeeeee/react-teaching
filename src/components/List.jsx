import Card from "./Card/Card";
import hotelList from "../hotelList";
import styles from "./List.module.css";

function createCard(hotel, i) {
  // der Parameter hotel ist wie eine Variable, welche Werte von der map() funktion bekommt.
  // man kann es sich so vorstellen wie:
  // const hotel =   {
  //   title: "Hotel",
  //   img: "https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg",
  //   description: "so nice",
  // }
  return (
    // die Werte aus hotel müssen nun an die Component Card weitergeben werden.
    <Card
      key={hotel.id}
      title={hotel.title}
      img={hotel.img}
      description={hotel.description}
    />
  );
}

// hier beginnt die functional Component. Erster Buchstabe bitte groß.
function List() {
  return <div id="list">{hotelList.map(createCard)}</div>;
}

// .map() ist ein Befehl aus Javascript
// für Arrays
// erzeugt ein neues Array
// geht jeden Eintrag einzeiln durch und kann Ihn beim übertragen verändern

export default List;
