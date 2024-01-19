import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
      <div>
        <a href='/' className={styles.title}>portfolio</a>
      </div>
      <div>
        <ul className={styles.navigation}>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;