import { useState } from "react";
import TechStackItem from "./TechStackItem";

export default function TechStack({ techData }) {
    return (
        <div className="tech-stack-content">
            {techData && techData.map((tech, index) => (
                <div className="tech-stack-content-group" key={index}>
                    <div className="tech-stack-title">{tech.title}</div>
                    <div className="tech-stack-items">
                        {tech && tech.items.map((sub_tech, sub_index) => (
                            <TechStackItem key={sub_index} sub_tech={sub_tech}  />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}