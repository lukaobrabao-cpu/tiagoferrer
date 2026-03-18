import React from 'react';
import styles from './Contact.module.css';

const WA_LINK = 'https://wa.me/5511919060855?text=Ol%C3%A1%20Tiago%20Ferrer%21%20Vim%20pela%20p%C3%A1gina%20da%20pr%C3%B3tese%20capilar%20e%20gostaria%20de%20aproveitar%20o%20desconto%20anunciado.%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20o%20procedimento%3F';
const MAPS_LINK = 'https://maps.google.com/?q=Rua+Benjamin+Constant+1419+Centro+Suzano+SP';

export default function Contact() {
    return (
        <section className={styles.section} id="atendimento">
            <div className="wrapper">
                <div className={styles.grid}>
                    {/* Info side */}
                    <div className={styles.info}>
                        <span className="section-label">Atendimento</span>
                        <h2 className="section-title">
                            Venha nos<br />
                            <span className="gold-text">visitar</span>
                        </h2>
                        <div className="divider-gold" />

                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon} aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <strong>Endereço</strong>
                                    <p>Rua Benjamin Constant, 1419</p>
                                    <p>Centro – Suzano/SP · CEP 08674-011</p>
                                    <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
                                        Ver no mapa →
                                    </a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon} aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <strong>Horário</strong>
                                    <p>Segunda a Sexta: 10h às 20h</p>
                                    <p>Sábado: 9h às 20h</p>
                                    <p><span className="gold-text">Apenas com hora marcada</span></p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon} aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                                    </svg>
                                </div>
                                <div>
                                    <strong>WhatsApp</strong>
                                    <p>Atendimento rápido e direto.</p>
                                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
                                        Enviar mensagem →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map / Visual side */}
                    <div className={styles.mapSide}>
                        <div className={styles.mapBox}>
                            <div className={styles.mapPlaceholder}>
                                <div className={styles.mapPin} aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                                <p className={styles.mapTitle}>Studio Tiago Ferrer</p>
                                <p className={styles.mapAddress}>Rua Benjamin Constant, 1419<br />Centro – Suzano/SP</p>
                                <a
                                    href={MAPS_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.mapBtn}
                                    id="contact-maps-btn"
                                >
                                    Abrir no Google Maps
                                </a>
                            </div>

                            <div className={styles.mapDecor} aria-hidden="true">
                                <div className={styles.mapDecorDot} />
                                <div className={styles.mapDecorRing} />
                            </div>
                        </div>

                        <div className={styles.discretionBadge}>
                            <span className={styles.discretionIcon}>🔒</span>
                            <div>
                                <strong>Ambiente 100% discreto e profissional</strong>
                                <p>Atendimento individualizado e respeito total à sua privacidade.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
