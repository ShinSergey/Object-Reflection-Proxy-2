export default function Destructuring(char) {
  const { special } = char;
  const skills = [];
  special.forEach((skill) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = skill;
    skills.push({
      id, name, description, icon,
    });
  });
  return skills;
}
