import { useState } from "react";
import "./navigation.css";

const Navigation = () => {
    const menuItems = [
        { title: 'خانه', link: '' },
        { title: 'درباره ما', link: '#about-us' },
        { title: 'پروژه ها', link: '#' },
        { title: 'سرمایه گذاری', link: '#' },
        { title: 'وبلاگ', link: '#' },
        { title: 'تماس با ما', link: '#contact-us' }
    ];

    const handleClick = (e: React.MouseEvent, link: string) => {
        if (link === "#") {
            e.preventDefault();
            alert("در حال توسعه، به‌زودی فعال می‌شود");
        }
    };

    return (
        <>
            <div className="fump-header-area upper" id="sticky-header">
                <div className="container">
                    <div className="row align-items-center rtl">
                        <div className="col-lg-2 pt-10">
                            <div className="header-logo">
                                <a href="#">
                                    <img src="../../assets/images/Logo-1.svg" alt="لوگو" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="header-menu">
                                <ul className="nav_scroll">
                                    {menuItems.map((item, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={item.link !== "#" ? item.link : undefined}
                                                className={item.link === "#" ? "blurred-item" : ""}
                                                onClick={(e) => handleClick(e, item.link)}
                                                title={
                                                    item.link === "#"
                                                        ? "در حال توسعه، به‌زودی فعال می‌شود"
                                                        : ""
                                                }
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 pt-10">
                            <div className="header-button">
                                <a href="/companies">
                                    شرکت‌های ما <i className="bi bi-arrow-left me-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none">
                <div className="mobile-menu">
                    <nav className="header-menu">
                        <ul className="nav_scroll">
                            {menuItems.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navigation;
