import { useEffect, useState } from "react";
import "./hero-area.css";

export default function HeroArea() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            src: '/assets/img/slider/slider-pic-1.png',
            description: 'شرکت ابر فردوسی',
            subdescription: 'سرویس‌های هوش مصنوعی، سرویس‌های ابری و GPU',
        },
        {
            src: '/assets/img/slider/slider-pic-2.png',
            description: 'شرکت ابر فردوسی',
            subdescription: 'سرویس‌های ابری، سرویس‌های هوش مصنوعی و GPU',
        },
        {
            src: '/assets/img/slider/slider-pic-3.png',
            description: 'آزمایشگاه‌های پیشرفته',
            subdescription: 'آزمایشگاه‌های نانو، بیو و مرجع غذایی',
        },
        {
            src: '/assets/img/slider/slider-pic-4.png',
            description: 'شرکت صنایع پیشرفته هواخورشید',
            subdescription: 'توربین‌های بادی و پنل‌های خورشیدی',
        },
        {
            src: '/assets/img/slider/slider-pic-5.png',
            description: 'شرکت ابر فردوسی',
            subdescription: 'GPU و سرویس‌های ابری',
        },
        {
            src: '/assets/img/slider/slider-pic-6.png',
            description: 'شرکت پایا انرژی',
            subdescription: 'طرح‌‌های کلان نفتی',
        },
        {
            src: '/assets/img/slider/slider-pic-7.png',
            description: 'شرکت دانش بنیان هیدروتک ',
            subdescription: 'داشبورد‌های هوش تجاری و رصدخانه‌های هوشمند',
        },
        {
            src: '/assets/img/slider/slider-pic-8.png',
            description: 'شهر سبز',
            subdescription: 'ساختمان‌های زیرو کربن',
        },
        {
            src: '/assets/img/slider/slider-pic-9.png',
            description: 'شرکت پایا انرژی',
            subdescription: 'طرح‌‌های کلان نفتی و اکتشاف',
        },
        {
            src: '/assets/img/slider/slider-pic-10.png',
            description: 'شرکت صنایع پیشرفته هواخورشید',
            subdescription: 'طراحی و ساخت پنل‌های خورشیدی و توربین‌های بادی',
        },
        {
            src: '/assets/img/slider/slider-pic-11.png',
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