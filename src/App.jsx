import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';          // crítico — carrega imediatamente
import SectionCTA from './components/SectionCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './index.css';

// ── Lazy load para seções abaixo da dobra (carregam quando o usuário rola) ───
const BeforeAfter = lazy(() => import('./components/BeforeAfter'));
const VideoTestimonials = lazy(() => import('./components/VideoTestimonials'));
const Impact = lazy(() => import('./components/Impact'));
const Benefits = lazy(() => import('./components/Benefits'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Pricing = lazy(() => import('./components/Pricing'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const CTAFinal = lazy(() => import('./components/CTAFinal'));
const Footer = lazy(() => import('./components/Footer'));

// Skeleton simples enquanto carrega
function SectionSkeleton() {
    return (
        <div style={{
            height: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                width: 40, height: 40,
                border: '3px solid rgba(198,168,90,0.15)',
                borderTopColor: '#C6A85A',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}

function App() {
    return (
        <>
            <Navbar />
            <main>
                {/* Hero — carrega imediatamente (above the fold) */}
                <Hero />

                <Suspense fallback={<SectionSkeleton />}>
                    <BeforeAfter />
                    <SectionCTA />

                    <VideoTestimonials />
                    <SectionCTA text="🎁 Quero minha consulta GRÁTIS no WhatsApp!" />

                    <Impact />
                    <SectionCTA text="🔥 Quero mudar agora!" />

                    <Benefits />
                    <SectionCTA text="📞 Fale agora com o Tiago Ferrer!" />

                    <Testimonials />
                    <SectionCTA />

                    <Pricing />

                    <FAQ />
                    <SectionCTA />

                    <Contact />
                    <CTAFinal />
                </Suspense>
            </main>

            <Suspense fallback={null}>
                <Footer />
            </Suspense>

            <FloatingWhatsApp />
        </>
    );
}

export default App;
