import React from 'react';
import styles from './Benefits.module.css';

const BENEFITS = [
    {
        num: '01',
        title: 'Técnica Exclusiva',
        text: 'Método próprio desenvolvido ao longo de anos. Cada aplicação é feita com precisão cirúrgica para máxima naturalidade.',
    },
    {
        num: '02',
        title: 'Naturalidade Extrema',
        text: 'Ninguém vai perceber. A textura, cor e movimento do cabelo replicam a perfeição do fio natural.',
    },
    {
        num: '03',
        title: 'Discrição Total',
        text: 'Ambiente privativo, atendimento individualizado e total respeito à privacidade de cada cliente.',
    },
    {
        num: '04',
        title: 'Atendimento Personalizado',
        text: 'Cada cliente tem um plano exclusivo. Da escolha da prótese à manutenção, tudo pensado para o seu caso.',
    },
    {
        num: '05',
        title: 'Manutenção Facilitada',
        text: 'Processo simples, rápido e econômico. Você mantém o resultado sem complicações no dia a dia.',
    },
    {
        num: '06',
        title: 'Hora Marcada',
        text: 'Sem espera, sem surpresas. Atendimento agendado para respeitar o seu tempo.',
    },
];

export default function Benefits() {
    return (
        <section className={styles.section} id="diferenciais">
            <div className="wrapper">
                <div className={styles.header}>
                    <span className="section-label">Por que nos escolher</span>
                    <h2 className="section-title">
                        Por que escolher o<br />
                        <span className="gold-text">Studio Tiago Ferrer?</span>
                    </h2>
                    <div className="divider-gold" />
                    <p className={styles.subtitle}>
                        Aqui não é salão. É um ambiente clínico, especializado e discreto — focado em um único objetivo: devolver a você a melhor versão da sua aparência.
                    </p>
                </div>

                <div className={styles.grid}>
                    {BENEFITS.map((b) => (
                        <div key={b.num} className={styles.card}>
                            <span className={styles.num}>{b.num}</span>
                            <h3 className={styles.cardTitle}>{b.title}</h3>
                            <p className={styles.cardText}>{b.text}</p>
                            <div className={styles.cardLine} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
