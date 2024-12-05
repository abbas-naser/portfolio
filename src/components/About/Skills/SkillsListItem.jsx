import "./SkillsListItem.css";

export default function SkillsListItem({ icon, title, text, doing, done }) {
  return (
    <div
      className={`skills-list-item ${doing ? "doing" : ""} ${
        done ? "done" : ""
      }`}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <div>
        {title && <span className="bold">{title}: </span>}
        <span className={`${done ? "done-text" : ""}`}>{text}</span>
      </div>
    </div>
  );
}
