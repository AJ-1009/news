import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.css";
function Navbar({items}) {
  const [open, setopen] = useState(false);
  return (
    <div className={styles["navbar"]}>
      <div className={styles["burger"]} onClick={() => setopen(!open)}>
        &equiv;
      </div>
      <div
        className={`${styles["navbar-links"]} ${
          open ? styles["mobile-view"] : ""
        }`}
      >
        {items?.map((links)=>(
          <Link href={links.link} key={links.name} >
            <div className={styles['nav-links']}>
              {links.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
