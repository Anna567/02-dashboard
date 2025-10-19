import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

type MenuLink = {
  id: number;
  title: string;
  url: string;
  icon: string;
};


const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {/* any - misuse */}
          {item.listItems.map((listItem:any) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
