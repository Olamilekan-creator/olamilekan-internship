import React from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

const SkeletonItemDetails = () => {
  return (
    <>
    <div className="col-md-6 text-center">
          <Skeleton width="100%" height="60vh" />
      </div><div className="col-md-6">
              <div className="item_info">
                  <h2><Skeleton width="100%" height="35px" /></h2>

                  <div className="item_info_counts">
                      <div className="item_info_views">
                          <i className="fa fa-eye"></i>
                          <Skeleton width="40px" height="15px" />
                      </div>
                      <div className="item_info_like">
                          <i className="fa fa-heart"></i>
                          <Skeleton width="40px" height="15px" />
                      </div>
                  </div>
                  <p>
                  <Skeleton width="100%" height="10vh" />
                  </p>
                  <div className="d-flex flex-row">
                      <div className="mr40">
                          <h6>Owner</h6>
                          <div className="item_author">
                              <div className="author_list_pp">
                                  <Link to="/author">
                                      <Skeleton width="50px" height="50px" borderRadius="50%" />
                                      <i className="fa fa-check"></i>
                                  </Link>
                              </div>
                              <div className="author_list_info">
                                  <Link to="/author"> <Skeleton width="100px" height="20px" /></Link>
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
                                  <Link to="/author">
                                      <Skeleton width="50px" height="50px" borderRadius="50%" />
                                      
                                      <i className="fa fa-check"></i>
                                  </Link>
                              </div>
                              <div className="author_list_info">
                                  <Link to="/author"> <Skeleton width="200px" height="20px" /></Link>
                              </div>
                          </div>
                      </div>
                      <div className="spacer-40"></div>
                      <h6> <Skeleton width="30px" height="15px" /></h6>
                      <div className="nft-item-price">
                      <Skeleton width="100px" height="30px" />
                          <span></span>
                      </div>
                  </div>
              </div>
          </div>
          </>
  );
};

export default SkeletonItemDetails;