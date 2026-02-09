import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hotel, Plane, Calendar } from 'lucide-react';

// ============================================================================
// BA GENEVA LOGO COMPONENT
// ============================================================================
const BALogoGeneva = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="text-[#f5e6c8]">
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-3xl font-serif font-bold"
          fill="#f5e6c8"
          style={{ letterSpacing: '0.05em' }}
        >
          BA
        </text>
      </svg>
    </div>
    <div className="flex items-center gap-2">
      <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#f5e6c8]/50" />
      <span className="text-[#f5e6c8] text-xs tracking-[0.3em] font-light">
        GENEVA
      </span>
      <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#f5e6c8]/50" />
    </div>
  </div>
);

interface CardData {
  id: number;
  type: 'hotel' | 'flight' | 'event';
  title: string;
  subtitle: string;
  time: string;
  location: string;
}

const cards: CardData[] = [
  {
    id: 1,
    type: 'hotel',
    title: 'Hôtel Plaza Athénée',
    subtitle: 'Suite Royale',
    time: '15-18 Mars',
    location: 'Paris, France',
  },
  {
    id: 2,
    type: 'flight',
    title: 'Air France AF 1234',
    subtitle: 'Classe Affaires',
    time: '15 Mars, 10:30',
    location: 'CDG → JFK',
  },
  {
    id: 3,
    type: 'event',
    title: 'Opéra Garnier',
    subtitle: 'La Traviata',
    time: '17 Mars, 20:00',
    location: 'Paris 9ème',
  },
];

// ============================================================================
// TEXTURE COMPONENTS - Exact replicas from your code
// ============================================================================
const LeatherTexture = ({ light = false }: { light?: boolean }) => (
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      opacity: light ? 0.12 : 0.18,
      mixBlendMode: 'overlay',
    }}
  />
);

const BrushedMetalTexture = () => (
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `repeating-linear-gradient(
        90deg,
        rgba(255,255,255,0.02) 0px,
        rgba(255,255,255,0.04) 1px,
        transparent 1px,
        transparent 3px
      )`,
    }}
  />
);

const FabricTexture = () => (
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='weave' patternUnits='userSpaceOnUse' width='4' height='4'%3E%3Crect width='2' height='2' fill='rgba(255,255,255,0.03)'/%3E%3Crect x='2' y='2' width='2' height='2' fill='rgba(255,255,255,0.03)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23weave)'/%3E%3C/svg%3E")`,
      opacity: 0.5,
    }}
  />
);

type TextureType = 'leather' | 'leather-light' | 'brushed-metal' | 'fabric';

const TextureOverlay = ({ type }: { type: TextureType }) => {
  switch (type) {
    case 'leather':
      return <LeatherTexture />;
    case 'leather-light':
      return <LeatherTexture light />;
    case 'brushed-metal':
      return <BrushedMetalTexture />;
    case 'fabric':
      return <FabricTexture />;
    default:
      return null;
  }
};

const VignetteOverlay = () => (
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      background: `radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.25) 100%)`,
    }}
  />
);

// Wallet Leather Texture - Premium leather with pronounced grain
const WalletLeatherTexture = () => (
  <>
    {/* Stries verticales - plus prononcées */}
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `repeating-linear-gradient(
          90deg,
          rgba(255,255,255,.08) 0px,
          rgba(255,255,255,.08) 1px,
          transparent 1px,
          transparent 4px
        )`,
        opacity: 0.25,
        mixBlendMode: 'soft-light' as const,
      }}
    />
    {/* Grain texture - beaucoup plus visible */}
    <div 
      className="absolute pointer-events-none"
      style={{
        inset: '-20%',
        backgroundImage: `
          radial-gradient(circle at 15% 25%, rgba(255,255,255,.25) 0 1.5px, transparent 1.5px),
          radial-gradient(circle at 65% 55%, rgba(0,0,0,.30) 0 1.5px, transparent 1.5px),
          radial-gradient(circle at 35% 75%, rgba(255,255,255,.20) 0 1.5px, transparent 1.5px),
          radial-gradient(circle at 85% 35%, rgba(0,0,0,.25) 0 1px, transparent 1px)
        `,
        backgroundSize: '12px 12px, 16px 16px, 20px 20px, 14px 14px',
        opacity: 0.35,
        filter: 'blur(0.2px)',
        mixBlendMode: 'overlay' as const,
        transform: 'rotate(2deg)',
      }}
    />
    {/* Fine leather micro-texture - subtler for premium feel */}
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(45deg, rgba(0,0,0,0.03) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(0,0,0,0.03) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.03) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.03) 75%)
        `,
        backgroundSize: '8px 8px',
        opacity: 0.3,
      }}
    />
    {/* Specular highlight - simulates light on leather */}
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 70% 80%, rgba(0,0,0,0.1) 0%, transparent 50%)
        `,
        mixBlendMode: 'soft-light',
      }}
    />
  </>
);

// ============================================================================
// CARD STYLING
// ============================================================================
const getCardStyles = (type: 'hotel' | 'flight' | 'event') => {
  switch (type) {
    case 'hotel':
      return {
        background: `
          radial-gradient(120% 90% at 30% 15%, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 55%),
          radial-gradient(140% 120% at 70% 80%, rgba(0,0,0,.22) 0%, rgba(0,0,0,0) 60%),
          linear-gradient(180deg, rgba(255,255,255,.06) 0%, rgba(0,0,0,.10) 100%),
          linear-gradient(145deg, hsl(40, 35%, 88%) 0%, hsl(38, 40%, 82%) 50%, hsl(35, 35%, 75%) 100%)
        `,
        textColor: 'hsl(215, 70%, 15%)',
        accentColor: '#0a1f44',
        texture: 'leather-light' as TextureType,
        isDark: false,
      };
    case 'flight':
      return {
        background: `
          radial-gradient(120% 90% at 30% 15%, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 55%),
          radial-gradient(140% 120% at 70% 80%, rgba(0,0,0,.22) 0%, rgba(0,0,0,0) 60%),
          linear-gradient(180deg, rgba(255,255,255,.06) 0%, rgba(0,0,0,.10) 100%),
          linear-gradient(145deg, hsl(215, 65%, 18%) 0%, hsl(215, 70%, 12%) 50%, hsl(215, 75%, 8%) 100%)
        `,
        textColor: 'rgba(255,255,255,0.95)',
        accentColor: '#d4af37',
        texture: 'leather' as TextureType,
        isDark: true,
      };
    case 'event':
      return {
        background: `
          radial-gradient(120% 90% at 30% 15%, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 55%),
          radial-gradient(140% 120% at 70% 80%, rgba(0,0,0,.22) 0%, rgba(0,0,0,0) 60%),
          linear-gradient(180deg, rgba(255,255,255,.06) 0%, rgba(0,0,0,.10) 100%),
          linear-gradient(145deg, hsl(350, 40%, 82%) 0%, hsl(348, 38%, 76%) 50%, hsl(345, 35%, 70%) 100%)
        `,
        textColor: 'hsl(350, 50%, 20%)',
        accentColor: '#8b4557',
        texture: 'leather-light' as TextureType,
        isDark: false,
      };
  }
};

const getIcon = (type: 'hotel' | 'flight' | 'event', color: string) => {
  const iconClass = "h-5 w-5";
  const style = { color, strokeWidth: 1.5 };
  
  switch (type) {
    case 'hotel':
      return <Hotel className={iconClass} style={style} />;
    case 'flight':
      return <Plane className={iconClass} style={style} />;
    case 'event':
      return <Calendar className={iconClass} style={style} />;
  }
};

export function TravelWallet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden p-8">
      {/* Background overlay when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/20"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Cards Stack */}
      <div className="relative">
        {/* Cards - MÊME LARGEUR QUE LE WALLET */}
        {cards.map((card, index) => {
          const styles = getCardStyles(card.type);
          
          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={
                isOpen
                  ? {
                      y: -80 - index * 100, // Réduit de 140 à 100 pour moins d'espace
                      opacity: 1,
                      scale: 1,
                    }
                  : {
                      y: -index * 8,
                      opacity: 1,
                      scale: 1 - index * 0.02,
                    }
              }
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                mass: 0.8,
                delay: isOpen ? index * 0.08 : (cards.length - 1 - index) * 0.05,
              }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] h-[200px] cursor-pointer"
              style={{
                zIndex: cards.length - index,
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className="rounded-[26px] w-full h-full shadow-2xl relative overflow-hidden"
                style={{
                  background: styles.background,
                  boxShadow: `
                    0 14px 30px rgba(0,0,0,.18),
                    inset 0 0 0 1px rgba(255,255,255,.08),
                    inset 0 -10px 24px rgba(0,0,0,.14)
                  `,
                }}
              >
                {/* Texture Layer */}
                <TextureOverlay type={styles.texture} />
                <VignetteOverlay />

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-[10px] uppercase tracking-wider font-medium"
                      style={{ color: styles.accentColor, opacity: 0.8 }}
                    >
                      {card.type === 'hotel' ? 'Hotel Voucher' : card.type === 'flight' ? 'Boarding Pass' : 'Event Ticket'}
                    </span>
                    {getIcon(card.type, styles.accentColor)}
                  </div>

                  {/* Main Info */}
                  <div>
                    <h3 
                      className="text-lg font-semibold mb-1"
                      style={{ color: styles.textColor }}
                    >
                      {card.title}
                    </h3>
                    <p 
                      className="text-sm mb-3"
                      style={{ color: styles.textColor, opacity: 0.7 }}
                    >
                      {card.subtitle}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span style={{ color: styles.textColor, opacity: 0.8 }}>
                        {card.time}
                      </span>
                      <span style={{ color: styles.textColor, opacity: 0.8 }}>
                        {card.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Main Wallet Card - MÊME TAILLE QUE LES CARTES */}
        <motion.div
          initial={false}
          animate={
            isOpen
              ? {
                  scale: 0.95,
                  y: 10,
                }
              : {
                  scale: 1,
                  y: 0,
                }
          }
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            mass: 0.8,
          }}
          className="relative w-[340px] h-[200px] cursor-pointer"
          style={{ zIndex: 10 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div 
            className="relative w-full h-full overflow-hidden rounded-[26px]"
            style={{
              background: `
                radial-gradient(120% 90% at 30% 15%, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 55%),
                radial-gradient(140% 120% at 70% 80%, rgba(0,0,0,.22) 0%, rgba(0,0,0,0) 60%),
                linear-gradient(180deg, rgba(255,255,255,.06) 0%, rgba(0,0,0,.10) 100%),
                #0A1F44
              `,
              boxShadow: `
                0 14px 30px rgba(0,0,0,.18),
                inset 0 0 0 1px rgba(255,255,255,.08),
                inset 0 -10px 24px rgba(0,0,0,.14)
              `,
            }}
          >
            <WalletLeatherTexture />
            <VignetteOverlay />
            
            {/* Logo centré */}
            <div className="absolute inset-0 flex items-center justify-center">
              <BALogoGeneva />
            </div>

            {/* Tap to open hint */}
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-[10px] tracking-wider"
              >
                TAP TO OPEN
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}