import React from 'react';
import cover1 from './CSS/IMAGE/moo.jpg';
import cover from './CSS/IMAGE/Cover.webp';
import cover2 from './CSS/IMAGE/cover2.jpg';
import './CSS/home.css';

export default function Slide() {
    let slideStyle={
        height:"70vh",
        objectPosition:"top",
        objectFit:"cover"
    }
    return (
        <>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src={cover1} class="d-block w-100" alt="..." style={{height:"70vh",objectPosition:"center",objectFit:"cover"}}/>
                    </div>
                    <div class="carousel-item">
                        <img src={cover2} class="d-block w-100" alt="..." style={slideStyle}/>
                    </div>
                    <div class="carousel-item">
                        <img src={cover} class="d-block w-100" alt="..." style={slideStyle}/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
