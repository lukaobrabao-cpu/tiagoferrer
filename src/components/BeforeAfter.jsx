import React from 'react';
import styles from './BeforeAfter.module.css';

// ─── Imagens da pasta /src/gallery ────────────────────────────────────────────
const beforeImgs = import.meta.glob('../gallery/antes*.{jpg,jpeg,png,webp,jfif}', { eager: true });
const afterImgs = import.meta.glob('../gallery/depois*.{jpg,jpeg,png,webp,jfif}', { eager: true });

function buildPairs() {
    const befores = Object.entries(beforeImgs)
        .map(([p, m]) => ({ num: parseInt(p.match(/antes(\d+)/i)?.[1] ?? '0'), src: m.default }))
        .sort((a, b) => a.num - b.num);
    const afters = Object.entries(afterImgs)
        .map(([p, m]) => ({ num: parseInt(p.match(/depois(\d+)/i)?.[1] ?? '0'), src: m.default }))
        .sort((a, b) => a.num - b.num);
    return befores.map((b, i) => ({
        before: b.src,
        after: afters[i]?.src ?? b.src,
        label: `Transformação #${b.num}`,
    }));
}

const PAIRS = buildPairs();

// ─── Card individual ──────────────────────────────────────────────────────────
function StaticCard({ pair, index }) {
    return (
        <div className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className={styles.imagePair}>
                {/* Antes */}
                <div className={styles.imageContainer}>
                    <span className={`${styles.badgeLabel} ${styles.badgeBefore}`}>Antes</span>
                    <img
                        src={pair.before}
                        alt={`${pair.label} – antes`}
                        className={styles.image}
                        draggable={false}
                    />
                </div>
                {/* Depois */}
                <div className={styles.imageContainer}>
                    <span className={`${styles.badgeLabel} ${styles.badgeAfter}`}>Depois</span>
                    <img
                        src={pair.after}
                        alt={`${pair.label} – depois`}
                        className={styles.image}
                        draggable={false}
                    />
                </div>
            </div>
            <p className={styles.cardLabel}>{pair.label}</p>
        </div>
    );
}

// ─── Seção ────────────────────────────────────────────────────────────────────
export default function BeforeAfter() {
    if (PAIRS.length === 0) return (
        <section className={styles.section} id="galeria">
            <div className="wrapper" style={{ textAlign: 'center', padding: '80px 0' }}>
                <p style={{ color: '#555', fontSize: '0.9rem' }}>
                    Coloque <strong>antes1.jpg</strong>, <strong>depois1.jpg</strong> em <code>src/gallery/</code>
                </p>
            </div>
        </section>
    );

    return (
        <section className={styles.section} id="galeria">
            <div className="wrapper">
                <div className={styles.header}>
                    <span className="section-label">Resultados Reais</span>
                    <h2 className="section-title">Antes e <span className="gold-text">Depois</span></h2>
                    <div className="divider-gold" />
                    <p className={styles.subtitle}>
                        Transformações reais de clientes do Studio Tiago Ferrer.
                    </p>
                </div>
                <div className={styles.grid}>
                    {PAIRS.map((p, i) => <StaticCard key={i} pair={p} index={i} />)}
                </div>
            </div>
        </section>
    );
}
