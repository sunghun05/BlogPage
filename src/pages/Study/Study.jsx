import Header from "../../componenets/Header/Header.jsx";
import StudyContent from "../../componenets/StudyContent/StudyContent.jsx";
import "./Study.css"
import dbName from "../../../public/db.json"

import Footer from "../../componenets/Footer/Footer.jsx";

function Study() {
    //https://api.notion.com/v1/databases/{}/query

    return (
        <>
            <Header/>
            <div className="page-wrapper">
                <h1 className="page-title">Study</h1>
                <StudyContent data={dbName.ComputerVision} header="Computer Vision" />
            </div>
            <Footer/>
        </>
    );
}
export default Study;
