import arrow from '../../../assets/images/home_one/arrow.png'
import icon1 from '../../../assets/images/home_one/feature_icon01.png'
import icon2 from '../../../assets/images/home_one/feature_icon02.png'
import icon3 from '../../../assets/images/home_one/feature_icon03.png'
import icon4 from '../../../assets/images/home_one/feature_icon04.png'

const features = [
    {
        title: 'هم‌افزایی بین دانشگاه و صنعت',
        description: `با ایجاد حلقه‌های واسط میان دانشگاه فردوسی مشهد و بخش خصوصی، این شرکت به عنوان پلی برای تسهیل ارتباط و همکاری عمل می‌کند. این هم‌افزایی موجب انتقال فناوری، شبکه‌سازی مؤثر و حل مسائل واقعی جامعه می‌شود.`,
        imgSrc: icon1,
        alt: 'هم‌افزایی بین دانشگاه و صنعت',
        number: '01'
    },
    {
        title: 'تبدیل دانش به ثروت',
        description: `شرکت دانشگاهی پیشگامان با تمرکز بر تجاری‌سازی دانش، بستری منحصربه‌فرد برای ترجمه تحقیقات علمی به محصولات و خدمات کاربردی فراهم می‌کند. این رویکرد نه‌تنها اقتصاد دانش‌بنیان را تقویت می‌کند، بلکه به بهره‌وری اقتصادی و اجتماعی جامعه نیز کمک می‌کند.`,
        imgSrc: icon2,
        alt: 'تبدیل دانش به ثروت',
        number: '02'
    },
    {
        title: 'تمرکز بر فناوری‌های NBIC',
        description: `شرکت با تمرکز بر علوم همگرا (نانوتکنولوژی، بیوتکنولوژی، فناوری اطلاعات و علوم شناختی)، به توسعه فناوری‌های نوظهور با پتانسیل اقتصادی و اجتماعی بالا می‌پردازد. این جهت‌گیری باعث می‌شود که شرکت بتواند در بازارهای پیشرفته ملی و بین‌المللی رقابت کند.`,
        imgSrc: icon3,
        alt: 'تمرکز بر فناوری‌های NBIC',
        number: '03'
    },
    {
        title: 'امکانات طلایی دانشگاه فردوسی برای شرکت‌ها',
        description: `شرکت از زیرساخت‌های پیشرفته دانشگاه فردوسی، مانند آزمایشگاه‌های مجهز، کلین‌روم، زمین‌ها و اماکن اختصاصی بهره می‌برد و این امکانات را در اختیار شرکت‌های تابعه قرار می‌دهد. این قابلیت نه‌تنها هزینه‌های عملیاتی را کاهش می‌دهد، بلکه بهره‌وری و کیفیت خدمات را نیز به‌طور قابل‌توجهی افزایش می‌دهد.`,
        imgSrc: icon4,
        alt: 'امکانات طلایی دانشگاه فردوسی برای شرکت‌ها',
        number: '04'
    }
];

export default function FeatureArea() {
    return (
        <section className="feature_area boxed" dir="rtl">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text-center">
                            <h1>ارزش‌های کلیدی در مسیر توسعه و همکاری با</h1>
                            <h1>!پیشگامان فردوسی مشهد</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {features.map((feature, i) => (
                        <div key={i} className="col-lg-3 col-md-6 text-end">
                            <div className={`feature_item ${i % 2 !== 0 ? "upper" : ""}`} dir="rtl"
                            >
                                <div className="feature_icon">
                                    <img src={feature.imgSrc} alt={feature.alt} title={feature.title} />
                                </div>
                                <div className="feature_content">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                                <div className="feature_number">
                                    <h6 className="feature_no">{feature.number}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="feature_shape bounce-animate-3">
                <img src={arrow} alt="پیکان" />
            </div>
        </section>
    );
};

