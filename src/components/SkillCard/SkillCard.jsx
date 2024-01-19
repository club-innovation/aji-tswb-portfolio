import styles from './SkillCard.module.css';

function SkillCard({img, title, description}) {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={img} alt={title} />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default SkillCard;