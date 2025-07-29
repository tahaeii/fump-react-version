import { useEffect, useState } from "react";
import kaleferdowsi from '../../../assets/img/kale-ferdowsi.png';
import "./about-area.css";


const companies = [
    { title: "ابرفردوسی", description: "سرویس‌های ابری و هوش مصنوعی", link: "https://ferdowsi.cloud" },
    { title: "هوا خورشید", description: "انرژی‌های تجدید پذیر", link: "https://saaico.com/" },
    { title: "پایا انرژی", description: "طرح های کلان نفت و گاز" },
    { title: "معماری اطلاعات", description: "فناوری اطلاعات و ارتباطات" },
    { title: "راهبران فناوری اطلاعات", description: "آی‌تی و تکنولوژی" },
    { title: "آینده تدبیر", description: "سرمایه گذاری و امور مالی" },
    { title: "پشتیبان پژوهش", description: "تولید و تعمیر تجهیزات آزمایشگاهی" },
    { title: "هیدروتجهیز", description: "صنایع غذایی، نوشیدنی و دارویی" },
    { title: "بهین صادرات", description: "صادرات و واردات" },
    { title: "مکانیک سورین", description: "ابزار دقیق" },
    { title: "پارت طرح", description: "مدیریت پروژه و مشاوره مهندسی" },
    { title: "لوتوس پیشگامان", description: "کارگزاری بیمه برخط" },
    { title: "نگین کیهان", description: "مکمل‌های دارویی، نمک کم سدیم" },
    { title: "هیدروتک توس", description: "رصدخانه هوشمند/ آب و فاضلاب", link: "https://hydrotechtoos.com/" },
    { title: "آکادمی گیم ایران", description: "آموزش و طراحی بازی" },
    { title: "پوکو", description: "پلتفرم کودک و نوجوان" },
    { title: "دکتر زاوین", description: "بازرگانی دارویی" },
    { title: "طیف کلا", description: "بازرگانی لوازم خانگی و الکترونیکی" },
    { title: "فصلینو", description: "پلتفرم جوان و خانواده" },
    { title: "وَ شُــــــــــــــمٰا", description: "مجری توانمند و متخصص", highlight: true },
];

function truncate(text: any, maxLength: any, suffix = " ...") {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + suffix : text;
}

export default function AboutArea() {


    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth < 768);
        }
        window.addEventListener("resize", handleResize);

        // cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function openLink(link: any) {
        window.open(link, "_blank");
    }



    return (
        <>
            <section className="about_area rounded-0 pb-0">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text-center">
                            <h1 className="text-white">دریچه‌ای تازه به تولید دانشی محصول</h1>
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex flex-xl-row flex-column align-items-center align-items-xl-stretch">
                    <div className="row">
                        <div
                            className="d-flex flex-wrap flex-row-reverse"
                            style={{ alignContent: "space-evenly", padding: "0 50px" }}
                        >
                            {companies.map((company, index) => (
                                <div key={index} className="col-6 col-sm-6 col-md-3">
                                    <div
                                        className={`about_area-card card text-center ${company.link ? "cursor-pointer" : ""}`}
                                        onClick={() => company.link && openLink(company.link)}
                                    >
                                        <div className={`card-body ${company.highlight ? "highlight" : ""}`}>
                                            <h5 className="card-title rtl">{company.title}</h5>
                                            <p className="card-text rtl" title={company.description}>
                                                {truncate(company.description, isSmallScreen ? 10 : 100)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-4">
                            <img src={kaleferdowsi} alt="دانشگاه فردوسی" title="دانشگاه فردوسی" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
