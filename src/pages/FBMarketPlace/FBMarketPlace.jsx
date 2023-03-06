import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import FBIphone from "../../assets/images/fb_iphone.png"
import FBMPlogo from "../../assets/images/facebook_mp.png"
import { FBMPSearchBar } from "../../components";
import "./FBMarketPlace.css";

const FBMarketPlace = () => {
  return (
    <>
    <div id="fb_container">
      <div className="fb_text">
        <div className="title_and_name">
          <div className="title">
          Facebook MarketPlace Search Ranking System
          </div>
          <em className="author">
            <div id="author_icon"><FontAwesomeIcon icon={faUser} /></div>Dias F. R.
          </em>
        </div>
        < FBMPSearchBar />
      </div>
      <img src={FBIphone} alt="iphone png with facebook logo"></img>
      
    </div>
      <div id="intro_container">
        <h1 className="fb_h1">Introduction</h1>
        <p className="intro_desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut beatae, dolores laudantium veritatis, est inventore labore cupiditate ab quo doloremque aliquam fugiat deleniti? Ab, perferendis? Nemo necessitatibus possimus recusandae sit explicabo illo quasi, labore commodi assumenda quo, quae voluptatum corporis ut, ab dolorum quia provident eveniet rerum quos! Eligendi illum accusantium, adipisci unde praesentium voluptas eaque officiis ad accusamus in. Accusantium, ducimus. Dolores autem fugit enim ipsum beatae eligendi repellat numquam ullam accusamus excepturi laboriosam provident assumenda fugiat vel dignissimos adipisci sint nulla, magnam esse! Suscipit rerum, repellat eligendi asperiores a perspiciatis? Accusamus, ipsa repudiandae odio quisquam harum tempore nemo ipsum pariatur, magnam dolores, odit beatae assumenda reiciendis eveniet quibusdam? Provident, amet reiciendis? Quod laudantium dignissimos labore eaque repellat ducimus quasi repellendus saepe ipsam, esse eveniet voluptate dolor adipisci impedit quos atque necessitatibus architecto maxime! Exercitationem impedit ea soluta autem? Ab, reprehenderit laudantium quo perferendis sint asperiores! Facere obcaecati non fugit, veniam consectetur cupiditate laudantium ullam ipsum quibusdam natus culpa nihil molestiae? Inventore quo vero ipsum corporis itaque assumenda ratione, ut fugiat sed? Excepturi aut, libero recusandae expedita incidunt voluptas saepe mollitia nihil quo exercitationem! Nisi magni rem earum voluptatum expedita culpa nulla harum consequuntur, perspiciatis adipisci, nostrum dolore eligendi. Error autem sint iusto illum eum culpa modi aut quae ipsa nisi suscipit, deserunt, totam corrupti libero maxime consequuntur maiores repellendus voluptates? Saepe aliquam quia enim voluptas, illum voluptatum esse voluptatibus dicta facere magnam reiciendis accusantium totam pariatur voluptate perferendis assumenda corporis excepturi obcaecati debitis vel quam maxime. Fugit deleniti vitae tenetur! Laudantium necessitatibus eaque rerum fugiat vitae enim minus. Quisquam, doloremque totam debitis earum minus ratione, sapiente impedit, nesciunt cumque asperiores unde illum! Dolores, facere voluptas. Quas dolorum corporis beatae? Mollitia perferendis odio maiores cumque itaque repudiandae illo illum rem nesciunt eveniet laudantium labore commodi error eius quidem aperiam hic, nobis, a suscipit! Amet reprehenderit eum nemo velit ipsa quos aliquid iusto, laborum natus dolorem omnis, repudiandae commodi, hic odio possimus consequatur delectus deleniti quia eligendi voluptas. Adipisci nesciunt est ut aut alias quisquam qui voluptate debitis sit tempore natus ad eveniet reiciendis officiis recusandae soluta provident consectetur nulla explicabo amet, deserunt beatae. Iste iure obcaecati eum, sed doloremque officia quibusdam consequatur numquam dolore accusantium veniam optio ipsa harum illum culpa veritatis necessitatibus natus facere eaque, ducimus omnis non quasi quos! Laboriosam quibusdam, sed accusamus id eius cum voluptatum praesentium perferendis libero at optio aperiam dolore repellat obcaecati, nostrum fuga! Maxime sit vitae officia perferendis ex dolore aut, nam neque assumenda aliquam dolorem incidunt voluptatum iusto! Facere vero totam dolorum sed quod repudiandae, fuga ipsa accusantium quidem quibusdam esse error! Odit aspernatur sequi, a distinctio temporibus libero perspiciatis quod harum blanditiis ut adipisci accusamus! Est, magnam totam consectetur eaque cum beatae ratione! Architecto aliquam molestiae, odio similique cumque totam ad error ipsa officia earum quae odit mollitia vero quasi rem porro nihil? Distinctio, repellendus eligendi. Doloremque deserunt, porro, consequatur itaque suscipit illum natus dolores, officia consectetur voluptate laborum nam voluptatem! Maxime placeat repellendus minus doloribus. Rerum enim accusamus dolore?</p>
        <h1 className="fb_h1">Tools</h1>
        <h1 className="fb_h1" id="fb_model_h1">Multimodal Model</h1>
      </div>
      <div id="fb_model_container">
        <div className="fbmp_copy">
          <div className="fbmp_header">
            <div className="fbmp_title">Facebook</div>
            <div className="fbmp_logo">
              <img src={FBMPlogo} alt="facebook marketplace logo" />
            </div>
            <div className="fbmp_title">MarketPlace</div>
          </div>
          <FBMPSearchBar id="search_bar_fbmp" />
          <div className="products_tile">
            Products go here
          </div>
        </div>
      </div>
    </>
  );
};

export default FBMarketPlace;