import React from "react";
import { DetailsProjects } from "../../data/data";

import styles from "./index.module.css";
import vercelLogo from "../../assets/vercerlLogo.png";
import githubLogo from "../../assets/githublogo.png";
import { useTranslation } from "react-i18next";
interface Props {
    project: DetailsProjects;
}

function ProjectItem({ project }: Props) {
    const [t] = useTranslation("global");

    return (
        <div className={styles.contItemP}>
            <div className={styles.contImgDesc}>
                <img
                    src={project.img}
                    alt={project.name}
                    className={styles.image}
                />
                <div className={styles.contDesc}>
                    <p>{t(project.description)}</p>
                    <div className={styles.contLogos}>
                        <a target="_blank" href={project.deploy as string}>
                            <img src={vercelLogo} alt="vercel logo" />
                        </a>
                        <a target="_blank" href={project.repo as string}>
                            <img src={githubLogo} alt="Github logo" />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.contHover}>
                <div className={styles.headerHover}>
                    <span>{t(project.name)}</span>
                </div>
                <div className={styles.contTecnologias}>
                    {project.tecnologias?.map((el, i) => {
                        return (
                            <img key={i} src={el} alt="Tecnología proyecto" />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;
