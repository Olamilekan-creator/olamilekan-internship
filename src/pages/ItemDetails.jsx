import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import SkeletonItemDetails from "../components/UI/SkeletonItemDetails";

const ItemDetails = ({ nft }) => {
  const [localNftData, setLocalNftData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { nftId, authorId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`
        );

        setLocalNftData(response.data);
      } catch (error) {
        console.error("There was an error fetching the NFT data!", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    };

    fetchNFTs();
  }, [nftId]);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              {isLoading ? (
                <SkeletonItemDetails />
              ) : (
              <><div className="col-md-6 text-center">
                    <img
                      src={localNftData.nftImage}
                      className="img-fluid img-rounded mb-sm-30 nft-image"
                      alt="" />
                  </div><div className="col-md-6">
                      <div className="item_info">
                        <h2>{localNftData.title} #{`${localNftData.tag}`}</h2>

                        <div className="item_info_counts">
                          <div className="item_info_views">
                            <i className="fa fa-eye"></i>
                            {`${localNftData.views}`}
                          </div>
                          <div className="item_info_like">
                            <i className="fa fa-heart"></i>
                            {`${localNftData.likes}`}
                          </div>
                        </div>
                        <p>
                          {localNftData.description}
                        </p>
                        <div className="d-flex flex-row">
                          <div className="mr40">
                            <h6>Owner</h6>
                            <div className="item_author">
                              <div className="author_list_pp">
                                <Link to={`/author/${nft.authorId}`}>
                                  <img className="lazy" src={localNftData.ownerImage} alt="" />
                                  <i className="fa fa-check"></i>
                                </Link>
                              </div>
                              <div className="author_list_info">
                                <Link to={`/author/${nft.authorId}`}>{localNftData.ownerName}</Link>
                              </div>
                            </div>
                          </div>
                          <div></div>
                        </div>
                        <div className="de_tab tab_simple">
                          <div className="de_tab_content">
                            <h6>Creator</h6>
                            <div className="item_author">
                              <div className="author_list_pp">
                                <Link to={`/author/${nft.authorId}`}>
                                  <img className="lazy" src={localNftData.creatorImage} alt="" />
                                  <i className="fa fa-check"></i>
                                </Link>
                              </div>
                              <div className="author_list_info">
                                <Link to={`/author/${nft.authorId}`}>{localNftData.creatorName}</Link>
                              </div>
                            </div>
                          </div>
                          <div className="spacer-40"></div>
                          <h6>{localNftData.price}</h6>
                          <div className="nft-item-price">
                            <img src={EthImage} alt="" />
                            <span>{`${localNftData.price}`}</span>
                          </div>
                        </div>
                      </div>
                    </div></>
)}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
