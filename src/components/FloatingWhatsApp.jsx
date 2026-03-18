import React, { useState, useEffect } from 'react';
import styles from './FloatingWhatsApp.module.css';

const WA_LINK =
    'https://wa.me/5511919060855?text=Ol%C3%A1%20Tiago%20Ferrer%21%20Vim%20pela%20p%C3%A1gina%20da%20pr%C3%B3tese%20capilar%20e%20gostaria%20de%20aproveitar%20o%20desconto%20anunciado.%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20o%20procedimento%3F';

export default function FloatingWhatsApp() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Aparece somente quando o Hero (#inicio) já saiu da viewport
            const hero = document.getElementById('inicio');
            if (!hero) return;
            const bottom = hero.getBoundingClientRect().bottom;
            setVisible(bottom <= 0);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // checa no mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.fab} ${visible ? styles.visible : ''}`}
            aria-label="Falar no WhatsApp"
            title="Agendar avaliação pelo WhatsApp"
        >
            {/* Ícone WhatsApp SVG */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                width="26"
                height="26"
            >
                <path d="M16.003 2C8.274 2 2 8.274 2 16.003c0 2.47.652 4.876 1.889 6.99L2 30l7.236-1.854A13.93 13.93 0 0 0 16.003 30C23.73 30 30 23.726 30 16.003 30 8.274 23.73 2 16.003 2zm0 25.538a11.51 11.51 0 0 1-5.87-1.603l-.42-.25-4.295 1.1 1.132-4.175-.275-.436A11.479 11.479 0 0 1 4.462 16c0-6.37 5.173-11.538 11.54-11.538S27.538 9.63 27.538 16c0 6.37-5.168 11.538-11.535 11.538zm6.312-8.64c-.347-.174-2.047-1.01-2.366-1.125-.318-.117-.55-.174-.78.173-.232.346-.896 1.125-1.098 1.357-.2.232-.403.26-.75.086-.347-.174-1.465-.54-2.79-1.72-1.03-.918-1.726-2.052-1.929-2.4-.202-.346-.022-.532.152-.705.156-.154.347-.404.52-.607.174-.203.232-.347.347-.578.116-.231.058-.433-.028-.607-.087-.173-.781-1.88-1.07-2.574-.281-.676-.567-.584-.781-.595-.201-.01-.433-.013-.664-.013s-.607.087-.924.433c-.318.346-1.213 1.185-1.213 2.89 0 1.707 1.24 3.355 1.414 3.587.173.232 2.444 3.73 5.92 5.23.828.357 1.474.57 1.978.73.83.263 1.587.226 2.185.137.667-.1 2.047-.836 2.336-1.643.29-.808.29-1.5.202-1.643-.086-.144-.318-.231-.665-.405z" />
            </svg>

            {/* Pulso dourado de atenção */}
            <span className={styles.pulse} aria-hidden="true" />
        </a>
    );
}
