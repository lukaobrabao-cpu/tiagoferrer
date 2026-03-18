import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const WA_LINK = 'https://wa.me/5511919060855?text=Ol%C3%A1%20Tiago%20Ferrer%21%20Vim%20pela%20p%C3%A1gina%20da%20pr%C3%B3tese%20capilar%20e%20gostaria%20de%20aproveitar%20o%20desconto%20anunciado.%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20o%20procedimento%3F';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            // Fica opaca SÓ depois que o hero terminar de rolar (bottom do #inicio saiu da tela)
            const hero = document.getElementById('inicio');
            if (hero) {
                const heroBounds = hero.getBoundingClientRect();
                // heroBounds.bottom <= 0 significa que o hero saiu completamente do viewport
                setScrolled(heroBounds.bottom <= window.innerHeight * 0.05);
            } else {
                setScrolled(window.scrollY > 40);
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`wrapper ${styles.inner}`}>
                <div className={styles.logo}>
                    <span className={styles.logoName}>TIAGO FERRER</span>
                    <span className={styles.logoSub}>Studio de Prótese Capilar</span>
                </div>

                <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaBtn}
                    id="navbar-cta"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                    </svg>
                    <span>Agendar Avaliação</span>
                </a>
            </div>
        </header>
    );
}
