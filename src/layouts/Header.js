import React, { useState } from "react";
import bannerImage from "../static/images/home/banner-image.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <>
      <header>
        <div className="banner-header">
          <img src={bannerImage} alt="" />
          <div className="content">
            <Link to="/" className="site-title">
              My Kitchies - Bếp Á Âu
            </Link>
            <p className="site-description">
              Nơi tổng hợp và chia sẻ công thức nấu ăn ngon cho mọi người
            </p>
          </div>
        </div>
        <div className={toggleSearch ? "search-box active" : "search-box"}>
          <form>
            <input type="text" placeholder="Search..." />
          </form>
        </div>
      </header>
      <section className="navigation">
        <div className="icon-box">
          <div className="nav-icon">
            <p onClick={() => setToggleNav(!toggleNav)}>
              <i className="fas fa-bars"></i>Menu
            </p>
          </div>
          <div className="search-icon">
            <i
              className="fas fa-search"
              onClick={() => setToggleSearch(!toggleSearch)}
            ></i>
          </div>
        </div>
        <ul className={toggleNav ? "active" : ""}>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li className="slash">/</li>
          <li>
            <Link to="/">Các món á</Link>
          </li>
          <li className="slash">/</li>
          <li>
            <Link to="/">Các món âu</Link>
          </li>
          <li className="slash">/</li>
          <li>
            <Link to="/">Mục ăn vặt</Link>
          </li>
          <li className="slash">/</li>
          <li>
            <Link to="/">Đồ uống</Link>
          </li>
          <li className="slash">/</li>
          <li>
            <Link to="/">Món ăn nhanh</Link>
          </li>
          <li className="slash">/</li>
          <li>
            <Link to="/">Món ăn với nồi chiên không dầu</Link>
          </li>
          <li className="slash">/</li>
          <li>
            <Link to="/">Các loại gia vị</Link>
          </li>
          <li className="slash">/</li>
          <li>
            <Link to="/">Món chay</Link>
          </li>
          <li className="slash">/</li>
          <li>
            <Link to="/">About me</Link>
          </li>
          <li className="search-icon">
            <i
              className="fas fa-search"
              onClick={() => setToggleSearch(!toggleSearch)}
            ></i>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Header;
