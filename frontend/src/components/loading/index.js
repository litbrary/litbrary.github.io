import React from 'react';
import ReactLoading from "react-loading";
import './loading.scss'
const Loading = () => {
    return (
        <div className="loading">
            <div className="loading__text">
                Loading
            </div>
            <div className='loading__component'>
            <ReactLoading type="cylon"color="black" height="100px" width="100px"/>
            </div>
            
        </div>
        
    );
};

export default Loading;