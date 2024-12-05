import SkillsList from "./SkillsList";

import { languages } from "../../../data";
import { highlightedSkill } from "../../../data";
import { toDo } from "../../../data";

export default function Skills() {
  return (
    <div className="skills">
      {/* to learn */}
      <SkillsList title={`todo in ${new Date().getFullYear()} `} list={toDo} />
      {/* higlighted skills */}
      <SkillsList title="Highlighted Skills" list={highlightedSkill} />
      {/* languages */}
      <SkillsList title="Languages" list={languages} hasHr={false} />
    </div>
  );
}
