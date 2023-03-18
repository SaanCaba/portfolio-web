import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./index.module.css";

import { GoPerson } from "react-icons/go";
import {
    AiOutlineMenu,
    AiFillFolder,
    AiOutlineMail,
    AiOutlineClose,
} from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function SideBar() {
    const [active, setActive] = useState<boolean>(false);
    const [t, i18n] = useTranslation("global");

    return (
        <div className={active ? styles.contSideBarActive : styles.contSideBar}>
            <div className={styles.contBtnMenu}>
                {!active ? (
                    <AiOutlineMenu
                        color="white"
                        onClick={() => setActive(!active)}
                        size={30}
                    />
                ) : (
                    <AiOutlineClose
                        color="black"
                        onClick={() => setActive(!active)}
                        size={30}
                    />
                )}
            </div>
            <div
                className={
                    active ? styles.contMenuActive : styles.contMenuInactive
                }
            >
                {active && (
                    <menu>
                        <ul className={styles.contIconsMenu}>
                            <li className={styles.licont}>
                                <GoPerson
                                    size={33}
                                    className={styles.icon}
                                    color="black"
                                />
                                <div className={styles.contSpanHr}>
                                    <Link
                                        to="sobre-mi"
                                        spy={true}
                                        offset={-50}
                                        duration={500}
                                        smooth={true}
                                        className={styles.scrollLink}
                                    >
                                        <span className={styles.iconSpan}>
                                            {t("sidebar.about-me")}
                                            <hr className={styles.hrSpan} />
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            <li className={styles.licont}>
                                <AiFillFolder
                                    size={33}
                                    className={styles.icon}
                                    color="black"
                                />

                                <div className={styles.contSpanHr}>
                                    <Link
                                        to="proyectos"
                                        spy={true}
                                        offset={-20}
                                        duration={500}
                                        smooth={true}
                                        className={styles.scrollLink}
                                    >
                                        <span className={styles.iconSpan}>
                                            {t("sidebar.projects")}
                                            <hr className={styles.hrSpan} />
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            <li className={styles.licont}>
                                <BsTools
                                    size={33}
                                    className={styles.icon}
                                    color="black"
                                />
                                <div className={styles.contSpanHr}>
                                    <Link
                                        to="tecnologias"
                                        spy={true}
                                        offset={-150}
                                        duration={500}
                                        smooth={true}
                                        className={styles.scrollLink}
                                    >
                                        <span className={styles.iconSpan}>
                                            {t("sidebar.technologies")}
                                            <hr className={styles.hrSpan} />
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            <li className={styles.licont}>
                                <AiOutlineMail
                                    className={styles.icon}
                                    size={33}
                                    color="black"
                                />
                                <div className={styles.contSpanHr}>
                                    <Link
                                        to="contacto"
                                        spy={true}
                                        offset={0}
                                        duration={500}
                                        smooth={true}
                                        className={styles.scrollLink}
                                    >
                                        <span className={styles.iconSpan}>
                                            {t("sidebar.contact")}
                                            <hr className={styles.hrSpan} />
                                        </span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </menu>
                )}
            </div>
        </div>
    );
}

export default SideBar;
