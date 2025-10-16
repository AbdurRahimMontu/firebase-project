import { format } from 'date-fns';
import React from 'react';

const Home = () => {
    return (
        <div className='flex justify-between'>
            <p>Home Page</p>
            <p> {format(new Date(), "EEEE , dd MMMM yyyy p")}</p>
            
        </div>
    );
};

export default Home;