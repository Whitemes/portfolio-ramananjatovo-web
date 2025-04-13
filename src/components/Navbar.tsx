export default function Navbar() {
    return (
      <nav className="w-full p-4 text-white bg-dark-bg shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between">
          <span className="font-bold text-lg">J. RAMANANJATOVO</span>
          <div className="space-x-4 hidden md:block">
            <a href="#hero" className="hover:text-accent-neon">Accueil</a>
            <a href="#projects" className="hover:text-accent-neon">Projets</a>
            <a href="#skills" className="hover:text-accent-neon">Compétences</a>
            <a href="#about" className="hover:text-accent-neon">À propos</a>
            <a href="#contact" className="hover:text-accent-neon">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  