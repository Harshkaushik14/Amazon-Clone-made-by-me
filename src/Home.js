import React from "react";
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Prime Video"
      />

      {/* Product id, title , price , ratings , image */}
      <div className="home__row">
      <Product
      id="56832"
      title="Fire TV Stick with Alexa Voice Remote (includes TV controls) | HD streaming device | 2020 release"
      price={65}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/31t0m3cPrXL._AC_SX184_.jpg"
      />

<Product
      id="13245"
      title="Mi LED TV 4A Pro 80cm (32) Black"
      price={200}
      rating={4}
      image="http://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1587610145.80292805.png?width=200&height=200"
      />
      </div>

      <div className="home__row">
      <Product
      id="45532"
      title="Fitbit Versa 2 Health and Fitness Smartwatch"
      price={148}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/I/41EAgbsIZGL._AC_SX184_.jpg"
      />

<Product
      id="54321"
      title="All-new Echo Frames (2nd Gen) | Smart audio glasses with Alexa | Classic Black"
      price={224}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/31TvhqvkNAL._AC_SX184_.jpg"
      />

<Product
      id="23412"
      title="Mi Business Casual 21L Water Resistant Laptop Backpack (Dark Grey)"
      price={600}
      rating={5}
      image="https://m.media-amazon.com/images/I/41LW9in0xUL.jpg"
      />

<Product
      id="54345"
      title="New Apple iPhone 11 (64GB) - Black"
      price={500}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SX679_.jpg"
      />

      </div>
      <div className="home__row">

      <Product
      id="79012"
      title="Mi True Wireless Earphones 2 with Balanced Sound,14 hrs Battery Life"
      price={150}
      rating={4}
      image="https://m.media-amazon.com/images/I/21lnM6TfomL.jpg"
      />

<Product
      id="79032"
      title=" Apple Watch
      Gold Aluminium Case with Sport Band"
      price={200}
      rating={5}
      image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTP72_VW_34FR+watch-40-alum-gold-nc-se_VW_34FR_WF_CO_GEO_IN?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1566449884261,1604709179000"
      />
      </div>

    </div>
  );
}

export default Home;

