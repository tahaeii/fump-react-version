import AboutArea from "./about-area/about-area";
import FeatureArea from "./feature-area/feature-area";
import HeroArea from "./hero-area/hero-area";
import MottoArea from "./motto-area/motto-area";

export default function Public() {
    return (
        <>
            <HeroArea />
            <FeatureArea />
            <AboutArea />
            <MottoArea />
        </>
    )
}