export default function Contact() {
    return (
      <section id="contact" className="py-16 text-white bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="mb-4">Envie de discuter d’un projet ou d’une opportunité ?</p>
          <a
            href="mailto:ramananmichel@gmail.com"
            className="inline-block bg-accent-neon text-black px-6 py-3 rounded-md font-medium hover:scale-105 transition"
          >
            Envoyer un email
          </a>
        </div>
      </section>
    );
  }
  