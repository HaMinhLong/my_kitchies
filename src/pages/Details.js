import React from "react";
import kimChi from "../static/images/articles/kim_chi.jpg";
import goiCuon from "../static/images/articles/goi_cuon.jpg";
import dauPhu from "../static/images/articles/dau_phu.jpg";
import { Row, Col } from "antd";

const Details = () => {
  return (
    <section className="details-page">
      <div className="article-details">
        <div className="details">
          <p className="title-article">Kim chi củ cải</p>
          <div className="image-box">
            <div className="icon"></div>
            <img src={kimChi} alt="" />
          </div>
          <div className="descriptions"></div>
          <Row gutter={[24, 24]} className="related-articles">
            <Col xs={24} md={8} lg={8} xl={8}>
              <a href="/details" className="image-box">
                <img src={kimChi} alt="" />
              </a>
              <div className="content">
                <a href="/details" className="article-title">
                  Kim chi Hàn Quốc
                </a>
                <p className="date">25, July 2021</p>
              </div>
            </Col>
            <Col xs={24} md={8} lg={8} xl={8}>
              <a href="/details" className="image-box">
                <img src={goiCuon} alt="" />
              </a>
              <div className="content">
                <a href="/details" className="article-title">
                  Gỏi cuốn
                </a>
                <p className="date">25, July 2021</p>
              </div>
            </Col>
            <Col xs={24} md={8} lg={8} xl={8}>
              <a href="/details" className="image-box">
                <img src={dauPhu} alt="" />
              </a>
              <div className="content">
                <a href="/details" className="article-title">
                  Đậu phụ
                </a>
                <p className="date">25, July 2021</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="right-side">
          <p className="title-details">tìm kiếm bài viết</p>
          <form>
            <input type="text" placeholder="Nhập từ khóa tìm kiếm" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div className="divider"></div>
          <p className="title-details">bài viết gần đây</p>
          <ul className="recent-articles">
            <li>
              <a href="/details">
                <i className="fas fa-angle-double-right"></i>Cách làm trà bí đao
              </a>
              <span>25, July 2021</span>
            </li>
            <li>
              <a href="/details">
                <i className="fas fa-angle-double-right"></i>Kim chi củ cải
              </a>
              <span>25, July 2021</span>
            </li>
            <li>
              <a href="/details">
                <i className="fas fa-angle-double-right"></i>Gỏi cuốn thịt gà
                nướng chấm mắm me
              </a>
              <span>25, July 2021</span>
            </li>
            <li>
              <a href="/details">
                <i className="fas fa-angle-double-right"></i>Thịt bò khô phiên
                bản nhà làm
              </a>
              <span>25, July 2021</span>
            </li>
          </ul>
          <div className="divider"></div>
          <div className="title-details">Công thức</div>
          <ul className="categories-list">
            <li>
              <a href="/">
                <i className="fas fa-angle-double-right"></i>Các món Á
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-angle-double-right"></i>Các món Âu
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-angle-double-right"></i>Mục ăn vặt
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-angle-double-right"></i>Đồ uống
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-angle-double-right"></i>Món nấu nhanh
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-angle-double-right"></i>Món ăn với nồi
                chiên không dầu
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-angle-double-right"></i>Các loại gia vị
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-angle-double-right"></i>Món chay
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Details;
