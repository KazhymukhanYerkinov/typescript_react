import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();

    return (
        <div>
            <h1>  Information page  </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Officia excepturi iste aliquid dicta voluptates omnis! Animi 
                id facilis, nostrum ducimus ipsam, tenetur dolore esse accusantium 
                ab veniam magnam eos aspernatur eveniet quos pariatur iusto quae 
                voluptatem dolorum nihil! Est, commodi iste? Ex cum asperiores ipsum et
                , praesentium architecto maxime saepe.
            </p>
            <button className = "btn" onClick = {() => history.push('/')}> Back to home </button>

            
        </div>
    )
}