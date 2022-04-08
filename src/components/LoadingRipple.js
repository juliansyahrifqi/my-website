import React from 'react';

function LoadingRipple(props) {
    return (
      <div className="loading">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
}

export default LoadingRipple;