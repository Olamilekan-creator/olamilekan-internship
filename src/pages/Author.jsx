import React, { useState, useEffect } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Author = () => {
const [nftCollection, setNftCollection] = useState([]);
  const [localNftData, setLocalNftData] = useState([]);
  const { authorId } = useParams();

const Author = ({ nftData }) => {
const { authorId } = useParams();
  const [localNftData, setLocalNftData] = useState([]);
  const [nftCollection, setNftCollection] = useState([]);


  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`
        );
        setLocalNftData(response.data);
        setNftCollection(response.data.nftCollection)
      } catch (error) {
        console.error("There was an error fetching the NFT data!", error);
      }
    };
    fetchNFTs();
  }, [authorId]);

  return (
      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>
          <section
            id="profile_banner"
            aria-label="section"
            className="text-light"
            data-bgimage="url(images/author_banner.jpg) top"
            style={{ background: `url(${AuthorBanner}) top` }}
          ></section>

{Array.isArray(nftCollection) && nftCollection.map((nft, index) => (
          <section aria-label="section" key={index}>
            <div className="container" >
              <div className="row">
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col" >
                      <div className="profile_avatar">
                        <img src={nft.authorImage} alt="" />
                        <i className="fa fa-check"></i>
                        <div className="profile_name">
                          <h4>
                            {nft.authorName}
                            <span className="profile_username">{nft.tag}</span>
                            <span id="wallet" className="profile_wallet">{nft.address}</span>
                            <button id="btn_copy" title="Copy Text">
                              Copy
                            </button>
                          </h4>
                        </div>
                      </div>
                      <div className="profile_follow de-flex">
                        <div className="de-flex-col">
                          <div className="profile_follower">{`${nft.followers}`} followers</div>
                          <Link to="#" className="btn-main">
                            Follow
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>


                <div className="col-md-12">
                  <div className="de_tab tab_simple">

                    <AuthorItems localNftData={localNftData} nftCollection={nftCollection}/>

                    
                    <AuthorItems localNftData={localNftData} nftCollection = {nftCollection}/>

                  </div>
                </div>
              </div>
            </div>
          </section>
           ))}
        </div>
      </div>
  );
};

export default Author;
