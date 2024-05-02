import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";

let user = "Tony";

let style = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  fontSize: "10px",
};

// const currentTime = new Date().getHours();
const currentTime = 20;
let greeting = "";

if (currentTime <= 12) {
  style.color = "red";
  greeting = "Guten Morgen";
} else if (currentTime < 18) {
  style.color = "green";
  greeting = "Guten Tag";
} else {
  style.color = "blue";
  greeting = "Gute Nacht";
}

let number = 18;

// console.log(trueOrFalse());

// function trueOrFalse() {
//   if (userLoggedIn == true) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// console.log(userLoggedIn ? "is logged in" : "is not logged in");

let userLoggedIn = false;

function Header() {
  return <header>
    {userLoggedIn ? <LoggedIn /> : <NotLoggedIn />}
    </header>;
}

{
  /* <header style={style}>
<h1>
  {greeting} {user}!
</h1>
</header> */
}

export default Header;
