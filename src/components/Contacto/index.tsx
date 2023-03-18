import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./index.module.css";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import Anim from "../../lottie/contact.json";
import { handleErrorForm } from "../../utils/handleContactForm";
import { useTranslation } from "react-i18next";

const Loader = () => {
    return (
        <div className={styles.contSpinner}>
            <div className={styles.loadSpinner}></div>
        </div>
    );
};

function Contact() {
    const form = useRef<any>();
    const [loading, setLoading] = useState(false);
    const [states, setStates] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });
    const [t] = useTranslation("global");

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errorResponse = handleErrorForm(states);
        if (errorResponse) {
            return Swal.fire({
                icon: "error",
                html: `<div style="font-family:'Poppins'">${t(
                    errorResponse
                )}</div>`,
                background: "black",
                iconColor: "red",
                color: "white",
                confirmButtonColor: "#ff4d40",
                confirmButtonText: "Continuar",
            });
        }
        setLoading(true);
        emailjs
            .sendForm(
                "service_8xn1126",
                "template_afn7muo",
                form.current as any,
                "gsBOg-q0c5EHAnEPY"
            )
            .then(
                (result) => {
                    setStates({
                        nombre: "",
                        email: "",
                        mensaje: "",
                    });
                    setLoading(false);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div id="contacto" className={styles.contContact}>
            <div className={styles.contAnimLottie}>
                <Lottie className={styles.lottie} animationData={Anim} />
            </div>
            <form onSubmit={(e) => onSubmitForm(e)} ref={form}>
                <section>
                    <label className={styles.label}>{t("form.name")}: </label>
                    <input
                        className={styles.input}
                        placeholder={(t("form.name") as string) + "..."}
                        name="user_name"
                        type="text"
                        onChange={(e) =>
                            setStates({
                                ...states,
                                nombre: e.target.value,
                            })
                        }
                        value={states.nombre}
                    />
                </section>

                <section>
                    <label className={styles.label} htmlFor="">
                        Email:{" "}
                    </label>
                    <input
                        className={styles.input}
                        placeholder="Email..."
                        name="user_email"
                        type="text"
                        onChange={(e) =>
                            setStates({
                                ...states,
                                email: e.target.value,
                            })
                        }
                        value={states.email}
                    />
                </section>

                <section className={styles.textAreaSection}>
                    <label className={styles.label} htmlFor="">
                        {t("form.message")}:{" "}
                    </label>
                    <textarea
                        className={styles.textarea}
                        name="message"
                        onChange={(e) =>
                            setStates({
                                ...states,
                                mensaje: e.target.value,
                            })
                        }
                        value={states.mensaje}
                    />
                </section>

                <div className={styles.contBtn}>
                    <button
                        className={styles.btn}
                        style={{ cursor: "pointer" }}
                        type="submit"
                    >
                        {loading ? <Loader /> : t("form.send")}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
