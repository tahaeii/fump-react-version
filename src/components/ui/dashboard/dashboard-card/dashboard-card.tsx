import React from "react";
import { dashboardCardsData } from "../../../../types/dashboard/dashboard-card.data";

const DashboardCards: React.FC = () => {
    return (
        <div className="row g-4">
            {dashboardCardsData.map((card, index) => (
                <div className="col-md-4" key={index}>
                    <div className="card shadow-sm border-0 rounded-4 p-4 h-100 d-flex flex-row align-items-center text-end">
                        <div className="flex-grow-1">
                            <h6 className="fw-bold mb-1">{card.title}</h6>
                            <p className="text-muted small mb-2">{card.description}</p>
                            <a
                                href="#"
                                className="text-success fw-medium small text-decoration-none"
                            >
                                نمایش بیشتر{" "}
                                <i className="fa-regular fa-arrow-up-left me-1"></i>
                            </a>
                        </div>
                        <div className="me-3">
                            <img src={card.icon} alt={card.title} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardCards;
