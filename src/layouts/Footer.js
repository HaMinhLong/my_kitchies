import React from "react";

import article1 from "../static/images/articles/articles_1.jpg";
import dauPhu from "../static/images/articles/dau_phu.jpg";
import goiCuon from "../static/images/articles/goi_cuon.jpg";
import kimChi from "../static/images/articles/kim_chi.jpg";
import mongGio from "../static/images/articles/mong_gio.jpg";
import thitKho from "../static/images/articles/thit_kho.jpg";
import author from "../static/images/home/author.jpeg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="categories-box">
          <p className="footer-title">Theo dõi blog qua email</p>
          <span>
            Nhập địa chỉ email của bạn để theo dõi blog này và nhận thông báo về
            các bài viết mới qua email.
          </span>
          <form>
            <input type="text" placeholder="Nhập địa chỉ email của bạn" />
            <button>follow</button>
          </form>
          <div className="divider"></div>
          <p className="footer-title">Chọn chuyên mục</p>
          <ul>
            <li>
              <a href="/">Các món á</a>
            </li>
            <li>
              <a href="/">Các món âu</a>
            </li>
            <li>
              <a href="/">Mục ăn vặt</a>
            </li>
            <li>
              <a href="/">Đồ uống</a>
            </li>
            <li>
              <a href="/">Món ăn nhanh</a>
            </li>
            <li>
              <a href="/">Món ăn với nồi chiên không dầu</a>
            </li>
            <li>
              <a href="/">Các loại gia vị</a>
            </li>
          </ul>
        </div>
        <div className="articles-box">
          <p className="footer-title">Những bài viết có lượng xem nhiều nhất</p>
          <div className="articles">
            <img src={article1} alt="" />
            <img src={mongGio} alt="" />
            <img src={dauPhu} alt="" />
            <img src={goiCuon} alt="" />
            <img src={kimChi} alt="" />
            <img src={thitKho} alt="" />
          </div>
        </div>
        <div className="author-box">
          <p className="footer-title">Tác giả</p>
          <div className="author">
            <div className="circle">
              <img src={author} alt="" />
            </div>
            <div className="content">
              <p>
                Mình là Thủy - một người thích nấu ăn, trồng cây, nuôi đủ thứ
                (không nuôi người), chơi games, ăn vặt và ngủ.
                <br />
                Hiện mình đang làm việc và học tập tại Munich, Đức. Chào mừng
                bạn đến với blog của mình. Blog là cuốn sổ tay lưu giữ công thức
                những món mình thích ăn hoặc thích tìm hiểu. Quan niệm của mình
                là "Learning by doing": có học nấu ăn mới học hỏi được nhiều
                kinh nghiệm bếp núc hay ho. Mình không phải đầu bếp, chỉ là
                người lấy ăn uống làm đam mê và tò mò về ẩm thực bốn phương. Với
                mình, linh hồn món ăn không nằm ở công thức, mà nằm ở người nấu.
                Mình hi vọng các bạn có thể tìm thấy ý tưởng cũng như niềm vui
                bếp khi ghé qua góc blog nhỏ của mình.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
