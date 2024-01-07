import React from 'react';
import qzone1 from '../../../assets/qzone1.png';
import qzone2 from '../../../assets/qzone2.png';
import qzone3 from '../../../assets/qzone3.png';
const QZone = () => {
    return (
        <div className='bg-dark text-center my-4 py-4'>
            <h4>Q-Zone</h4>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
        </div>
    );
};

export default QZone;