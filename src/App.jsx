import { useEffect, useState } from "react";
import styles from "./App.module.css";
import SiteHeader from "./components/siteHeader";
import SiteFooter from "./components/siteFooter";
import BackToTop from "./components/backToTop";
import StudySessionPlanner from "./components/studySessionPlanner";

const App = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    useEffect(() => {
        const onScroll = () => setShowBackToTop(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <div className={styles["app-shell"]} id="top">
            <SiteHeader title="Study Day" mark="S" navItems={[["Today", "#dashboard"], ["Focus timer", "#workspace"]]} repoUrl="https://github.com/a2rp/study-session-planner" />
            <main className={styles.pageContent}>
                <StudySessionPlanner />
            </main>
            <SiteFooter repoUrl="https://github.com/a2rp/study-session-planner" />
            <BackToTop visible={showBackToTop} />
        </div>
    );
};

export default App;
