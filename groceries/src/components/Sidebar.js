import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { IconContext } from "react-icons";
import axios from "axios";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetchedData();
  }, []);
  const fetchedData = async () => {
    await axios
      .get("http://localhost:8080/category/all")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
         <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {Data.map((item, i) => {
              return (
                <li key={i} className="nav-text">
                 
                  <Link to={`viewProductByCategory/${item.categoryName}`}>{item.categoryName}</Link>
                </li>
              );
            })}
          </ul>

        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
