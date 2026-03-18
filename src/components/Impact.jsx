import React from 'react';
import styles from './Impact.module.css';

const IMPACT_ITEMS = [
    {
        icon: '💭',
        title: 'Autoestima abalada',
        text: 'Acordar todo dia e evitar o espelho. Não é só vaidade — é a relação que você tem consigo mesmo.',
    },
    {
        icon: '🤝',
        title: 'Segurança comprometida',
        text: 'Apertos de mão que distraem. Reuniões onde a atenção vai para o topo da cabeça, não para suas palavras.',
    },
    {
        icon: '💼',
        title: 'Vida profissional',
        text: 'Aparência importa no mundo profissional. Sentir-se bem consigo mesmo reflete diretamente na sua performance.',
    },
    {
        icon: '❤️',
        title: 'Relacionamentos',
        text: 'A calvície precoce afeta a forma como você se apresenta — e como você acredita que os outros te enxergam.',
    },
];

export default function Impact() {
    return (
        <section className={styles.section} id="impacto">
            <div className={`wrapper ${styles.inner}`}>
                <div className={styles.textSide}>
                    <span className="section-label">O Problema Real</span>
                    <h2 className="section-title">
                        A calvície afeta mais<br />do que a <span className="gold-text">aparência.</span>
                    </h2>
                    <div className="divider-gold" />
                    <p className={styles.bodyText}>
                        Estudos mostram que homens com calvície precoce relatam até <strong>3x mais insatisfação com a autoimagem</strong> do que homens com cabelo. Não é frescura. É um impacto real na vida real.
                    </p>
                    <p className={styles.bodyText}>
                        Você não precisa conviver com isso. A prótese capilar moderna é a solução mais natural, segura e definitiva do mercado — e o Studio Tiago Ferrer é referência em Suzano e região.
                    </p>
                </div>

                <div className={styles.cardGrid}>
                    {IMPACT_ITEMS.map((item, i) => (
                        <div key={i} className={styles.card}>
                            <span className={styles.cardIcon} aria-hidden="true">{item.icon}</span>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
