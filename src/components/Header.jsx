import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <Link to="/">
          <img width={40} height={40} src="/img/logo.svg" alt="img" />
        </Link>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">The best sneakers shop</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/card1.svg" alt="img" />
          <span>1205 $</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites">
            <img width={20} height={18} src="/img/Favorites.png" alt="favorites" />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/card2.svg" alt="card2" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
