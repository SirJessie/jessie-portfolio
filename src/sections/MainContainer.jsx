import Card from "../components/Card";
import data from "../data.json";
import TechStack from "../components/TechStack";
import About from "../Pages/About";
import WorkItem from "../components/WorkItem";

export default function MainContainer() {
    const aboutHeader = {
        headerIcon: <i className="fa-solid fa-address-card icon"></i>, 
        headerTitle: <><span>About</span></>,
        headerButton: null,
        headerLink: null,
    };

    const techStackHeader ={
        headerIcon: <i className="fa-solid fa-code icon"></i>, 
        headerTitle: <span>Tech Stack</span>,
        // headerButton: <><span>View More</span><i className="material-icons">arrow_forward</i></>,
        // headerLink: "/tech-stacks",
        headerButton: null,
        headerLink: null,
    }

    const expHeader = {
        headerIcon: <i className="fa-solid fa-briefcase icon"></i>, 
        headerTitle: <span>Experience</span>,
        headerButton: null,
        headerLink: null,
    };

    return (
        <div className="main-container">
            <div className="sectionAbout">
                <Card header={aboutHeader} content={<About />} footer=""/>
            </div>
            <div className="sectionTechStack">
                <Card header={techStackHeader} content={<TechStack techData={data.techstack} />} footer=""/>
            </div>
            <div className="sectionExp">
                <Card header={expHeader} content={<WorkItem workData={data.work} />} footer=""/>
            </div>
        </div>
    );
}