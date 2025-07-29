import { useEffect, useState } from "react";
import slider1 from '../../../assets/img/slider/slider-pic-1.png';
import slider2 from '../../../assets/img/slider/slider-pic-2.png';
import slider3 from '../../../assets/img/slider/slider-pic-3.png';
import slider4 from '../../../assets/img/slider/slider-pic-4.png';
import slider5 from '../../../assets/img/slider/slider-pic-5.png';
import slider6 from '../../../assets/img/slider/slider-pic-6.png';
import slider7 from '../../../assets/img/slider/slider-pic-7.png';
import slider8 from '../../../assets/img/slider/slider-pic-8.png';
import slider9 from '../../../assets/img/slider/slider-pic-9.png';
import slider10 from '../../../assets/img/slider/slider-pic-10.png';
import slider11 from '../../../assets/img/slider/slider-pic-11.png';
import "./hero-area.css";

export default function HeroArea() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            src: slider1,
            description: 'شرکت ابر فردوسی',
            subdescription: 'سرویس‌های هوش مصنوعی، سرویس‌های ابری و GPU',
        },
        {
            src: slider2,
            description: 'شرکت ابر فردوسی',
            subdescription: 'سرویس‌های ابری، سرویس‌های هوش مصنوعی و GPU',
        },
        {
            src: slider3,
            description: 'آزمایشگاه‌های پیشرفته',
            subdescription: 'آزمایشگاه‌های نانو، بیو و مرجع غذایی',
        },
        {
            src: slider4,
            description: 'شرکت صنایع پیشرفته هواخورشید',
            subdescription: 'توربین‌های بادی و پنل‌های خورشیدی',
        },
        {
            src: slider5,
            description: 'شرکت ابر فردوسی',
            subdescription: 'GPU و سرویس‌های ابری',
        },
        {
            src: slider6,
            description: 'شرکت پایا انرژی',
            subdescription: 'طرح‌‌های کلان نفتی',
        },
        {
            src: slider7,
            description: 'شرکت دانش بنیان هیدروتک ',
            subdescription: 'داشبورد‌های هوش تجاری و رصدخانه‌های هوشمند',
        },
        {
            src: slider8,
            description: 'شهر سبز',
            subdescription: 'ساختمان‌های زیرو کربن',
        },
        {
            src: slider9,
            description: 'شرکت پایا انرژی',
            subdescription: 'طرح‌‌های کلان نفتی و اکتشاف',
        },
        {
            src: slider10,
            description: 'شرکت صنایع پیشرفته هواخورشید',
            subdescription: 'طراحی و ساخت پنل‌های خورشیدی و توربین‌های بادی',
        },
        {
            src: slider11,
            description: 'شرکت دانش‌بنیان هیدروتک',
            subdescription: 'رصدخانه‌ها و داشبورد‌های هوش تجاری',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const selectImage = (index: any) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <section className="hero_area d-flex align-items-center boxed"
            >
                <div className="container">
                    <div className="row align-items-center mt-5 rtl">
                        <div className="col-lg-6 p-5">
                            <div className="hero_content text-end">
                                <h1>
                                    هلدینگ دانشگاهی پیشگامان فردوسی
                                    <br />
                                    پلی بین دانشگاه و صنعت
                                </h1>
                                <p>
                                    شرکت دانشگاهی پیشگامان فردوسی، با ایجاد یک مدل نوآورانه از مشارکت بخش خصوصی و دانشگاه، به تجاری‌سازی دانش
                                    و فناوری می‌پردازد.
                                </p>
                                <div className="slider_button">
                                    <div className="fump_btn home_five animate_buton">
                                        <a href="/login">ارتباط با ما
                                            <span></span>
                                        </a>
                                    </div>
                                    <div className="slider_info me-3" hidden>
                                        <span>
                                            <i className="fas fa-phone-alt ms-2"></i>
                                            <a href="#contact-us">ارتباط با ما</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6 d-flex flex-column align-items-center d-none d-md-block">
                            <div className="slider-container">
                                <div className="hero-thumb">
                                    <img
                                        src={images[currentIndex].src}
                                        alt={images[currentIndex].description}
                                        title={images[currentIndex].description}
                                        loading="lazy"
                                        className="slider-image"
                                    />
                                </div>
                                <div className="info-container">
                                    <div className="image-content text-center">
                                        <p className="image-description">{images[currentIndex].description}</p>
                                        <span className="image-subdescription">{images[currentIndex].subdescription}</span>
                                    </div>
                                    <div className="image-pagination d-flex justify-content-center">
                                        <div className="pagination">
                                            {images.map((_, i) => (
                                                <span
                                                    key={i}
                                                    onClick={() => selectImage(i)}
                                                    className={i === currentIndex ? 'active' : ''}
                                                ></span>
                                            ))}
                                        </div>
                                        <div>
                                            <span>{images.length} /</span>
                                            <span className="image-number">{currentIndex + 1}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}