import React from 'react';
import '../css/SearchResult.css';


function SearchResult({
                          img,
                          title,
                          address,
                          website,
                          number,
                          description,
                          star,
                          reviews
                      }
) {

    function openLink(){
        window.open(website)
    }

    return (

        <div className='searchResult' onClick={openLink}>
            <img src={img} alt=""/>

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <h2>{title}</h2>
                    <p>{address}</p>
                    <p>{description}</p>
                    <p>{number}</p>
                    <p onClick={openLink}>{website}</p>


                </div>
            </div>
        </div>
    )
}

export default SearchResult
