import React, { useState, useEffect } from 'react';
import './ReadMoreMainPhoto.css';

const ReadMoreMainPhoto = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchSlides = async () => {
            const images = [
                await import('../img/mainImage.png'),
                await import('../img/objectPhoto.png'),
            ];
            setSlides(images);
        };

        fetchSlides();

        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="slider-container1">
            <div className="slider21">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.default}
                        alt={`Slide ${index + 1}`}
                        className={index === currentSlide ? "slide active" : "slide"}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReadMoreMainPhoto;