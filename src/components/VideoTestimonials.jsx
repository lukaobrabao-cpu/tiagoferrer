import React, { useRef, useEffect, useState } from 'react';
import styles from './VideoTestimonials.module.css';

// ─── Configure os vídeos aqui ─────────────────────────────────────────────────
const VIDEOS = [
    { type: 'file', id: 'video2.mp4', name: 'Carlos', tag: 'Voltou a se sentir bem' },
    { type: 'file', id: 'video1.mp4', name: 'José', tag: 'Resultado em 1 dia' },
    { type: 'file', id: 'video3.mp4', name: 'Elsio', tag: 'Ninguém percebeu' },
    { type: 'file', id: 'video4.mp4', name: 'Roberto', tag: 'Mudou minha vida' },
];

// ─── Card de vídeo individual ─────────────────────────────────────────────────
function VideoCard({ video, index }) {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(true);

    // IntersectionObserver: play quando visível, pause quando sair da tela
    useEffect(() => {
        const el = videoRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Tenta reproduzir — captura erro (política de autoplay)
                    el.play().catch(() => {});
                } else {
                    el.pause();
                }
            },
            { threshold: 0.4 } // começa a tocar quando 40% do vídeo está visível
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Sincroniza o atributo muted com o estado
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = muted;
        }
    }, [muted]);

    const toggleMute = (e) => {
        e.stopPropagation();
        setMuted(prev => !prev);
    };

    if (video.type === 'youtube') {
        return (
            <div className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={styles.tag}>
                    <span className={styles.tagDot} />
                    {video.tag}
                </div>
                <div className={styles.videoWrap}>
                    <iframe
                        className={styles.iframe}
                        src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                        title={video.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
                <div className={styles.cardFooter}>
                    <div className={styles.avatar}>{video.name.charAt(0)}</div>
                    <div>
                        <p className={styles.clientName}>{video.name}</p>
                        <p className={styles.clientSub}>Cliente verificado ✓</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>

            {/* Badge da tag emocional */}
            <div className={styles.tag}>
                <span className={styles.tagDot} />
                {video.tag}
            </div>

            {/* Player de vídeo */}
            <div className={styles.videoWrap}>
                <video
                    ref={videoRef}
                    className={styles.videoEl}
                    playsInline
                    muted
                    loop
                    preload="auto"
                    onClick={() => {
                        const el = videoRef.current;
                        if (!el) return;
                        el.paused ? el.play() : el.pause();
                    }}
                >
                    <source src={`/videos/${video.id}`} />
                </video>

                {/* Botão de mute/unmute — bem visível para qualquer pessoa */}
                <button
                    className={`${styles.muteBtn} ${muted ? styles.muteBtnActive : ''}`}
                    onClick={toggleMute}
                    aria-label={muted ? 'Ativar som' : 'Silenciar'}
                >
                    {muted ? (
                        <>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0017.73 18l2 2.01L21 18.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                            </svg>
                            <span>Toque para ouvir</span>
                        </>
                    ) : (
                        <>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                            </svg>
                            <span>Silenciar</span>
                        </>
                    )}
                </button>
            </div>

            {/* Nome do cliente */}
            <div className={styles.cardFooter}>
                <div className={styles.avatar}>
                    {video.name.charAt(0)}
                </div>
                <div>
                    <p className={styles.clientName}>{video.name}</p>
                    <p className={styles.clientSub}>Cliente verificado ✓</p>
                </div>
            </div>
        </div>
    );
}

// ─── Seção principal ──────────────────────────────────────────────────────────
export default function VideoTestimonials() {
    return (
        <section className={styles.section} id="depoimentos-video">
            <div className="wrapper">

                {/* Cabeçalho persuasivo */}
                <div className={styles.header}>
                    <span className="section-label">Prova Social Real</span>
                    <h2 className="section-title">
                        Eles tinham as mesmas{' '}
                        <span className="gold-text">dúvidas que você</span>
                    </h2>
                    <div className="divider-gold" />
                    <p className={styles.subtitle}>
                        Veja o que nossos clientes dizem após a transformação.
                        Sem edição, sem filtro — experiências reais de pessoas reais.
                    </p>
                </div>

                {/* Dores em blocos grandes */}
                <div className={styles.objections}>
                    {[
                        {
                            icon: '😔',
                            pain: '"E as pessoas vao perceber?"',
                            answer: 'Ninguém percebe. A prótese é idêntica ao seu cabelo.',
                            client: 'Carlos tinha esse medo. Hoje ri da situação.',
                        },
                        {
                            icon: '💸',
                            pain: '"Vale o investimento?"',
                            answer: 'O que custa mais: investir na autoestima ou viver com vergonha?',
                            client: 'José hesitou 2 anos. Se arrepende de não ter feito antes.',
                        },
                        {
                            icon: '😰',
                            pain: '"E se eu me arrepender?"',
                            answer: 'Em 10+ anos, nenhum cliente pediu para desfazer.',
                            client: 'Elsio disse isso antes da avaliação gratuita.',
                        },
                        {
                            icon: '⏳',
                            pain: '"Não tenho tempo para manutenção."',
                            answer: 'Você vai ao estúdio menos do que ao barbeiro.',
                            client: 'Roberto encaixa na hora do almoço.',
                        },
                    ].map((o, i) => (
                        <div key={i} className={styles.objectionItem}>
                            <div className={styles.objectionTop}>
                                <span className={styles.objectionIcon}>{o.icon}</span>
                                <p className={styles.objectionPain}>{o.pain}</p>
                            </div>
                            <p className={styles.objectionAnswer}>{o.answer}</p>
                            <p className={styles.objectionClient}>💬 {o.client}</p>
                        </div>
                    ))}
                </div>

                {/* Grid de vídeos */}
                <div className={styles.grid}>
                    {VIDEOS.map((v, i) => (
                        <VideoCard key={i} video={v} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}
