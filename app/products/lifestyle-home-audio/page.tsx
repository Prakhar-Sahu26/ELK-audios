import HeroExhibition from "@/components/HeroExhibition";
import LifestyleSplitCards from "@/components/LifestyleSplitCards";
import BruegelStyleSection from "@/components/BruegelStyleSection"
import BruegelSecondLayoutSection from "@/components/BruegelSecondLayoutSection";
import BruegelThreeCardSection from "@/components/BruegelThreeCardSection"

export default function Page() {
    return <>
        <HeroExhibition />

        {/* 👇 ADD HERE */}
        <BruegelStyleSection />
        <BruegelSecondLayoutSection />
        <BruegelThreeCardSection />
        {/* next sections */}
        <section className="studio-info bg-black">

            <div className="studio-info-inner">

                <div className="studio-info-grid text-white">

                    <h3>AN ENTERTAINMENT PRODUCTION STUDIO</h3>
                    <h3>
                        COMPANY<span> SONAR MUSIC </span>
                        LOCATION<span> DISNEY STUDIOS </span>
                        CATEGORIES FILM,<span> ADVERTISING, TELEVISION </span>
                        CITY<span> SYDNEY, AU </span>
                        SERVICES<span> MUSIC COMPOSITION & SOUND DESIGN </span>
                    </h3>

                </div>

            </div>

        </section>
    </>
}