import React from "react";
import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const CardSlider = () => {
    const cardData = [
        {
            id: "1",
            title: "Learn",
            img_url: "./images/cardcrousel-img.avif",
            bgColor: "#98E3FF",
        },
        {
            id: "2",
            title: "Study Guides",
            img_url: "./images/cardcrousel-img1.avif",
            bgColor: "#EEAAFF",
        },
        {
            id: "3",
            title: "Flashcards",
            img_url: "./images/cardcrousel-img2.avif",
            bgColor: "#423ED8",
            textColor: "white",
        },
        {
            id: "4",
            title: "Practice Tests",
            img_url: "./images/cardcrousel-img3.avif",
            bgColor: "#FFC38C",
        },
        {
            id: "5",
            title: "Expert Solutions",
            img_url: "./images/cardcrousel-img4.avif",
            bgColor: "#98F1D1",
        },
    ];

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // large screens
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768, // tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, // mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
        <section className="flex justify-center">
            <div className="container mb-16 mt-5">
                <Slider {...settings}>
                    {cardData.map((curElement) => (
                        <Cards key={curElement.id} data={curElement} />
                    ))}
                </Slider>
            </div>
        </section>
        </>
    );
};

// Custom Next Arrow Component with Tailwind
const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/2 right-[14px] md:right-0 transform -translate-y-1/2 z-10 p-2 text-black opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            onClick={onClick}
        >
            <AiOutlineRightCircle size={50} className="text-slate-700 -mr-4"/>
        </div>
    );
};

// Custom Previous Arrow Component with Tailwind
const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 text-black opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            onClick={onClick}
        >
            <AiOutlineLeftCircle size={50} className="text-slate-700 md:-ml-4"/>
        </div>
    );
};

export const Cards = (props) => {
    const { title, img_url, bgColor, textColor } = props.data;
    return (
        <div className="flex">
            <div
                className="h-[24rem] w-[19rem] relative rounded-[8px]"
                style={{
                    backgroundColor: bgColor,
                    display: "block",
                }}
            >
                <h2
                    className="text-center text-[24px] pt-5"
                    style={{ color: textColor ? textColor : "black" }}
                >
                    {title}
                </h2>
                <img
                    src={img_url}
                    className="absolute bottom-0 left-0"
                    alt={title}
                />
            </div>
        </div>
    );
};
