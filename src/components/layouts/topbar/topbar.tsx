export default function TopBar() {
    return (
        <nav className="navbar top-bar bg-white border-bottom rounded-3 shadow-sm px-4 py-3 my-3">
            <div className="container-fluid p-0">
                <div className="d-flex align-items-center w-100 position-relative">

                    <div className="d-flex align-items-center d-xl-block">
                        <a className="navbar-brand" href="/">
                            <img className="light-mode-item navbar-brand-item h-30px" src="assets/img//logo/logo-dark.svg" alt="" />
                        </a>
                    </div>

                    <div className="ms-xl-auto">

                    </div>

                    <div className="dropdown">
                        <a className=" p-0" id="notificationDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="assets/img/notification.svg" alt="notification" title="Notifications" />
                        </a>

                        <ul className="dropdown-menu dropdown-menu-start p-0 mt-2 shadow notification-dropdown"
                            aria-labelledby="notificationDropdown">
                            <div className="notification-scroll-area">
                                <li>
                                    <div className="notification-item text-end rtl">
                                        <p className="title">عنوان اعلان</p>
                                        <p className="text text-justify">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                            گرافیک
                                            است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...
                                        </p>
                                        <div className="footer">
                                            <span>۸ ساعت قبل</span>
                                            <a href="#">
                                                نمایش بیشتر
                                                <i className="fa-regular fa-arrow-left"></i>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="notification-item text-end rtl">
                                        <p className="title">عنوان اعلان</p>
                                        <p className="text text-justify">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                            گرافیک
                                            است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...
                                        </p>
                                        <div className="footer">
                                            <span>۸ ساعت قبل</span>
                                            <a href="#">
                                                نمایش بیشتر
                                                <i className="fa-regular fa-arrow-left"></i>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="notification-item text-end rtl">
                                        <p className="title">عنوان اعلان</p>
                                        <p className="text text-justify">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                            گرافیک
                                            است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...
                                        </p>
                                        <div className="footer">
                                            <span>۸ ساعت قبل</span>
                                            <a href="#">
                                                نمایش بیشتر
                                                <i className="fa-regular fa-arrow-left"></i>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="notification-item text-end rtl">
                                        <p className="title">عنوان اعلان</p>
                                        <p className="text text-justify">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                            گرافیک
                                            است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...
                                        </p>
                                        <div className="footer">
                                            <span>۸ ساعت قبل</span>
                                            <a href="#">
                                                نمایش بیشتر
                                                <i className="fa-regular fa-arrow-left"></i>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <li>
                                <div className="notification-footer text-center p-3">
                                    <i className="fa-regular fa-arrow-left me-1"></i>
                                    <a href="/alert-box-view">نمایش اعلان ها</a>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )
}