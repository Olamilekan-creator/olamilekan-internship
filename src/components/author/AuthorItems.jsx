import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SkeletonAuthor from "../UI/SkeletonAuthor";

const AuthorItems = ({ localNftData, nftCollection }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localNftData && localNftData.length > 0 && nftCollection && nftCollection.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [localNftData, nftCollection]);

const AuthorItems = ({ nftCollection, localNftData }) => {



  return (
    <>
    {isLoading ? (
      <div className="row">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <SkeletonAuthor />
          </div>
        ))}
      </div>
    ) : (
      <>
        {nftCollection.map((nft, index) => (
    <div className="de_tab_content"  key={index}>
      <div className="tab-1">
        <div className="row">
          

                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                >
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link to="">
                        <img
                          className="lazy"
                          src={localNftData.authorImage}
                          alt=""
                        />
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
                      <Link to={`/item-details/:${nft.id}`}>
                        <img
                          src={nft.nftImage}
                          className="lazy nft__item_preview"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="nft__item_info">
                      <Link to={`/item-details/:${nft.id}`}>
                        <h4>{nft.title}</h4>
                      </Link>
                      <div className="nft__item_price">
                        {`${nft.price}`} ETH
                      </div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart"></i>
                        <span>{nft.likes}</span>
                      </div>
                    </div>

        {nftCollection.map((nft, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <div className="nft__item">
                <div className="author_list_pp">
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
                  <Link to={`/item-details/:${nft.id}`}>
                    <img
                      src={nft.nftImage}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to={`/item-details/:${nft.id}`}>
                    <h4>Pinky Ocean</h4>
                  </Link>
                  <div className="nft__item_price">{`${nft.price}`} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{nft.likes}</span>

                  </div>
                </div>
        </div>
      </div>
    </div>
    ))}
    </>
  )}
    </>
  );
};

export default AuthorItems;
