import "./SkillsList.css";
import SkillsListItem from "./SkillsListItem";

export default function SkillsList({ title, hasHr = true, list }) {
  return (
    <div className="skills-list">
      <h2 className="list-title">{title}</h2>
      {list.map((skill, index) => {
        return (
          <SkillsListItem
            key={index}
            icon={skill.icon}
            title={skill.title}
            text={skill.text}
            done={skill.done}
            doing={skill.doing}
          />
        );
      })}

      {hasHr && <hr />}
    </div>
  );
}
