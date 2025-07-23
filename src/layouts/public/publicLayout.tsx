import { Outlet } from "react-router-dom";
import Navigation from "../../components/layouts/navigation/navigation";
import Footer from "../../components/layouts/footer/footer";

// Layout component for the index section of the app
const PublicLayout = () => {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default PublicLayout;
