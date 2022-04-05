import React from 'react'
import './Home.css';
import Product from '../Product/Product';
function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img 
                className="home__image"
                src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                alt="ads_image"
            />

            <div className="home__row">
                <Product
                id="123456"
                title="Sapiens: A Brief History of Humankind"
                price={336.00} 
                image="https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg"
                rating={5}
                />
                <Product 
                    id="123457"
                    title="Max Women's Rayon A-Line Midi Casual Dress"
                    price={1199.00} 
                    image="https://m.media-amazon.com/images/I/81oFKGGHfjL._UL1500_.jpg"
                    rating={5}
                />
            </div>

            <div className="home__row">
                <Product
                   id="123458"
                   title="Apple iPhone SE (64 GB) - Midnight (3rd Generation)"
                   price={43900.00} 
                   image="https://m.media-amazon.com/images/I/61TOWf11+jL._SL1500_.jpg"
                   rating={4}
                />
                <Product 
                    id="123459"
                    title="Giftplease Acrylic Customized Photo and song Glass Spotify Plaque with wooden stand"
                    price={399.00} 
                    image="https://m.media-amazon.com/images/I/81Y-9RpHUTL._SL1500_.jpg"
                    rating={4}
                />
                <Product 
                    id="123451"
                    title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
                    price={3699.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61Z5bOhKKAL._SL1000_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="123452"
                    title="Apple M1 Chip with 8-Core CPU and 7-Core GPU 
                    256GB Storage"
                    price={92900.00}
                    rating={5}
                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gallery3-20201110?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1632937845000"
                />
            </div>
        </div>
    </div>
  );
}

export default Home;