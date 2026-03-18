import React from 'react';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
    {
        name: 'Ricardo Alves',
        age: '38 anos',
        city: 'Suzano/SP',
        stars: 5,
        text: 'Fui ao Studio Tiago Ferrer com desconfiança. Sai de lá com um resultado que simplesmente não consigo acreditar. Ninguém, nem minha familia mais próxima, percebeu. Mudou minha vida profissional e pessoal.',
        initials: 'RA',
    },
    {
        name: 'Marcos Souza',
        age: '45 anos',
        city: 'Mogi das Cruzes/SP',
        stars: 5,
        text: 'Levei anos para tomar essa decisão. Hoje me arrependo de não ter feito antes. O Tiago é um profissional excepcional — detalhou cada etapa, me explicou tudo e entregou exatamente o que prometeu.',
        initials: 'MS',
    },
    {
        name: 'Eduardo Santos',
        age: '31 anos',
        city: 'Suzano/SP',
        stars: 5,
        text: 'Pratico esportes todos os dias, fico no sol, suado... e nunca tive nenhum problema. A fixação é incrível. Recomendo para qualquer homem que esteja sofrendo com calvície.',
        initials: 'ES',
    },
];

export default function Testimonials() {
    return (
        <section className={styles.section} id="depoimentos">
            <div className="wrapper">
                <div className={styles.header}>
                    <span className="section-label">Prova Social</span>
                    <h2 className="section-title">
                        Mais de <span className="gold-text">1.200 homens</span><br />
                        transformados em Suzano e região.
                    </h2>
                    <div className="divider-gold" />
                </div>

                <div className={styles.grid}>
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.stars} aria-label={`${t.stars} estrelas`}>
                                {Array.from({ length: t.stars }).map((_, j) => (
                                    <span key={j} className={styles.star} aria-hidden="true">★</span>
                                ))}
                            </div>

                            <p className={styles.text}>"{t.text}"</p>

                            <div className={styles.author}>
                                <div className={styles.avatar} aria-hidden="true">
                                    {t.initials}
                                </div>
                                <div className={styles.authorInfo}>
                                    <span className={styles.name}>{t.name}</span>
                                    <span className={styles.meta}>{t.age} · {t.city}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.trustBadge}>
                    <div className={styles.trustItem}>
                        <span className={styles.trustNum}>1.200+</span>
                        <span className={styles.trustLabel}>Clientes atendidos</span>
                    </div>
                    <div className={styles.trustDivider} />
                    <div className={styles.trustItem}>
                        <span className={styles.trustNum}>10+</span>
                        <span className={styles.trustLabel}>Anos de expertise</span>
                    </div>
                    <div className={styles.trustDivider} />
                    <div className={styles.trustItem}>
                        <span className={styles.trustNum}>5.0 ★</span>
                        <span className={styles.trustLabel}>Avaliação média</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
