import React from 'react';
import '../css/SearchPage.css';
import SearchResult from "../components/SearchResult";


const oakside = ({

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",
    address: "40701 Village Dr, Big Bear Lake, CA 92315",
    website: "http://www.oaksiderestaurant.com/",
    number: "(909) 866-5555",
    title: "Oakside",
    description: "Warm, rustic stop with indoor & outdoor seating for American dishes plus beer, wine & cocktails.",
    star: 4.5,
    reviews: 1440
})

const peppercorn = ({

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",
    address: "553 Pine Knot Ave, Big Bear Lake, CA 92315",
    website: "http://www.peppercorngrille.com/",
    number: "(909) 866-5405",
    title: "Peppercorn",
    description: "Casual setting with indoor & outdoor seating serves all-American dishes plus beer, wine & cocktails.",
    star: 4.4,
    reviews: 1272
})

const saucyMama = ({

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",
    title: "Saucy Mama's Pizza",
    address: "618 Pine Knot Ave, Big Bear Lake, CA 92315",
    website: "https://facebook.com/SaucyMamasPizzeria/",
    number: "(909) 878-0165",
    description: "Vibrant Italian pizza specialist also offering subs & pasta, plus album-cover art & patio seating.",
    star: 4.4,
    reviews: 1556
})

const fireRock = ({

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",
    title: "Fire Rock",
    address: "618 Pine Knot Ave b, Big Bear Lake, CA 92315",
    website: "https://firerockburgersandbrews.com/",
    number: "(909) 878-0696",
    description: "Local draft beers & burgers in a casual, rock ’n’ roll-themed space with guitars on the wall.",
    star: 4.4,
    reviews: 997
})


function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <h1>Restaurants</h1>
            </div>
            <SearchResult
                img={oakside.img}
                title={oakside.title}
                address={oakside.address}
                website={oakside.website}
                number={oakside.number}
                description={oakside.description}
                star={oakside.star}
                reviews={oakside.reviews}
            />

            <SearchResult
                img={peppercorn.img}
                title={peppercorn.title}
                address={peppercorn.address}
                website={peppercorn.website}
                number={peppercorn.number}
                description={peppercorn.description}
                star={peppercorn.star}
                reviews={peppercorn.reviews}
            />

            <SearchResult
                img={fireRock.img}
                title={fireRock.title}
                address={fireRock.address}
                website={fireRock.website}
                number={fireRock.number}
                description={fireRock.description}
                star={fireRock.star}
                reviews={fireRock.reviews}
            />

            <SearchResult
                img={saucyMama.img}
                title={saucyMama.title}
                address={saucyMama.address}
                website={saucyMama.website}
                number={saucyMama.number}
                description={saucyMama.description}
                star={saucyMama.star}
                reviews={saucyMama.reviews}
            />

        </div>
    )
}

export default SearchPage
