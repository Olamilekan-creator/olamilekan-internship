import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SkeletonAuthorItem from "../UI/SkeletonAuthorItem";
import AOS from "aos";
import "aos/dist/aos.css";

const AuthorItems = ({ localNftData, nftCollection }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { nftID } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 2000 });
  }, []);
  
  document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
  });
  
  document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
  });

  useEffect(() => {
setTimeout(() => {
  setIsLoading(false)
}, 500)
  }, [localNftData, nftCollection]);

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {isLoading ? (
            <SkeletonAuthorItem />
          ) : (
            nftCollection.map((nft, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index} data-aos="fade-up">
                <div className="nft__item">
                  
  
                  <div className="author_list_pp" >
                    <Link to="">
                      <img className="lazy" src={localNftData.authorImage} alt="" />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
  
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
                          <a href="" target="_blank" rel="noreferrer">
                            <i className="fa fa-facebook fa-lg"></i>
                          </a>
                          <a href="" target="_blank" rel="noreferrer">
                            <i className="fa fa-twitter fa-lg"></i>
                          </a>
                          <a href="">
                            <i className="fa fa-envelope fa-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <Link to={`/item-details/${nft.nftId}`}>
                      <img
                        src={nft.nftImage}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="nft__item_info">
                    <Link to={`/item-details/${nft.nftId}`}>
                      <h4>{nft.title}</h4>
                    </Link>
                    <div className="nft__item_price">{nft.price} ETH</div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>{nft.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>

        );
      }

export default AuthorItems;
