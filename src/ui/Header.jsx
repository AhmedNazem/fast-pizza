import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to={"/"}>Fast Pizza SN</Link>
      <SearchOrder />
      <p>Ahmed</p>
    </header>
  );
}

export default Header;
