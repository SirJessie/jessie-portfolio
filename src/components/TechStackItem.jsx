import data from "../data.json";

export default function TechStackItem({ sub_key, sub_tech }) {
    return (
            <div key={sub_key} className="tech-stack-item">
                {sub_tech}
            </div>
    )
}