import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms And Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Fugit nihil dolore aliquid totam debitis maxime maiores delectus placeat nostrum, 
               sequi sapiente provident in voluptatem qui repudiandae nemo consectetur molestiae rem!</p>
               <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;