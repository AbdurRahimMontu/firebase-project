import { format } from 'date-fns';
import React from 'react';

const Home = () => {
    return (
        <div>
            <p> {format(new Date(), "EEEE , dd MMMM yyyy")}</p>
        </div>
    );
};

export default Home;