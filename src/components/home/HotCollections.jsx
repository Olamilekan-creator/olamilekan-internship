import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";


const HotCollections = () => {
  const [nftData, setNftData] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections');
        setNftData(response.data);
      } catch (error) {
        console.error("There was an error fetching the NFT data!", error);
      }
      };
      fetchNFTs();
    }, []);

    const settings = {
     slidesToShow: 4,
     slidesToScroll: 1,
     arrows: true,
     speed: 500,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
     ],
    };

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <Slider {...settings}>
          {nftData.length > 0 && nftData.map((nft, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img src={nft.nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img className="lazy pp-coll" src={nft.authorImage} alt="" />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>{nft.title}</h4>
                  </Link>
                  <span>{`ERC-${nft.code}`}</span>
                </div>
              </div>
            </div>
          ))}
           </Slider>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
