import React from 'react'
import './shop.css'
const shop = () => {
    return (
        <>
            <div className="shop-maim">
                <div className="shop-header-content">
                    <i>ONLINE SHOP</i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloribus explicabo id magni voluptates. Voluptates eveniet praesentium necessitatibus officia placeat? Dignissimos earum dolorem exercitationem voluptatibus natus architecto ducimus tempore? Praesentium earum in unde id quos, doloremque architecto labore officiis at?</p>
                <br /><br />
                </div>
                <div className="shop-soap-container">
                    <div className="soap1">
                        <img src="./src/imgs/soap1img.png" />
                        <br/>
                        <h1>Oli Soap</h1>
                        <p>$5.00</p>
                        <button>ADD TO CART</button>
                    </div>
                    <div className="soap2">
                        <img src="./src/imgs/soap2img.png" />
                        <br/>
                        <h1>Oganic Soap</h1>
                        <p>$5.00</p>
                        <button>ADD TO CART</button>
                    </div>
                    <div className="soap3">
                        <img src="./src/imgs/soap3img.png" />
                        <br/>
                        <h1>Glycerin Soap</h1>
                        <p>$5.00</p>
                        <button>ADD TO CART</button>
                    </div>
                    <div className="soap4">
                        <img src="./src/imgs/soap4img.png" />
                        <br/>
                        <h1>Olive Soap</h1>
                        <p>$5.00</p>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default shop
