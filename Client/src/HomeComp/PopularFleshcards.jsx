import React, { useState } from "react";
import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const PopularFleshcards = () => {
    const flesCardData = [
        {
            id: "first-card",
            card_title: "JS-US009 Joint Staff Operations Security",
            terms: "6 terms",
            // card_img: "/public/images/homesec4.avif",
            user_img: "/public/images/homesec4.avif",
            user_name: "Ayush Tiwari",
        },
        {
            id: "second-card",
            card_title: "Wordly Wise 3000 Book 3 Lesson 3",
            terms: "14 terms",
            // card_img: "/public/images/homesec4.avif",
            user_img: "/public/images/homesec4.avif",
            user_name: "Kenneth_Wilson28",
        },
        {
            id: "third-card",
            card_title: "Que Chevere 2 1B",
            terms: "12 terms",
            card_img: "/public/images/homesec4.avif",
            user_img: "/public/images/homesec4.avif",
            user_name: "jaiweimer",
        },
        {
            id: "four-card",
            card_title: "Chapter 4 quiz",
            terms: "10 terms",
            // card_img: "/public/images/homesec4.avif",
            user_img: "/public/images/homesec4.avif",
            user_name: "abbyschechinget",
        },
        {
            id: "five-card",
            card_title: "State Flage",
            terms: "50 terms",
            card_img: "/public/images/homesec4.avif",
            user_img: "/public/images/homesec4.avif",
            user_name: "salvatore_triolo6",
        },
        {
            id: "six-card",
            card_title: "Sector 404 Santinagar",
            terms: "10 terms",
            // card_img: "/public/images/homesec4.avif",
            user_img: "/public/images/homesec4.avif",
            user_name: "AbhayNarayan dubey",
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Math.ceil(flesCardData.length / 6);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesPerRow: 2,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update current slide
        appendDots: () => (
            <div
                style={{
                    color: "#454444",
                    fontSize: "22px",
                    fontWeight: "600",
                    position: "absolute",
                    bottom: "-3.6rem",
                }}
            >
                <span>
                    {Math.ceil(currentSlide / 3) + 1}/{totalSlides}
                </span>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section>
            <div className="md:flex md:justify-center mt-16 mb-20">
                <div className="lg:max-w-[880px] sm:max-w-[600px] max-w-[500px] px-4">
                    <h3 className="text-slate-700 mb-5 text-center">Popular flashcard sets</h3>
                    <div>
                        <Slider {...settings}>
                            {flesCardData.map((flesElement) => (
                                <FlesCards key={flesElement.id} data={flesElement} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};


const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute right-28 -bottom-24 transform -translate-y-1/2 z-10 p-2 text-black opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            onClick={onClick}
        >
            <AiOutlineRightCircle size={40} className="text-slate-700" />
        </div>
    );
};

// Custom Previous Arrow Component with Tailwind
const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute -bottom-24 left-28 transform -translate-y-1/2 z-10 p-2 text-black opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            onClick={onClick}
        >
            <AiOutlineLeftCircle size={40} className="text-slate-700" />
        </div>
    );
};

export const FlesCards = (props) => {
    const { card_title, card_img, user_img, user_name, terms } = props.data;

    return (
        <div className="h-[10rem] w-[16rem] p-3 relative rounded-[12px] bg-white shadow-2xl shadow-slate-200">
            <div className="flex justify-between">
                <div className="">
                    <p className="ml-2">{card_title}</p>
                    <p className="text-[12px] font-bold text-slate-700">{terms}</p>
                </div>
                <img src={card_img} className="h-[60px]" alt="" />
            </div>
            <div className="absolute bottom-2 flex gap-3 items-center left-4">
                <img src={user_img} className="h-[24px] rounded-full" alt="" />
                <p className="text-[14px] font-bold text-slate-700">{user_name}</p>
            </div>
        </div>
    );
};
