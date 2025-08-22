import React from 'react'

const home = () => {
    return (
        <>
            <div className="home-main">
                <div className="main-img">
                    <img src="./src/imgs/mainIMG.png" className='mainhomeimg' />
                </div>
                <div className="second-home-container">
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et iste soluta eius unde omnis! Doloribus deserunt, excepturi ipsum qui numquam ullam, quo unde officia modi expedita accusamus saepe error alias fuga est eaque sequi corporis incidunt autem consectetur quas esse? Sapiente amet nulla accusantium tempore optio est delectus repellendus accusamus animi, eligendi, unde quis facere at? Quidem ut officia consequatur quis. Nostrum deleniti a quia voluptates iste, qui aliquid, hic, commodi temporibus assumenda ab recusandae quaerat exercitationem ex inventore veritatis facilis! Possimus tenetur asperiores tempore id vitae enim? Est, placeat ipsum provident magni accusantium minima. Veniam impedit vitae atque expedita tenetur consectetur! Quibusdam aut reiciendis sit repellat repellendus, corrupti aperiam qui dolorum beatae repudiandae eligendi quas cumque earum odio.</p>
                        <br /><br />
                        <button className="btnhome">SHOP NOW</button>
                    </div>
                    <div className="homeimgs">
                        <img src="./src/imgs/homeOne.png" className='mainhomeimg1' />
                        <img src="./src/imgs/homeTwo.png" className='mainhomeimg2' />
                        <img src="./src/imgs/homeThree.png" className='mainhomeimg3' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default home
