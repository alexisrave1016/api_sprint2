import React, { Component } from 'react'

export default class Carrucel extends Component {
    render() {
        return (

            <div className="w-75 d-flex justify-content-center sm w-100">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        
                    </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                    <img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1630968359/api_sprint2/tanjiro-and-nezuko_gdup6a.jpg" className="d-block img-fluid" alt="..." />
                                <div className="carousel-caption d-none d-md-block ">
                                    <h5>tanjiro and nezuko</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>

                            <div className="carousel-item" data-bs-interval="2000">
                                    <img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1630968359/api_sprint2/dragon-ball-z-budokai-tenkaichi-3-wallpaper-preview_jbmo1w.jpg" className="d-block img-fluid" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                    <img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1630968359/api_sprint2/kimetsu_ofvcgh.jpg" className="d-block" img-fluid alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            {/* <div className="carousel-item" data-bs-interval="1000">
                                    <img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1630968359/api_sprint2/onipice_bgxc7c.jpg" className="d-block" img-fluid alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                    <img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1630968359/api_sprint2/tokiogoul_uvo0dt.jpg" className="d-block" img-fluid alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                </div>
            </div>
        )
    }
}