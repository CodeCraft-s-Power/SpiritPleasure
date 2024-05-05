import React, { Component } from 'react';
import './ReadMoreMainPhoto.css';

class ReadMoreMainPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            slides: [
                require('../img/mainImage.png'),
                require('../img/objectPhoto.png'),
            ],
        };
    }

    componentDidMount() {
        // Запускаємо автоматичний перехід між слайдами кожні 0.5 секунди
        this.interval = setInterval(this.nextSlide, 1500);
    }

    componentWillUnmount() {
        // Зупиняємо автоматичний перехід після розмонтажу компонента
        clearInterval(this.interval);
    }

    nextSlide = () => {
        this.setState((prevState) => ({
            currentSlide: (prevState.currentSlide + 1) % prevState.slides.length,
        }));
    };

    render() {
        const { currentSlide, slides } = this.state;

        return (
            <div className="slider-container">
                <div className="slider21">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            className={index === currentSlide ? "slide active" : "slide"}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default ReadMoreMainPhoto;