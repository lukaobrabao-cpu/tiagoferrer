import React from 'react';
import styles from './Pricing.module.css';

export default function Pricing() {
    return (
        <section className={styles.section} id="oferta">
            <div className={`wrapper ${styles.wrapper}`}>
                <div className={styles.header}>
                    <span className="section-label">Acesso Imediato</span>
                    <h2 className="section-title">
                        Sua Transformação<br />
                        <span className="gold-text">Acessível</span> como Nunca
                    </h2>
                    <div className="divider-gold" />
                    <p className={styles.subtitle}>
                        Sua autoestima não tem preço, mas agora tem condições que cabem no seu bolso.
                    </p>
                </div>

                <div className={styles.offerCardWrapper}>
                    <div className={styles.glowEffect}></div>
                    <div className={styles.offerCard}>
                        {/* Selo/Badge */}
                        <div className={styles.badgeWrapper}>
                            <span className={styles.badge}>🔥 Oferta por tempo limitado</span>
                        </div>

                        {/* Corpo do card */}
                        <div className={styles.cardContent}>
                            <div className={styles.priceOld}>
                                <span className={styles.strike}>De R$ 1.999,00</span>
                                <span>por apenas</span>
                            </div>

                            <div className={styles.priceMain}>
                                <span className={styles.installments}>10x de</span>
                                <span className={styles.currency}>R$</span>
                                <span className={styles.value}>159,90</span>
                            </div>

                            <div className={styles.priceCash}>
                                ou <strong>R$ 1.599,00</strong> à vista
                            </div>

                            {/* Gatilhos de urgência */}
                            <div className={styles.urgency}>
                                <span className={styles.pulseDot}></span>
                                <p><strong>Últimas vagas</strong> com esse desconto especial!</p>
                            </div>

                            {/* Botão ou CTA */}
                            <div className={styles.ctaWrapper}>
                                <a
                                    href="https://wa.me/5511919060855?text=Ol%C3%A1%20Tiago%20Ferrer%21%20Vim%20pela%20p%C3%A1gina%20da%20pr%C3%B3tese%20capilar%20e%20gostaria%20de%20aproveitar%20o%20desconto%20anunciado.%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20o%20procedimento%3F"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-whatsapp"
                                    style={{ width: '100%', justifyContent: 'center' }}
                                >
                                    <span>Quero Aproveitar a Oferta</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
