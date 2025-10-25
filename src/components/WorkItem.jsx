import React from "react";
import { Link } from "react-router-dom";

export default function WorkItem({ workData }) {
    const workDataLength = workData && workData.length > 5 ? true : false;

    return (
        <>
            <div className={workDataLength ? "work-item-content" : "work-item-content button-hidden"}>
            {
                workData && workData.slice(0, 5).map((work, index) => (
                    <div className="work-item" key={index}>
                        <span className="work-item-company">{work.company}</span>
                        <span className="work-item-role">{work.role}</span>
                        <span className="work-item-duration">{work.duration}</span>
                    </div>
                ))
            }
            </div>
            {workDataLength ? (
                <Link to="/work" className="work-item-button link">
                    <span>View All</span><i className="material-icons">arrow_forward</i>
                </Link>
            ) : null}
        </>
    )
}