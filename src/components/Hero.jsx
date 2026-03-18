import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from './Hero.module.css';

const WA_LINK =
    'https://wa.me/5511919060855?text=Ol%C3%A1%20Tiago%20Ferrer%21%20Vim%20pela%20p%C3%A1gina%20da%20pr%C3%B3tese%20capilar%20e%20gostaria%20de%20aproveitar%20o%20desconto%20anunciado.%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20o%20procedimento%3F';

const TOTAL_FRAMES = 20;

// ─── Importa as 35 imagens de /src/images ───────────────────────────────────
// Arquivos nomeados: ezgif-frame-001.png ... ezgif-frame-035.png
const FRAMES = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
    const n = String(i + 1).padStart(3, '0'); // 001, 002, ... 035
    return new URL(`../images/ezgif-frame-${n}.png`, import.meta.url).href;
});

// Fallback SVG exibido quando a imagem ainda não carregou
const PLACEHOLDER =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='700' viewBox='0 0 900 700'%3E%3Crect fill='%230A0A0A' width='900' height='700'/%3E%3Ctext x='450' y='360' text-anchor='middle' font-family='Georgia,serif' font-size='18' fill='%23333'%3ECarregando...%3C/text%3E%3C/svg%3E";

// ─── Narrativa por fase de frames ────────────────────────────────────────────
const PHASES = [
    { from: 0, to: 9, text: 'Cansado de se sentir inseguro com a calvície?' },
    { from: 10, to: 21, text: 'Existe uma solução natural, discreta e imperceptível.' },
    { from: 22, to: 34, text: 'Recupere sua imagem. Recupere sua confiança.' },
];

function getPhase(frameIdx) {
    return PHASES.find((p) => frameIdx >= p.from && frameIdx <= p.to) || PHASES[0];
}

// ─── Componente ───────────────────────────────────────────────────────────────
export default function Hero() {
    const wrapperRef = useRef(null); // container alto (scroll space)
    const stickyRef = useRef(null); // painel fixo 100vh
    const canvasRef = useRef(null); // <canvas> renderiza os frames
    const images = useRef([]);   // imagens pré-carregadas
    const loadedFlags = useRef(Array(TOTAL_FRAMES).fill(false));

    const [frameIdx, setFrameIdx] = useState(0);
    const [phaseText, setPhaseText] = useState(PHASES[0].text);
    const [textAnim, setTextAnim] = useState('fadeIn');
    // vh por frame: menor no mobile para a animação ser mais rápida
    const isMobile = () => window.innerWidth <= 768;
    const [vhPerFrame, setVhPerFrame] = useState(() => isMobile() ? 7 : 15);
    const [textVisible, setTextVisible] = useState(true);
    const [progress, setProgress] = useState(0); // 0–1
    const [allLoaded, setAllLoaded] = useState(false);

    // ── Pré-carrega todas as imagens e desenha no canvas ──────────────────────
    const drawFrame = useCallback((idx) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const img = images.current[idx];
        if (!img || !loadedFlags.current[idx]) return;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Mantém aspect-ratio cobrindo o canvas (object-fit: cover)
        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.naturalWidth || img.width;
        const ih = img.naturalHeight || img.height;
        const scale = Math.max(cw / iw, ch / ih);
        const sw = iw * scale;
        const sh = ih * scale;
        const ox = (cw - sw) / 2;
        const oy = 0; // alinha ao TOPO — mantém o cabelo visível em fotos portrait
        ctx.drawImage(img, ox, oy, sw, sh);
    }, []);

    useEffect(() => {
        let loaded = 0;
        FRAMES.forEach((src, idx) => {
            const img = new window.Image();
            img.src = src;
            images.current[idx] = img;
            img.onload = () => {
                loadedFlags.current[idx] = true;
                loaded++;
                // Desenha o primeiro frame assim que ele carregar
                if (idx === 0) drawFrame(0);
                if (loaded === TOTAL_FRAMES) setAllLoaded(true);
            };
            img.onerror = () => {
                loadedFlags.current[idx] = true; // marca como "tentado"
                loaded++;
                if (loaded === TOTAL_FRAMES) setAllLoaded(true);
            };
        });
    }, [drawFrame]);

    // ── Ref para rastrear o frame atual sem causar re-render ─────────────────
    const frameIdxRef = useRef(0);

    // ── Redimensiona o canvas SOMENTE se as dimensões de fato mudaram ─────────
    // Não depende de frameIdx — atribuir canvas.width/height APAGA o canvas!
    useEffect(() => {
        const resize = () => {
            const canvas = canvasRef.current;
            const sticky = stickyRef.current;
            if (!canvas || !sticky) return;
            const newW = sticky.clientWidth;
            const newH = sticky.clientHeight;
            // Só redimensiona se as dimensões mudaram de verdade
            if (canvas.width === newW && canvas.height === newH) return;
            canvas.width = newW;
            canvas.height = newH;
            // Redesenha o frame atual após o redimensionamento
            drawFrame(frameIdxRef.current);
        };
        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, [drawFrame]); // ← SEM frameIdx na dep — evita apagar o canvas no scroll

    // ── Listener de scroll — mapeia scroll → frame ───────────────────────────
    useEffect(() => {
        const handleScroll = () => {
            const wrapper = wrapperRef.current;
            if (!wrapper) return;

            const rect = wrapper.getBoundingClientRect();
            const wrapperH = wrapper.offsetHeight;
            const viewportH = window.innerHeight;
            // scrolled = quantos px já foram percorridos dentro do wrapper
            const scrolled = Math.max(0, -rect.top);
            const scrollable = wrapperH - viewportH; // espaço total de scroll
            const prog = Math.min(1, scrolled / scrollable); // 0 → 1

            const newIdx = Math.min(
                Math.floor(prog * TOTAL_FRAMES),
                TOTAL_FRAMES - 1
            );

            setProgress(prog);
            setFrameIdx((prev) => {
                frameIdxRef.current = newIdx; // mantém ref sincronizada para o resize
                drawFrame(newIdx);
                return newIdx;
            });

            // Texto dinâmico com fade
            const newPhase = getPhase(newIdx);
            setPhaseText((prev) => {
                if (prev !== newPhase.text) {
                    setTextVisible(false);
                    // Depois do fade-out, troca o texto e faz fade-in
                    setTimeout(() => {
                        setPhaseText(newPhase.text);
                        setTextVisible(true);
                    }, 300);
                }
                return prev; // retorna prev para evitar loop
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [drawFrame]);

    // ── Atualiza vhPerFrame ao redimensionar (ex: girar celular) ───────────────
    useEffect(() => {
        const onResize = () => setVhPerFrame(window.innerWidth <= 768 ? 7 : 15);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // ── Atualiza phaseText separadamente para evitar closure stale ───────────
    const currentPhaseText = getPhase(frameIdx).text;

    return (
        /**
         * wrapperRef: elemento alto que cria o "espaço de scroll"
         * A altura (35 × 100vh) determina quanto o usuário precisa rolar
         * para passar por todos os 35 frames antes de continuar.
         */
        <div
            ref={wrapperRef}
            className={styles.scrollWrapper}
            id="inicio"
            style={{ height: `${TOTAL_FRAMES * vhPerFrame}vh` }}
        >
            {/* Painel sticky — fica fixo enquanto o wrapper ainda está na viewport */}
            <div ref={stickyRef} className={styles.stickyPanel}>

                {/* Navbar contextual dentro do sticky (layout) */}
                <div className={styles.innerLayout}>

                    {/* ── Canvas com o frame atual ────────────────────────────────── */}
                    <canvas
                        ref={canvasRef}
                        className={styles.frameCanvas}
                        aria-label="Animação de transformação capilar"
                    />

                    {/* ── Overlay escurecido ──────────────────────────────────────── */}
                    <div className={styles.overlay} />

                    {/* ── Conteúdo sobreposto ─────────────────────────────────────── */}
                    <div className={styles.content}>

                        {/* Nome do estúdio — minimalista, abaixo */}
                        <h1 className={styles.headline}>
                            Studio <span className={styles.goldAccent}>Tiago Ferrer</span>
                        </h1>

                        {/* Frase dinâmica — destaque principal, PRIMEIRO */}
                        <p
                            className={`${styles.phaseText} ${textVisible ? styles.fadeIn : styles.fadeOut}`}
                            key={currentPhaseText}
                            aria-live="polite"
                        >
                            {currentPhaseText}
                        </p>

                        <p className={styles.subline}>
                            Prótese Capilar Masculina em Suzano/SP
                        </p>

                        {/* CTA */}
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp"
                            id="hero-cta-whatsapp"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                            </svg>
                            <span>Agendar Avaliação no WhatsApp</span>
                        </a>

                        {/* Stats */}
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.statNum}>1.200+</span>
                                <span className={styles.statLabel}>Clientes</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.stat}>
                                <span className={styles.statNum}>10+</span>
                                <span className={styles.statLabel}>Anos</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.stat}>
                                <span className={styles.statNum}>100%</span>
                                <span className={styles.statLabel}>Natural</span>
                            </div>
                        </div>
                    </div>

                    {/* ── Barra de progresso da animação ──────────────────────────── */}
                    <div className={styles.progressBar} aria-hidden="true">
                        <div
                            className={styles.progressFill}
                            style={{ width: `${progress * 100}%` }}
                        />
                    </div>


                    {/* ── Indicador de scroll ─────────────────────────────────────── */}
                    {progress < 0.98 && (
                        <div className={styles.scrollHint} aria-label="Role para ver a transformação">
                            <span className={styles.scrollHintText}>Role para ver</span>
                            <div className={styles.scrollIcon}>
                                <div className={styles.scrollDot} />
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
