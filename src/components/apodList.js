import React, {useState} from 'react';
import ApodCard from './apodCard'
const ApodList = (props) => {
    console.log(props);

    return(
        <div className="content">
            {
                props.data.map(el => <ApodCard 
                    data={el.date} 
                    explanation={el.explanation} 
                    hdurl={el.hdurl}
                    title={el.title}
                    />
                )
            }
        </div>
    )
}

export default ApodList;