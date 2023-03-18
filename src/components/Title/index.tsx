import React from "react";
import styles from "./index.module.css";
import { BiCodeAlt } from "react-icons/bi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
function Title() {
    return (
        <>
            <div className={styles.contTitle}>
                <h1 className={styles.titleText}>Santiago Caballero</h1>
                <div className={styles.contPIcon}>
                    <p className={styles.titleP}>Frontend Developer</p>{" "}
                    <BiCodeAlt size={30} className={styles.icon} />
                </div>
            </div>
            <div className={styles.contIcons}>
                <a
                    target={"_blank"}
                    href="Santiago Caballero - FR CV.pdf"
                    download="Santiago Caballero - FR CV.pdf"
                >
                    <HiOutlineDocumentDownload
                        className={styles.iconSocialMedia}
                    />
                </a>
                <a
                    target={"_blank"}
                    href="https://www.linkedin.com/in/santiago-caballero-82aa241a1/"
                >
                    <BsLinkedin className={styles.iconSocialMedia} />
                </a>
                <a target={"_blank"} href={"https://github.com/SaanCaba"}>
                    <BsGithub className={styles.iconSocialMedia} />
                </a>
            </div>
        </>
    );
}

export default Title;
