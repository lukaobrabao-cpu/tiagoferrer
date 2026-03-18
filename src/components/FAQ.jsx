import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQS = [
    {
        q: 'Fica natural mesmo?',
        a: 'Sim, 100%. A prótese capilar moderna utiliza fibras que replicam com perfeição a textura, cor e movimento do cabelo natural. Pessoas próximas a você não vão perceber — a menos que você conte.',
    },
    {
        q: 'O procedimento dói?',
        a: 'Não há qualquer dor. O processo de aplicação é não invasivo e confortável. Você sai andando com um novo visual em uma única sessão.',
    },
    {
        q: 'Posso molhar o cabelo?',
        a: 'Sim! Você pode tomar banho, nadar e usar piscina normalmente. A fixação utilizada garante total segurança na presença de água.',
    },
    {
        q: 'Posso praticar esportes?',
        a: 'Pode, sem restrições. A fixação é projetada para aguentar suor, atrito e esforço físico intenso — ideal para homens ativos.',
    },
    {
        q: 'Quanto tempo dura a prótese?',
        a: 'Com os cuidados adequados e manutenções regulares, a prótese tem excelente durabilidade. Na média, cada manutenção é feita a cada 3 a 6 semanas.',
    },
    {
        q: 'Preciso raspar o cabelo?',
        a: 'Depende do grau de calvície e da técnica escolhida. No Studio Tiago Ferrer, avaliamos cada caso individualmente para encontrar a melhor solução para você.',
    },
    {
        q: 'Como funciona a manutenção?',
        a: 'A manutenção é simples, rápida e acessível. Você agenda uma consulta, a prótese é reposicionada e ajustada — e você sai com o visual perfeito novamente.',
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section className={styles.section} id="duvidas">
            <div className="wrapper">
                <div className={styles.header}>
                    <span className="section-label">Tire Suas Dúvidas</span>
                    <h2 className="section-title">
                        Principais<br />
                        <span className="gold-text">Dúvidas</span>
                    </h2>
                    <div className="divider-gold" />
                </div>

                <div className={styles.list}>
                    {FAQS.map((item, i) => (
                        <div
                            key={i}
                            className={`${styles.item} ${open === i ? styles.active : ''}`}
                        >
                            <button
                                className={styles.question}
                                onClick={() => setOpen(open === i ? null : i)}
                                aria-expanded={open === i}
                                id={`faq-btn-${i}`}
                            >
                                <span>{item.q}</span>
                                <span className={styles.icon} aria-hidden="true">
                                    {open === i ? '−' : '+'}
                                </span>
                            </button>

                            <div
                                className={styles.answerWrap}
                                style={{ maxHeight: open === i ? '300px' : '0' }}
                            >
                                <p className={styles.answer}>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
