import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Menu, X, MapPin,
  Star, ShieldCheck, Sparkles, ChevronRight, ArrowUp, Phone, MessageCircle
} from "lucide-react";

const navItems = [
  ["About Us", "#stories"],
  ["Services", "#artists"],
  ["Pricing", "#pricing"],
  ["Our Studio", "#location"],
  ["Contact", "#consultation"]
];

const gallery = [
  { title: "Ornamental blackwork", tag: "BLACKWORK · ORNAMENTAL", tone: "gallery-one", category: "Blackwork", src: "https://images.squarespace-cdn.com/content/v1/5c2908ea297114a6e7ac26f0/ceb36f7c-e56d-41c4-8970-2347c49b5255/199774711_337932471036823_5420180668530118640_n.jpg?format=1500w" },
  { title: "Geometric dotwork", tag: "GEOMETRIC · DOTWORK", tone: "gallery-two", category: "Geometric", src: "https://inkppl.com/en/upload/article/kostik-dry-1706689247846.jpeg" },
  { title: "Floral sleeve study", tag: "FLORAL · BLACK & GREY", tone: "gallery-three", category: "Floral", src: "https://images.squarespace-cdn.com/content/v1/65aab2129fdd1d4f363968dc/67f04afc-a0f1-44ae-b00b-a5681252aa6f/Rose%2Band%2Bfiligree%2Btattoo" },
  { title: "Artist at work", tag: "TATTOO PROCESS · STUDIO", tone: "gallery-four", category: "Process", src: "https://images.unsplash.com/photo-1775135922264-f5833df6d475?auto=format&fit=crop&w=1400&q=80" },
  { title: "Geometric sleeve", tag: "BLACKWORK · GEOMETRIC", tone: "gallery-five", category: "Geometric", src: "https://images.squarespace-cdn.com/content/v1/60c4e954079b8351d06d02a9/ab2858fa-437f-4f05-895c-951847d67113/KatieMizunoTattoo_Banded%2BSleeve_May-6.jpg?format=1500w" }
];

const services = [
  {
    "name": "Custom tattoo design",
    "style": "Personal concepts · Original artwork",
    "slug": "custom-tattoo-design",
    "images": [
      "/assets/service-collections/custom-tattoo-design/01-1000302011.jpg.jpeg",
      "/assets/service-collections/custom-tattoo-design/02-1000302015.jpg.jpeg",
      "/assets/service-collections/custom-tattoo-design/03-1000413620.jpg.jpeg",
      "/assets/service-collections/custom-tattoo-design/04-20260928_210832.jpg.jpeg",
      "/assets/service-collections/custom-tattoo-design/05-20260928_211009.jpg.jpeg",
      "/assets/service-collections/custom-tattoo-design/06-20260928_211026.jpg.jpeg",
      "/assets/service-collections/custom-tattoo-design/07-20261025_200413.jpg.jpeg",
      "/assets/service-collections/custom-tattoo-design/08-IMG_20260126_163656.jpg.jpeg",
      "/assets/service-collections/custom-tattoo-design/09-IMG_20260127_175446.jpg.jpeg",
      "/assets/service-collections/custom-tattoo-design/10-IMG_5624.jpeg",
      "/assets/service-collections/custom-tattoo-design/11-WhatsApp-Image-2026-11-16-at-12.55.57-PM.jpeg"
    ],
    "image": "/assets/service-collections/custom-tattoo-design/01-1000302011.jpg.jpeg"
  },
  {
    "name": "Portrait tattoos",
    "style": "People · Pets · Fine detail",
    "slug": "portrait-tattoos",
    "images": [
      "/assets/service-collections/portrait-tattoos/01-1000302008.jpg.jpeg",
      "/assets/service-collections/portrait-tattoos/03-1000302013.jpg.jpeg",
      "/assets/service-collections/portrait-tattoos/04-IMG-20260627-WA0021.jpg.jpeg",
      "/assets/service-collections/portrait-tattoos/05-IMG_8292.jpeg"
    ],
    "image": "/assets/service-collections/portrait-tattoos/01-1000302008.jpg.jpeg"
  },
  {
    "name": "Religious tattoos",
    "style": "Meaningful · Symbolic artwork",
    "slug": "religious-tattoos",
    "images": [
      "/assets/service-collections/religious-tattoos/01-1000191531.jpg.jpeg",
      "/assets/service-collections/religious-tattoos/02-1000302007.jpg.jpeg",
      "/assets/service-collections/religious-tattoos/03-1000302010.jpg.jpeg",
      "/assets/service-collections/religious-tattoos/04-1000302014.jpg.jpeg",
      "/assets/service-collections/religious-tattoos/05-20260720_143245.jpg.jpeg",
      "/assets/service-collections/religious-tattoos/06-20261001_182235.jpg.jpeg",
      "/assets/service-collections/religious-tattoos/07-20261025_200349.jpg.jpeg",
      "/assets/service-collections/religious-tattoos/08-IMG_20260505_182411.jpg.jpeg",
      "/assets/service-collections/religious-tattoos/09-IMG_8238.jpeg"
    ],
    "image": "/assets/service-collections/religious-tattoos/01-1000191531.jpg.jpeg"
  },
  {
    "name": "Couple tattoos",
    "style": "Matching · Complementary designs",
    "slug": "couple-tattoos",
    "images": [
      "/assets/service-collections/couple-tattoos/01-1000302005.jpg.jpeg",
      "/assets/service-collections/couple-tattoos/02-1000302006.jpg.jpeg",
      "/assets/service-collections/couple-tattoos/03-1000302012.jpg.jpeg",
      "/assets/service-collections/couple-tattoos/04-IMG_20260402_155515.jpg.jpeg",
      "/assets/service-collections/couple-tattoos/05-IMG_20260408_145828.jpg.jpeg"
    ],
    "image": "/assets/service-collections/couple-tattoos/01-1000302005.jpg.jpeg"
  },
  {
    "name": "Geometric tattoos",
    "style": "Patterns · Precision · Form",
    "slug": "geometric-tattoos",
    "images": [
      "/assets/service-collections/geometric-tattoos/01-20260925_215732.jpg.jpeg",
      "/assets/service-collections/geometric-tattoos/02-20260925_215748.jpg.jpeg",
      "/assets/service-collections/geometric-tattoos/03-20261026_231638.jpg.jpeg",
      "/assets/service-collections/geometric-tattoos/04-20261026_231715.jpg.jpeg",
      "/assets/service-collections/geometric-tattoos/05-WhatsApp-Image-2026-11-16-at-12.55.50-PM.jpeg"
    ],
    "image": "/assets/service-collections/geometric-tattoos/01-20260925_215732.jpg.jpeg"
  },
  {
    "name": "Pet tattoos",
    "style": "Personal pet portraits",
    "slug": "pet-tattoos",
    "images": [
      "/assets/service-collections/pet-tattoos/01-20261101_210048.jpg.jpeg",
      "/assets/service-collections/pet-tattoos/02-IMG_20260113_201558.jpg.jpeg",
      "/assets/service-collections/pet-tattoos/03-IMG_20260113_202309.jpg.jpeg"
    ],
    "image": "/assets/service-collections/pet-tattoos/01-20261101_210048.jpg.jpeg"
  },
  {
    "name": "Travel tattoos",
    "style": "Places · Memories · Journeys",
    "slug": "travel-tattoos",
    "images": [
      "/assets/service-collections/travel-tattoos/01-IMG_20260125_012045.jpg.jpeg"
    ],
    "image": "/assets/service-collections/travel-tattoos/01-IMG_20260125_012045.jpg.jpeg"
  },
  {
    "name": "Tattoo cover-ups",
    "style": "Redesign · Rework existing ink",
    "slug": "tattoo-cover-ups",
    "images": [
      "/assets/service-collections/tattoo-cover-ups/01-20260809_205413.jpg.jpeg",
      "/assets/service-collections/tattoo-cover-ups/02-20260809_205425.jpg.jpeg",
      "/assets/service-collections/tattoo-cover-ups/03-IMG-20260524-WA0008.jpg.jpeg"
    ],
    "image": "/assets/service-collections/tattoo-cover-ups/01-20260809_205413.jpg.jpeg"
  },
  {
    "name": "Piercing",
    "style": "Studio piercing service",
    "slug": "piercing",
    "images": [
      "/assets/service-collections/piercing/01-1-1.jpg.jpeg",
      "/assets/service-collections/piercing/02-10.jpg.jpeg",
      "/assets/service-collections/piercing/03-11-1.jpg.jpeg",
      "/assets/service-collections/piercing/04-12-1.jpg.jpeg",
      "/assets/service-collections/piercing/05-2.jpg.jpeg",
      "/assets/service-collections/piercing/06-3-1.jpg.jpeg",
      "/assets/service-collections/piercing/07-3.jpg.jpeg",
      "/assets/service-collections/piercing/08-4.jpg.jpeg",
      "/assets/service-collections/piercing/09-5.jpg.jpeg",
      "/assets/service-collections/piercing/10-7-1.jpg.jpeg",
      "/assets/service-collections/piercing/11-8-1.jpg.jpeg",
      "/assets/service-collections/piercing/12-file_000000008788820795b7a88361b93173.png",
      "/assets/service-collections/piercing/13-file_0000000090b081fab78cf9142e0a5554.png",
      "/assets/service-collections/piercing/14-file_00000000e8f081f4941b402cdf7e03e7.png",
      "/assets/service-collections/piercing/15-IMG-20260813-WA0024.jpg.jpeg",
      "/assets/service-collections/piercing/16-IMG-20260825-WA0004.jpeg",
      "/assets/service-collections/piercing/17-IMG_20260422_141733.jpg.jpeg",
      "/assets/service-collections/piercing/18-portrait_right_hd.png"
    ],
    "image": "/assets/service-collections/piercing/01-1-1.jpg.jpeg"
  }
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header" id="top">
      <a className="brand" href="#top" aria-label="Joysen Tattoo Studio home">
        <img className="brand-logo" src="/assets/brand/joysen-logo.png" alt="Joysen Tattoo Studio monogram logo" />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <a className="header-cta" href="#location">Locate us <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      {open && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
        {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}
      </nav>}
    </header>
  );
}

function SectionHeading({ kicker, title, copy, light = false }: { kicker: string; title: ReactNode; copy?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
    <p className="eyebrow"><span />{kicker}</p>
    <h2>{title}</h2>
    {copy && <p className="section-copy">{copy}</p>}
  </div>;
}

function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-image" role="img" aria-label="Tattoo artist working on a client, illustrative stock photograph">
      <img className="hero-photo" src="https://images.unsplash.com/photo-1775135922264-f5833df6d475?auto=format&fit=crop&w=1800&q=85" alt="Tattoo artist working on a client — illustrative stock image, not Joysen portfolio work" fetchPriority="high" />
      <div className="image-grain" /><div className="hero-stamp">KONDAPUR · HYDERABAD · INDIA</div>
      <div className="hero-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span className="art-caption">ART<br />MEETS<br />IDENTITY</span></div>
      <div className="image-index">01 / 06</div>
    </div>
    <div className="hero-copy">
      <p className="eyebrow"><span /> JOYSEN TATTOO &amp; PIERCING STUDIO</p>
      <h1 id="hero-title"><span style={{ color: "#811619" }}>Your idea.</span><br /><em>Our ink.</em></h1>
      <p className="hero-description">Joysen Tattoo & Piercing Studio offers tattooing, piercing, cover-ups and custom tattoo design in Kondapur, Hyderabad. Share your idea with the studio team and ask for a quote.</p>
      <div className="hero-actions">
        <a className="button button-light" href="#location">Find Joysen Studio <ArrowUpRight size={17} /></a>
        <a className="text-link" href="#artists">Explore tattoo styles <span>↗</span></a>
      </div>
      <div className="hero-bottom"><span>MADE TO BE PERSONAL</span><span className="scroll-note"><span className="scroll-line" /> SCROLL TO EXPLORE</span></div>
    </div>
  </section>;
}

function FeaturedGallery() {
  const [active, setActive] = useState(0);
  const item = gallery[active];
  const move = (step: number) => setActive((active + step + gallery.length) % gallery.length);
  return <section className="section gallery-section" id="gallery">
    <div className="section-topline"><span>01 / SELECTED WORK</span><span>INK THAT MEANS SOMETHING</span></div>
    <div className="gallery-layout">
      <div className="gallery-intro">
        <SectionHeading kicker="THE ARTWORK" title={<>Every piece<br />has a <em>story.</em></>} copy="Explore tattoo categories offered by the studio. These are external visual references to demonstrate the portfolio layout. They are not verified Joysen customer work and should be replaced with studio-approved photographs." />
        <p className="portfolio-disclaimer">Temporary online reference imagery only. These photos are not represented as Joysen Tattoo Studio work. Replace them with images owned or approved by Joysen before publishing.</p>
        <div className="gallery-controls">
          <button aria-label="Previous gallery item" onClick={() => move(-1)}><ArrowLeft /></button>
          <span>0{active + 1} <i>/</i> 0{gallery.length}</span>
          <button aria-label="Next gallery item" onClick={() => move(1)}><ArrowRight /></button>
        </div>
      </div>
      <div className={`gallery-art ${item.tone}`} aria-live="polite">
        <img className="portfolio-reference-image" src={item.src} alt={`${item.title} — external illustrative reference, not confirmed Joysen work`} loading="lazy" />
        <div className="gallery-reference-label">EXTERNAL REFERENCE · REPLACE WITH JOYSEN WORK</div>
        <div className="gallery-caption"><span>{item.tag}</span><h3>{item.title}</h3></div>
      </div>
    </div>
  </section>;
}

function Stories() {
  return <section className="stories-section section" id="stories">
    <div className="stories-visual"><img className="section-reference-photo" src="https://images.unsplash.com/photo-1769605767682-c46539324c10?auto=format&fit=crop&w=1100&q=82" alt="Tattoo artwork reference photograph for the About section; not Joysen studio work" loading="lazy" /></div>
    <div className="stories-copy">
      <SectionHeading kicker="ABOUT JOYSEN STUDIO" title={<>Not just a<br /><em style={{ color: "#811619" }}>tattoo studio.</em></>} copy="Joysen Tattoo Studio Kondapur describes itself as a Hyderabad tattoo studio with a team of more than ten skilled tattoo artists. Its site highlights professional practice, modern tools, experience, new designs, unique artwork and laser removal. The studio also lists tattooing, piercing, tattoo cover-up and tattoo design. Its listed studio features include professional practice, modern tools, experienced artists, new and unique designs, and laser removal." />
      <a className="underlined-link" href="#gallery">Explore services <ArrowUpRight size={16} /></a>
    </div>
  </section>;
}

function Legacy() {
  return <section className="legacy-section">
    <div className="legacy-inner">
      <p className="eyebrow"><span /> YOUR SKIN. YOUR CANVAS.</p>
      <h2>Ink your<br /><em>legacy.</em></h2>
      <p>Bring us the idea. Leave with a piece of art that is unmistakably yours.</p>
      <a className="button button-dark" href="#consultation">Start your story <ArrowUpRight size={17} /></a>
    </div>
    <div className="legacy-side-note">A PERSONAL MARK<br />FOR A LIFETIME</div>
  </section>;
}


function ServiceCard({ service, index, onOpen }: { service: typeof services[number]; index: number; onOpen: (slug: string) => void }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const timer = useRef<number | null>(null);
  const startSlideshow = () => {
    if (timer.current !== null || service.images.length < 2) return;
    timer.current = window.setInterval(() => setSlideIndex((v) => (v + 1) % service.images.length), 900);
  };
  const stopSlideshow = () => {
    if (timer.current !== null) window.clearInterval(timer.current);
    timer.current = null;
    setSlideIndex(0);
  };
  useEffect(() => () => { if (timer.current !== null) window.clearInterval(timer.current); }, []);
  return <a className="artist-card" href={`#service-${service.slug}`} onClick={(e) => { e.preventDefault(); onOpen(service.slug); }}>
    <div className={`artist-portrait artist-service-photo ${"artist-one"}`}>
      <img src={service.images[slideIndex] || service.image} alt={`${service.name} collection photo ${slideIndex + 1}`} loading="lazy" />
      <span className="artist-index">0{index + 1}</span>
      <span className="artist-arrow" role="button" aria-label={`Preview ${service.name} slideshow`} onMouseEnter={startSlideshow} onMouseLeave={stopSlideshow} onFocus={startSlideshow} onBlur={stopSlideshow} onClick={(e) => { e.preventDefault(); e.stopPropagation(); onOpen(service.slug); }}><ArrowUpRight /></span>
    </div>
    <div className="artist-meta"><div><h3 style={{ color: "#811619" }}>{service.name}</h3><p>{service.style}</p></div><ChevronRight size={18} /></div>
  </a>;
}

function ServiceCollectionPage({ service, onBack }: { service: typeof services[number]; onBack: () => void }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [service.slug]);
  return <section className="service-collection-page section">
    <div className="service-collection-top">
      <button className="service-back-button" type="button" onClick={onBack}><ArrowLeft size={17}/> Back to services</button>
      <p className="eyebrow"><span /> JOYSEN TATTOO STUDIO · COLLECTION</p>
      <h1>{service.name}</h1>
      <p>{service.style}. Explore photographs from this collection.</p>
    </div>
    <div className="service-collection-grid">
      {service.images.map((src, index) => <figure className="service-collection-item" key={src}>
        <img src={src} alt={`${service.name} — collection photograph ${index + 1}`} loading="lazy" />
        <figcaption>{service.name} <span>{String(index + 1).padStart(2,"0")} / {String(service.images.length).padStart(2,"0")}</span></figcaption>
      </figure>)}
    </div>
    <div className="service-collection-cta"><p>Have an idea for this style?</p><a className="button button-dark" href="https://wa.me/918897770464?text=Hello%20Joysen%2C%20I%20would%20like%20to%20discuss%20a%20tattoo%20design." target="_blank" rel="noreferrer">Discuss your design <ArrowUpRight size={16}/></a></div>
  </section>;
}

function Artists({ onOpenService }: { onOpenService: (slug: string) => void }) {
  const [showAll, setShowAll] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const slide = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".artist-card");
    const distance = card ? card.getBoundingClientRect().width + 18 : 300;
    track.scrollBy({ left: direction * distance, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };
  return <section className="section artists-section" id="artists">
    <div className="section-topline"><span>02 / TATTOO SERVICES</span><span>CRAFT · CHARACTER · CREATIVITY</span></div>
    <SectionHeading kicker="TATTOO & PIERCING SERVICES" title={<><span style={{ color: "#811619" }}>Explore</span> <em>our services.</em></>} copy="Joysen's supplied website details list custom tattoo design, portrait, religious, couple, geometric, pet and travel tattoos, tattoo cover-ups and piercing. Contact the studio to discuss the design and artist availability." />
    <div className="services-toolbar">
      <p>Swipe or use the arrows to explore all services.</p>
      <div className="services-controls">
        <button type="button" onClick={() => slide(-1)} aria-label="Previous services"><ArrowLeft size={18} /></button>
        <button type="button" onClick={() => slide(1)} aria-label="Next services"><ArrowRight size={18} /></button>
        <button type="button" className="view-all-services" onClick={() => setShowAll((value) => !value)}>{showAll ? "Show slider" : "View all services"}</button>
      </div>
    </div>
    <div className={`artist-grid services-track ${showAll ? "services-grid-all" : ""}`} ref={trackRef}>
      {services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} onOpen={onOpenService} />)}
    </div>
    <div className="center-action"><a className="button button-outline" href="#consultation">Discuss your design <ArrowUpRight size={16} /></a></div>
  </section>;
}

function Offers() {
  return <section className="offers-section section" id="pricing">
    <div className="offers-copy">
      <SectionHeading kicker="TATTOO PRICING" title={<>Clear quote.<br /><em style={{ color: "#811619" }}>Custom work.</em></>} copy="Tattoo pricing is based on size and design. Tiny and small tattoos have a minimum charge of ₹1,000; the final quote depends on detail, placement and studio confirmation." />
      <p className="pricing-minimum-note">Tiny and small tattoos: <strong>minimum ₹1,000</strong>. Final pricing is confirmed by the studio.</p><a className="button button-light" href="#consultation">Request a quote <ArrowUpRight size={16} /></a>
    </div>
    <div className="pricing-grid">
      {[
        ["Tiny Tattoo", "Under 2 inches"],
        ["Small Tattoo", "Under 5 inches"],
        ["Medium Tattoo", "Under 12 inches"],
        ["Large Tattoo", "12 inches and above"]
      ].map(([name, size]) => <article className="price-tier" key={name}>
        <span className="price-tier-label">SIZE CATEGORY</span><h3>{name}</h3><p>{size}</p>
        <strong>₹500 <small>/ inch</small></strong>
        <ul>
          {name === "Tiny Tattoo" || name === "Small Tattoo" ? <li>Minimum charge: ₹1,000</li> : null}
          <li>Ask for a design-specific quote</li>
          <li>Final price confirmed by the studio</li>
        </ul>
      </article>)}
    </div>
    <PriceEstimator />
  </section>;
}

function PriceEstimator() {
  const [inches, setInches] = useState("2");
  const parsed = Number(inches);
  const valid = Number.isFinite(parsed) && parsed > 0 && parsed <= 100;
  const estimate = valid ? Math.max(1000, Math.ceil(parsed * 500)) : null;
  return <div className="price-estimator">
    <div><p className="eyebrow"><span /> QUICK ESTIMATE</p><h3>Estimate your tattoo cost</h3><p>Enter the approximate tattoo length in inches. This is an indicative calculation using the ₹500/inch rate and ₹1,000 minimum charge.</p></div>
    <label htmlFor="tattoo-inches">Approximate length (inches)
      <input id="tattoo-inches" type="number" min="0.5" max="100" step="0.5" value={inches} onChange={(event) => setInches(event.target.value)} />
    </label>
    <div className="estimate-result" aria-live="polite"><span>INDICATIVE ESTIMATE</span><strong>{estimate === null ? "Enter a valid size" : `₹${estimate.toLocaleString("en-IN")}`}</strong><small>Final pricing depends on design, detail, placement and studio confirmation.</small></div>
    <a className="button button-outline" href="https://api.whatsapp.com/send?phone=918897770464&text=Hi%20Joysen%2C%20I%20would%20like%20a%20tattoo%20quote.">Ask Joysen for an exact quote <ArrowUpRight size={16} /></a>
  </div>;
}

function TattooCare() {
  return <section className="care-section section" id="care">
    <div className="care-copy"><SectionHeading kicker="AFTERCARE MATTERS" title={<>Great tattoos<br />deserve <em style={{ color: "#811619" }}>great care.</em></>} copy="The work does not end when the session does. Proper aftercare helps your tattoo heal well and stay looking its best." /><a className="underlined-link" href="#consultation">Talk to our team <ArrowUpRight size={16} /></a></div>
    <div className="care-art"><img className="section-reference-photo" src="https://images.unsplash.com/photo-1753260814170-9f77d48c016e?auto=format&fit=crop&w=1100&q=82" alt="Tattoo detail reference photograph for the aftercare section" loading="lazy" /></div>
  </section>;
}

function Reviews() {
  return <section className="reviews-section section">
    <SectionHeading kicker="WORDS THAT STAY" title={<>Stories from the<br /><em>other side of the needle.</em></>} copy="Every tattoo is personal. So is every experience. Here's to the trust behind the art." />
    <div className="review-card"><div className="review-stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={15} fill="currentColor" />)}</div><blockquote>“The experience, the attention to detail and the care throughout made the entire process memorable.”</blockquote><div className="review-author"><span className="review-avatar">A</span><span><strong>A CLIENT STORY</strong><small>HYDERABAD STUDIO</small></span></div><span className="review-mark">“</span></div>
    <p className="review-disclaimer">Sample layout only — no customer review text or reviewer identity has been supplied for this recreation.</p>
  </section>;
}



function Locations() {
  const studioPhotos = [
    { src: "/assets/studio/studio-01.jpg", alt: "Wide view of the tattoo studio interior and workstation" },
    { src: "/assets/studio/studio-02.jpg", alt: "Vertical view of the studio floor and work area" },
    { src: "/assets/studio/studio-03.jpg", alt: "Decorative display and plants inside the studio" },
    { src: "/assets/studio/studio-04.jpg", alt: "Studio seating and tattoo workstation" },
    { src: "/assets/studio/studio-05.jpg", alt: "Client seating area with framed wall art" },
    { src: "/assets/studio/studio-06.jpg", alt: "Wide view of the studio lounge and seating" },
    { src: "/assets/studio/studio-07.jpg", alt: "Vertical view of the studio lounge and ceiling" },
    { src: "/assets/studio/studio-08.jpg", alt: "Studio-branded printed artwork" }
  ];
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const closePhoto = () => setActivePhoto(null);
  const movePhoto = (step: number) => setActivePhoto((current) => current === null ? null : (current + step + studioPhotos.length) % studioPhotos.length);

  useEffect(() => {
    if (activePhoto === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePhoto();
      if (event.key === "ArrowRight") movePhoto(1);
      if (event.key === "ArrowLeft") movePhoto(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto]);

  const photoButton = (photo: typeof studioPhotos[number], index: number, className = "") => (
    <figure className={`studio-photo ${className}`} key={photo.src}>
      <button type="button" className="studio-photo-button" onClick={() => setActivePhoto(index)} aria-label={`View larger image: ${photo.alt}`}>
        <img src={photo.src} alt={photo.alt} loading="lazy" />
        <span className="studio-photo-zoom" aria-hidden="true">VIEW ↗</span>
      </button>
    </figure>
  );

  return <section className="location-section section" id="location">
    <div className="location-main">
      <SectionHeading kicker="INSIDE THE STUDIO" title={<>Visit our<br /><em style={{ color: "#811619" }}>Kondapur studio.</em></>} copy="Explore the studio photos and walkthrough supplied for this project. Call ahead to confirm artist availability and appointment timing." />
      <a className="button button-light" href="https://maps.app.goo.gl/aqSFXjRLT8FBNTef9">Get directions <ArrowUpRight size={16} /></a>
      <p className="studio-address-note">Beside Barbeque Nation / beside RRG Wines, Circle, opposite Sarath City Capital Mall (AMB Mall), near Kothaguda, Kondapur, Hyderabad, Telangana 500084.</p>
    </div>
    <div className="studio-media">
      <div className="studio-photo-grid">
        {studioPhotos.slice(0, 6).map((photo, index) => photoButton(photo, index, `studio-photo-${index + 1}`))}
      </div>
      <div className="studio-video-wrap">
        <video controls playsInline preload="metadata" poster="/assets/studio/studio-01.jpg" aria-label="Walkthrough video of the tattoo studio">
          <source src="/assets/studio/studio-walkthrough.mp4" type="video/mp4" />
          Your browser does not support the video element.
        </video>
        <div className="studio-video-caption"><span>TAKE A CLOSER LOOK</span><span>STUDIO WALKTHROUGH · 00:15</span></div>
      </div>
      <div className="studio-photo-grid studio-photo-grid-secondary">
        {studioPhotos.slice(6).map((photo, index) => photoButton(photo, index + 6))}
      </div>
    </div>
    {activePhoto !== null && <div className="studio-lightbox" role="dialog" aria-modal="true" aria-label="Studio photo viewer" onClick={closePhoto}>
      <button type="button" className="studio-lightbox-close" onClick={closePhoto} aria-label="Close photo viewer">×</button>
      <button type="button" className="studio-lightbox-nav studio-lightbox-prev" onClick={(event) => { event.stopPropagation(); movePhoto(-1); }} aria-label="Previous studio photo">‹</button>
      <figure className="studio-lightbox-content" onClick={(event) => event.stopPropagation()}>
        <img src={studioPhotos[activePhoto].src} alt={studioPhotos[activePhoto].alt} />
        <figcaption>{studioPhotos[activePhoto].alt} <span>{String(activePhoto + 1).padStart(2, "0")} / 08</span></figcaption>
      </figure>
      <button type="button" className="studio-lightbox-nav studio-lightbox-next" onClick={(event) => { event.stopPropagation(); movePhoto(1); }} aria-label="Next studio photo">›</button>
    </div>}
  </section>;
}

function Consultation() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Custom tattoo design");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !/^\+?[0-9\s-]{8,15}$/.test(phone.trim())) {
      setError("Please enter your name and a valid contact number.");
      return;
    }
    const message = [
      "Hi Joysen Tattoo Studio, I would like to enquire about an appointment.",
      `Name: ${name.trim()}`,
      `Contact: ${phone.trim()}`,
      `Service: ${service}`,
      `Approximate size: ${size.trim() || "Not decided"}`,
      `Design details: ${description.trim() || "I'd like to discuss this with the artist."}`
    ].join("\n");
    window.open(`https://api.whatsapp.com/send?phone=918897770464&text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setError("");
  };

  return <section className="consultation-section section" id="consultation">
    <p className="eyebrow"><span /> THE FIRST STEP IS A CONVERSATION</p>
    <h2>Ready to get inked?<br /><em style={{ color: "#811619" }}>Talk to Joysen.</em></h2>
    <p>Share a few details about your idea. We'll prepare a WhatsApp enquiry for you to send to the studio.</p>
    <div className="contact-actions">
      <a className="button button-dark" href="tel:+918897770464">Call 088977 70464 <ArrowUpRight size={17} /></a>
      <a className="button button-outline" href="https://api.whatsapp.com/send?phone=918897770464&text=Hi%20Joysen%20Tattoo%20Studio%20Kondapur">WhatsApp the studio <ArrowUpRight size={17} /></a>
    </div>
    <div className="booking-form-wrap">
      <div className="booking-form-heading"><p className="eyebrow"><span /> APPOINTMENT ENQUIRY</p><h3>Tell us about your idea.</h3><p>This form does not book or charge you. It opens WhatsApp with your enquiry so you can review and send it to the studio.</p></div>
      <form className="booking-form" onSubmit={submitEnquiry}>
        <label className="booking-field">Your name<input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required placeholder="Enter your name" /></label>
        <label className="booking-field">Contact number<input value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" inputMode="tel" required placeholder="Your phone number" /></label>
        <label className="booking-field">Service<select value={service} onChange={(e) => setService(e.target.value)}>{services.map((item) => <option key={item.name}>{item.name}</option>)}</select></label>
        <label className="booking-field">Approximate size<input value={size} onChange={(e) => setSize(e.target.value)} placeholder="e.g. 4 inches, palm-sized" /></label>
        <label className="booking-field booking-field-full">Describe your design<textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Placement, style, idea or reference details..." /></label>
        {error && <p className="booking-error" role="alert">{error}</p>}
        <div className="booking-form-actions"><button className="button button-dark" type="submit">Continue to WhatsApp <ArrowUpRight size={17} /></button><p className="booking-form-note">Your details are placed into a WhatsApp message. Nothing is sent until you press Send in WhatsApp.</p></div>
      </form>
    </div>
    <p className="contact-email"><a href="mailto:joysentattookondapur@gmail.com">joysentattookondapur@gmail.com</a></p>
    <p className="contact-address">Contact person: Naresh Sherala · 8897770464</p>
    <p className="contact-address">Beside Barbeque Nation / beside RRG Wines, Circle, opposite Sarath City Capital Mall (AMB Mall), near Kothaguda, Kondapur, Hyderabad, Telangana 500084.</p>
    <small>Call or message the studio to confirm current opening hours, pricing and appointment availability.</small>
  </section>;
}

function Footer() {
  return <footer className="site-footer">
    <div className="footer-top"><a className="brand footer-brand" href="#top"><img className="brand-logo" src="/assets/brand/joysen-logo.png" alt="Joysen Tattoo Studio monogram logo" /></a><p>CUSTOM INK<br /><em>MADE PERSONAL.</em></p><a className="footer-top-link" href="#top">BACK TO TOP ↑</a></div>
    <div className="footer-socials">
      <a href="https://www.instagram.com/joysen_tattookondapur" target="_blank" rel="noreferrer">Instagram ↗</a>
      <a href="https://www.facebook.com/joysentattooandpiercingstudiokothagudakondapur/" target="_blank" rel="noreferrer">Facebook ↗</a>
      <a href="https://twitter.com/tattoosjoysen?lang=en" target="_blank" rel="noreferrer">Twitter ↗</a>
      <a href="https://www.youtube.com/@joysentattookondapurhyd7745/featured" target="_blank" rel="noreferrer">YouTube ↗</a>
    </div>
    <div className="footer-bottom"><span>© 2023 JOYSEN TATTOO STUDIO · ALL RIGHTS RESERVED</span><span>KONDAPUR · HYDERABAD · INDIA</span><a href="tel:+918897770464"><ArrowUpRight size={17} /> 088977 70464</a></div>
  </footer>;
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
        setShowTop(window.scrollY > 560);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return <>
    <div className="scroll-progress" role="progressbar" aria-label="Page scroll progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
      <span style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
    {showTop && <button className="back-to-top" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}><ArrowUp size={18} /></button>}
  </>;
}

function MobileQuickActions() {
  const whatsappMessage = encodeURIComponent("Hello Joysen Tattoo Studio, I would like to enquire about a tattoo or piercing appointment.");
  return <nav className="mobile-floating-contact" aria-label="Quick contact">
    <a className="floating-contact-whatsapp" href={`https://wa.me/918897770464?text=${whatsappMessage}`} target="_blank" rel="noreferrer" aria-label="Chat with Joysen on WhatsApp" title="WhatsApp">
      <MessageCircle size={23} strokeWidth={2.2} />
    </a>
    <a className="floating-contact-call" href="tel:+918897770464" aria-label="Call Joysen Tattoo Studio" title="Call studio">
      <Phone size={21} fill="currentColor" />
    </a>
  </nav>;
}

export default function App() {
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(null);
  const selectedService = services.find((item) => item.slug === selectedServiceSlug) || null;
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const targets = document.querySelectorAll(
      "main > section, .intro-strip, .section-heading, .gallery-art, .service-card, .artist-card, .location-card, .faq-item, .booking-form-wrap"
    );
    targets.forEach((element) => element.classList.add("motion-reveal"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <>
    <ScrollProgress />
    <a className="skip-link" href="#hero-title">Skip to main content</a>
    <Header />
    <main>
      {selectedService ? <ServiceCollectionPage service={selectedService} onBack={() => { setSelectedServiceSlug(null); window.setTimeout(() => document.getElementById("artists")?.scrollIntoView({ behavior: "smooth" }), 0); }} /> : <>
      <Hero />
      <div className="intro-strip reference-stats"><div><strong>2,300</strong><span>happy clients</span></div><div><strong>14</strong><span>in the expert team</span></div><div><strong>60</strong><span>design categories</span></div><div><strong>10,000</strong><span>new designs</span></div><small>Figures as listed on the studio's previous website.</small></div>
      <Stories />
      <Artists onOpenService={setSelectedServiceSlug} />
      <Offers />
      <TattooCare />
      <Locations />
      <Consultation />
      </>}
    </main>
    <Footer />
    <MobileQuickActions />
  </>;
}
