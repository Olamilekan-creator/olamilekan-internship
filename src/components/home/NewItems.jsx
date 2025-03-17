import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NewItems = ({ nftData }) => {
  const [localNftData, setLocalNftData] = useState([]);
  const [timeLeft, setTimeLeft] = useState(5 * 60 * 60 + 30 * 60 + 32);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localNftData && localNftData.length > 0) {
      setIsLoading(false);
    }
  }, [localNftData]);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await axios.get(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
        );
        setLocalNftData(response.data);
      } catch (error) {
        console.error("There was an error fetching the NFT data!", error);
      }
    };
    fetchNFTs();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const Arrow = ({ className, style, onClick }) => {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#ccc",
          borderRadius: "50px",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const SkeletonAvatar = ({
    width = "auto",
    height = "auto",
    className = "skeleton-avatar",
    isSquare = false,
    margin = "0 auto",
  }) => {
    return (
      <div
        className={className}
        style={{
          width: width,
          height: height,
          borderRadius: isSquare ? "0%" : "50%",
          backgroundColor: "#e0e0e0",
          animation: "pulse 1.5s infinite",
          margin: "0 auto",
        }}
      />
    );
  };

  const SkeletonNftCard = ({
    imageHeight = "auto",
    titleHeight = "100%",
    imageWidth = "100%",
    ercHeight = "15px",
    ercWidth = "60px",
    ppHeight = "15px",
    imageClass = "skeleton-image",
    titleClass = "skeleton-title",
    ercClass = "skeleton-erc",
    ppClass = "skeleton-icon",
    margin = "0 auto",
    borderRadius = "auto"
  }) => {
    return (
      <div>
      <div className="nft__item">
        <div className="author_list_pp">
          <SkeletonAvatar width="45px" height="45px" />
          <div
            className={`${titleClass}`}
            style={{ height: titleHeight }}
          ></div>{" "}
          <Link
            to="/author"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Creator: Monica Lucas"
          >
            <img
              className="lazy"
              src
              alt=""
            />
            <i className="fa fa-check"></i>
          </Link>
        </div>
        <div className="de_countdown">
          <SkeletonAvatar
            height="40px"
            width="150px"
            isSquare={true}
            borderRadius="50%"
          />
          <div
            className={`${titleClass}`}
            style={{ height: titleHeight,
              borderRadius: borderRadius
             }}
          ></div>{" "}
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

          <Link to>
            <img
              src
              className="lazy nft__item_preview"
              alt=""
            />
            <SkeletonAvatar
              height="100%"
              width="100%"
              isSquare={true}
            />
            <div
              className={`${imageClass}`}
              style={{ height: imageHeight, width: imageWidth }}
            ></div>{" "}
          </Link>
        </div>
        <div className="nft__item_info">
          <Link to="/item-details">
            <h4>
              <SkeletonAvatar
                height="15px"
                width="60px"
                isSquare={true}
              />
              <div
                className={`${ercClass}`}
                style={{ height: ercHeight, width: ercWidth, left: "10%" }}
              ></div>{" "}
            </h4>
          </Link>
          <div className="nft__item_price">
            <SkeletonAvatar
              height="15px"
              width="60px"
              isSquare={true}
            />
            <div
              className={`${ercClass}`}
              style={{ height: ercHeight, width: ercWidth, left: "10%" }}
            ></div>{" "}
          </div>
          <div className="nft__item_like">
            <SkeletonAvatar
              width="30px"
              height="15px"
              isSquare={true}
            />
            <div
              className={`${ppClass}`}
              style={{
                height: ppHeight,
                display: "flex",
                justifyContent: "flex-end",
              }}
            ></div>{" "}
            <i className="fa fa-heart"></i>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    );
  };

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          {isLoading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <SkeletonNftCard
                key={index}
                imageHeight="auto"
                titleHeight="auto"
                ercHeight="auto"
                ppHeight="auto"
                imageClass="custom-skeleton-image"
                titleClass="custom-skeleton-title"
                ercClass="custom-skeleton-erc"
                ppClass="custom-skeleton-icon"
              />
            ))
          ) : (
            <Slider {...settings}>
              {localNftData.length > 0 &&
                localNftData.map((nft, index) => (
                  <div key={index}>
                    <div className="nft__item">
                      <div className="author_list_pp">
                        <Link
                          to="/author"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Creator: Monica Lucas"
                        >
                          <img className="lazy" src={nft.authorImage} alt="" />
                          <i className="fa fa-check"></i>
                        </Link>
                      </div>
                      <div className="de_countdown">
                        {hours}h {minutes}m {seconds}s
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

                        <Link to={`"/item-details/${nft.id}"`}>
                          <img
                            src={nft.nftImage}
                            className="lazy nft__item_preview"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="nft__item_info">
                        <Link to="/item-details">
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
                    </div>
                  </div>
                ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewItems;
