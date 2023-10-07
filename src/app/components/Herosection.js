import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Herosection = ({title, ImageUrl}) => {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <h1>{title}</h1>
            <p>from award winning drama to block buster movies, we got you covered. browse 
                our
                selection of the latest and great movies, and find your new favourite today.
            </p>
            <Link href="/movie">
            <button>
                Explore Movies
            </button>
            </Link>

          </div>
          <div className={heroStyles.hero_image}>
            <Image src={ImageUrl} alt="watching netflix" width={500} height={500} />

          </div>
        </div>
      </div>
     
    </main>
  );
};

export default Herosection;
