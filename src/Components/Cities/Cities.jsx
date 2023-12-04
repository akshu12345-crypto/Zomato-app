import React from 'react';
import "../Cities/Cities.scss";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Cities = () => {
  return (
      <div className="cities">
          <h1>Popular localities in and around <span>Ahmedabad</span></h1>
          <div className="cityContainer">
          <div className="city">
              <div className="cityLeft">
                  <h3>Bodakdev</h3>
                  <span>345 Places</span>
              </div>
              <div className="icon">
                  <ChevronRightIcon />
              </div>
          </div>
          <div className="city">
              <div className="cityLeft">
                  <h3>Satellite</h3>
                  <span>336 Places</span>
              </div>
              <div className="icon">
                  <ChevronRightIcon />
              </div>
          </div>
          <div className="city">
              <div className="cityLeft">
                  <h3>Gurukul</h3>
                  <span>86 Places</span>
              </div>
              <div className="icon">
                  <ChevronRightIcon />
              </div>
          </div>
          <div className="city">
              <div className="cityLeft">
                  <h3>Navranpura</h3>
                  <span>302 Places</span>
              </div>
              <div className="icon">
                  <ChevronRightIcon />
              </div>
          </div>
          <div className="city">
              <div className="cityLeft">
                  <h3>Vasantpur</h3>
                  <span>217 Places</span>
              </div>
              <div className="icon">
                  <ChevronRightIcon />
              </div>
          </div>
          <div className="city">
              <div className="cityLeft">
                  <h3>Thaltej</h3>
                  <span>222 Places</span>
              </div>
              <div className="icon">
                  <ChevronRightIcon />
              </div>
          </div>
          <div className="city">
              <div className="cityLeft">
                  <h3>Pralhad Nagar</h3>
                  <span>181 Places</span>
              </div>
              <div className="icon">
                  <ChevronRightIcon />
              </div>
          </div>
          <div className="city">
              <div className="cityLeft">
                  <h3>C G Road</h3>
                  <span>94 Places</span>
              </div>
              <div className="icon">
                  <ChevronRightIcon />
              </div>
          </div>
          <div className="city">
              <div className="cityLeft">
                  <h3>See more</h3>
              </div>
              <div className="icon">
                  <ChevronRightIcon />
              </div>
              </div>
        </div>
    </div>
  );
}

export default Cities;
