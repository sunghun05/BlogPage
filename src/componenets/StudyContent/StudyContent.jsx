import "./StudyContent.css"

function StudyContent({header, data }) {
    return(
        <>
            <div className="contents-wrapper">
                <h2>{header}</h2>
                <div className="content-wrapper">
                    {Object.values(data).map((item, index) => (
                            <div key={index} className="content">
                                <span className="study-content-title">{item.Name}</span>
                                <ul className="categories">{item['Categories'].map((cat, idx)=>{
                                    return (<li className="category" key={idx}>{cat}</li>);
                                })}</ul>
                            </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default StudyContent;