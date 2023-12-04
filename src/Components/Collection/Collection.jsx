import React from 'react';
import "./Collection.scss";
import Collection1 from '../../assets/images/collection1.webp';
import Collection2 from '../../assets/images/collection2.webp';
import Collection3 from '../../assets/images/collection3.webp';
import Collection4 from '../../assets/images/collection4.webp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Collection = () => {
  return (
      <div className="collection">
          <h1>Collection</h1>
          <div className="collectionText">
              <p>
                  Explore curated lists of top restaurants, cafes, pubs, and bars, in Ahmedabad, based on trends
              </p>
              <span>
                  All collection in Ahmedabad <KeyboardArrowRightIcon />
              </span>
          </div>
          <div className="collectionCard">
              <div className="collectionImg">
                  <img src={Collection1} />
                  <h3>10 Must-Visit Places for Christmas</h3>
                  <span>9 Places <KeyboardArrowRightIcon /></span>
              </div>
              <div className="collectionImg">
                  <img src={Collection2} />
                  <h3>27 Finest Buffet Places</h3>
                  <span>7 Places <KeyboardArrowRightIcon /></span>
              </div>
              <div className="collectionImg">
                  <img src={Collection3} />
                  <h3>Top 8 Picturesque Cafes</h3>
                  <span>7 Places <KeyboardArrowRightIcon /></span>
              </div>
              <div className="collectionImg">
                  <img src={Collection4} />
                  <h3>10 Best Luxury Dining Places</h3>
                  <span>10 Places <KeyboardArrowRightIcon /></span>
              </div>
          </div>
    </div>
  );
}

export default Collection;
