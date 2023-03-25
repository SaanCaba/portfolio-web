import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { BiCodeAlt } from "react-icons/bi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { BsLinkedin, BsGithub } from "react-icons/bs";

interface Props {
    flagActive: string;
}

function Title({ flagActive }: Props) {
    const [lang, setLang] = useState<string>(
        "https://drive.google.com/file/d/1LGB4ZcAlYw0QrcLWu1XVMJ5ZmolAPpeb/view"
    );
    useEffect(() => {
        if (localStorage.getItem("language") !== null) {
            if (localStorage.getItem("language") === "es") {
                return setLang(
                    "https://drive.google.com/file/d/1LGB4ZcAlYw0QrcLWu1XVMJ5ZmolAPpeb/view"
                );
            } else {
                console.log("hola");
                return setLang(
                    "https://drive.google.com/file/d/1kMUccoHoB9EnEE-fAxveqn8xXC5jLzOE/view?usp=sharing"
                );
            }
        }
    }, [flagActive]);
    console.log(lang);
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
                <a href={lang} target="_blank">
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
