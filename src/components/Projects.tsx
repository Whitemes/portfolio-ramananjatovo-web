import projects from '../data/projects.json';

export default function Projects() {
  return (
    <section id="projects" className="py-16 text-white bg-dark-card">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projets</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <div key={i} className="bg-dark-bg p-6 rounded-lg shadow-lg hover:shadow-neon transition-all duration-300">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-sm text-dark-text-secondary mb-2">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.technos.map((tech: string, j: number) => (
                  <span key={j} className="text-xs bg-gray-800 px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
