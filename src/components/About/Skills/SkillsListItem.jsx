import "./SkillsListItem.css";

export default function SkillsListItem({
  icon,
  title,
  text,
  learning,
  learned,
}) {
  return (
    <div
      className={`skills-list-item ${learning ? "skill-learning" : ""} ${
        learned ? "skill-learned" : ""
      }`}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <div>
        {title && <span className="bold">{title}: </span>}
        <span className={`${learned ? "skill-learned-text" : ""}`}>
          {text}
          {learning && " -Learning-"}
        </span>
      </div>
    </div>
  );
}
