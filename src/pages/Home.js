import React from "react";
import article1 from "../static/images/articles/articles_1.jpg";
import dauPhu from "../static/images/articles/dau_phu.jpg";
import goiCuon from "../static/images/articles/goi_cuon.jpg";
import kimChi from "../static/images/articles/kim_chi.jpg";
import mongGio from "../static/images/articles/mong_gio.jpg";
import nemRan from "../static/images/articles/nem_ran.jpg";
import thitKho from "../static/images/articles/thit_kho.jpg";

const Home = () => {
  return (
    <>
      <section className="main-page">
        <div className="articles-container">
          <div className="article two">
            <div className="article-header">
              <a href="/details" className="article-title">
                Cách làm trà bí đao
              </a>
            </div>
            <a href="/" className="image-box">
              <div className="icon-image"></div>
              <img src={article1} alt="" />
            </a>
            <p className="article-description">
              Hè nóng nên mình thèm được một cốc nước gì đó mát lạnh mà phải là
              hàng tự làm cơ. Mình thích tự làm các loại đồ uống ví dụ như trà
              bưởi mật ong, nước mơ chua,....lần này là trà bí đao. Sau khi đóng
              hũ cất tủ lạnh thì mình có trà uống trong vài tuần 😀 thực ra nấu
              trà bí đao vô cùng đơn giản, bạn cần 2 loại nguyên liệu chính đó
              là bí đao và đường nâu. Trà bí đao có công dụng thanh nhiệt, làm
              mát ruột, giảm nhiệt, giải độc, giảm mỡ tích tụ trong cơ thể và
              lợi tiểu.
            </p>
            <div className="date-box">
              <i className="far fa-clock"></i>
              <p className="date">25, June 2021</p>
              <i className="fas fa-comments"></i>
              <p>1</p>
            </div>
          </div>

          <div className="article six">
            <div className="article-header">
              <a href="/" className="article-title">
                Thịt bò khô phiên bản nhà làm
              </a>
            </div>
            <a href="/" className="image-box">
              <div className="icon-image"></div>
              <img src={thitKho} alt="" />
            </a>
            <p className="article-description">
              Sau lần làm khô heo giả bò thành công, mình lại mày mò chỉnh sửa
              từ công thức đó thành công thức bò khô, chính thức giã từ món khô
              heo giả bò luộc luộc xé xé đến ám ảnh, nhất là khi mua phải thịt
              cũ bị bở không xé nổi (mình ở nước ngoài chỉ mua được thịt ở siêu
              thị nên khá là hên xui). Sau mấy mẻ thịt bò bị hỏng thì mình cũng
              đã đúc kết được chút ít kinh nghiệm quý báu để có thể hoàn thiện
              được công thức làm bò khô. Lần này hương vị khá là vừa miệng mình,
              cũng hao hao vị bò khô người ta bán trong gói, đậm đà có vị ngọt
              cay và mặn hậu đủ cả. Tuy nhiên trong mắt mình đây vẫn chỉ là
              phiên bản nhà làm vì mình cũng không thích phóng đại quá là "ngon
              như ngoài hàng" vì công thức kinh doanh mấy ai chia sẻ đâu nhở 😆
              mặc dù vậy nhưng thành phẩm của mình cũng được kha khá phản hồi
              tích cực của bạn bè, những người "xấu số" phải làm chuột bạch cho
              mình.
            </p>
            <div className="date-box">
              <i className="far fa-clock"></i>
              <p className="date">25, June 2021</p>
              <i className="fas fa-comments"></i>
              <p>1</p>
            </div>
          </div>

          <div className="article six">
            <div className="article-header">
              <a href="/" className="article-title">
                Nem rán Loh Bak – chả giò Triều Châu
              </a>
            </div>
            <a href="/" className="image-box">
              <div className="icon-image"></div>
              <img src={nemRan} alt="" />
            </a>
            <p className="article-description">
              Loh Bak hay Ngo hiang là món nem rán nổi tiếng có xuất xứ từ người
              Triều Châu và Phúc Kiến, nay đã du nhập sang ẩm thực các nước như
              Singapore, Indonesia, Malaysia, Philippin và Thái Lan. Loh Bak có
              thể được tìm thấy ở những quán hàng ăn trên đường phố dưới dạng
              món snack ăn chơi, ngoài ra vào dịp lễ Tết đến thì người dân
              thường làm tại nhà. Đặc trưng của Loh Bak là nhân có ngũ vị hương,
              vỏ được làm từ đậu hũ ky (váng đậu). Riêng nhân thì khá đa dạng,
              chủ yếu là thịt lợn, ngoài ra có thêm tôm và củ năng (kiểu của
              Triều Châu) hoặc hành tây và củ đậu (kiểu Phúc Kiến). Sắp tới Tết
              Âm lịch rồi, bạn nào muốn làm món gì đó lạ lạ thì nên thử món này
              xem sao nha!
            </p>
            <div className="date-box">
              <i className="far fa-clock"></i>
              <p className="date">25, June 2021</p>
              <i className="fas fa-comments"></i>
              <p>1</p>
            </div>
          </div>

          <div className="article one">
            <div className="article-header">
              <a href="/" className="article-title">
                Kimchi củ cải – Kkakdugi kimchi
              </a>
            </div>
            <a href="/" className="image-box">
              <div className="icon-image"></div>
              <img src={kimChi} alt="" />
            </a>
            <p className="article-description">
              Bữa trước váy áo xúng xính đi chợ châu Á thì tia được ngay củ cải
              siêu to khổng lồ cỡ 2kg với giá hạt dẻ. Làm 1kg củ cải 2 ngày sau
              chưa kịp chua hẳn thì bạn mình mỗi đứa thó ăn với xin về hết sạch
              vì nó quá là thơm và đưa mồm. Kimchi củ cải có vị ngọt nhẹ, giòn
              và thơm mùi ớt Gochugaru, là món ăn kèm rất hợp với một số món súp
              hầm của Hàn. Một số củ cải có thể có vị đắng nhẹ, nếu đắng các bạn
              có thể cho thêm đường để nó dịu hơn. Theo mình được biết thì muối
              kimchi củ cải cũng gần giống kimchi cải thảo, là bạn có thể cho
              thêm hải sản tươi hoặc hải sản muối vào để tăng hương vị đậm đà
              lên cho món ăn. Thông dụng nhất là tép moi muối Saeujeot 새우젓.
              Tuy nhiên không phải ai cũng tìm mua được, các bạn có thể bỏ qua
              hoặc dùng tôm tươi.
            </p>
            <div className="date-box">
              <i className="far fa-clock"></i>
              <p className="date">25, June 2021</p>
              <i className="fas fa-comments"></i>
              <p>1</p>
            </div>
          </div>

          <div className="article six">
            <div className="article-header">
              <a href="/" className="article-title">
                Dubu Jorim 두부조림 – đậu phụ sốt xì dầu kiểu Hàn
              </a>
            </div>
            <a href="/" className="image-box">
              <div className="icon-image"></div>
              <img src={dauPhu} alt="" />
            </a>
            <p className="article-description">
              Món đậu phụ sốt xì dầu này có thể ăn nóng hay nguội tùy thích, là
              món ăn kèm cơm, thường xuất hiện trong hộp cơm trưa mang đi học
              của tụi trẻ con ở Hàn, nên mình nghĩ nếu bạn nào làm cơm hộp văn
              phòng hoặc chuẩn bị cho con cái có thể tham khảo món Dubu Jorrim
              này. Nhìn vậy chứ không cay đâu nha 😀 Các bạn ở nước ngoài cũng
              có thể trổ tài món này vì nó không hôi như sử dụng nước mắm và
              cũng là món chay nè.
            </p>
            <div className="date-box">
              <i className="far fa-clock"></i>
              <p className="date">25, June 2021</p>
              <i className="fas fa-comments"></i>
              <p>1</p>
            </div>
          </div>

          <div className="article five">
            <div className="article-header">
              <a href="/" className="article-title">
                Gỏi cuốn thịt gà nướng chấm mắm me
              </a>
            </div>
            <a href="/" className="image-box">
              <div className="icon-image"></div>
              <img src={goiCuon} alt="" />
            </a>
            <p className="article-description">
              Hôm trước lang thang trên Insta gặp quả ảnh bạn tây nào đó up món
              gỏi cuốn thịt heo quay chấm sốt lạc, mình nghĩ ngay tới đống thịt
              đùi gà đã được lóc xương sẵn trong tủ lạnh. Tại sao mình lại không
              sáng tạo một lần nhỉ 😀 Món gà nướng được ướp...
            </p>
            <div className="date-box">
              <i className="far fa-clock"></i>
              <p className="date">25, June 2021</p>
              <i className="fas fa-comments"></i>
              <p>1</p>
            </div>
          </div>

          <div className="article six">
            <div className="article-header">
              <a href="/" className="article-title">
                Móng giò hầm lạc và chao đỏ
              </a>
            </div>
            <a href="/" className="image-box">
              <div className="icon-image"></div>
              <img src={mongGio} alt="" />
            </a>
            <p className="article-description">
              Cuối tuần vừa rồi mình gom đơn bán bún bò Huế, công cuộc bán bún
              bò Huế diễn ra khá suôn sẻ và mình khá là hài lòng. Mình có lỡ đặt
              hơi nhìu móng giò vậy là mình lấy ra một ít để nấu món móng giò
              hầm với chao đỏ cùng lạc để đổi món. Đây là món ăn theo mình biết
              là khá phổ biến ở Hongkong vì thấy các clip mình xem trên mạng
              người ta nói giọng Quảng Đông và có đề cập tới các địa điểm ở
              Hongkong. Nói chung là để nấu món này bạn cần có chao đỏ, chao đỏ
              giúp cho món ăn dậy mùi thơm đặc trưng của đậu phụ lên men và mùi
              rượu thoang thoảng. Đây là món ăn khá bổ dưỡng có thể kết hợp ăn
              vã, ăn cùng cơm hoặc trộn với mì trứng nên các bạn có thể thử làm
              xem sao nhé!
            </p>
            <div className="date-box">
              <i className="far fa-clock"></i>
              <p className="date">25, June 2021</p>
              <i className="fas fa-comments"></i>
              <p>1</p>
            </div>
          </div>

          <div className="article five">
            <div className="article-header">
              <a href="/" className="article-title">
                Gỏi cuốn thịt gà nướng chấm mắm me
              </a>
            </div>
            <a href="/" className="image-box">
              <div className="icon-image"></div>
              <img src={goiCuon} alt="" />
            </a>
            <p className="article-description">
              Hôm trước lang thang trên Insta gặp quả ảnh bạn tây nào đó up món
              gỏi cuốn thịt heo quay chấm sốt lạc, mình nghĩ ngay tới đống thịt
              đùi gà đã được lóc xương sẵn trong tủ lạnh. Tại sao mình lại không
              sáng tạo một lần nhỉ 😀 Món gà nướng được ướp...
            </p>
            <div className="date-box">
              <i className="far fa-clock"></i>
              <p className="date">25, June 2021</p>
              <i className="fas fa-comments"></i>
              <p>1</p>
            </div>
          </div>
          <div className="article six">
            <div className="article-header">
              <a href="/" className="article-title">
                Nem rán Loh Bak – chả giò Triều Châu
              </a>
            </div>
            <a href="/" className="image-box">
              <div className="icon-image"></div>
              <img src={nemRan} alt="" />
            </a>
            <p className="article-description">
              Loh Bak hay Ngo hiang là món nem rán nổi tiếng có xuất xứ từ người
              Triều Châu và Phúc Kiến, nay đã du nhập sang ẩm thực các nước như
              Singapore, Indonesia, Malaysia, Philippin và Thái Lan. Loh Bak có
              thể được tìm thấy ở những quán hàng ăn trên đường phố dưới dạng
              món snack ăn chơi, ngoài ra vào dịp lễ Tết đến thì người dân
              thường làm tại nhà. Đặc trưng của Loh Bak là nhân có ngũ vị hương,
              vỏ được làm từ đậu hũ ky (váng đậu). Riêng nhân thì khá đa dạng,
              chủ yếu là thịt lợn, ngoài ra có thêm tôm và củ năng (kiểu của
              Triều Châu) hoặc hành tây và củ đậu (kiểu Phúc Kiến). Sắp tới Tết
              Âm lịch rồi, bạn nào muốn làm món gì đó lạ lạ thì nên thử món này
              xem sao nha!
            </p>
            <div className="date-box">
              <i className="far fa-clock"></i>
              <p className="date">25, June 2021</p>
              <i className="fas fa-comments"></i>
              <p>1</p>
            </div>
          </div>
        </div>

        <button className="see-more">
          <i className="fas fa-angle-double-left"></i>Xem thêm
        </button>
      </section>
    </>
  );
};

export default Home;
