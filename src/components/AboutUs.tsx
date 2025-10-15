
import React from 'react';

const AboutUs: React.FC = () => (
  <main className="flex-1">
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center">
          <div className="w-full overflow-hidden rounded-xl shadow-lg">
            <img
              alt="Chef David in the kitchen"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6kohNeRKjysc1kju2so4h1_24hDrmA-n516GQ24k-GDXaFvq3VYbLeHrJy72eX7yx4GFF4seZ7FdkiRA2IQIeoNc3o5apIHl1C4hXCsiAtYS34XUMwyuC7yEVYt5FfNnydRrKrat7iqQuDR1ZxBrVJjDpvjiIhJaACV2ESaKqqovTPknr4mh_hA68uIeDa6FXcGcdbZ2s7_hhwbIhDrEfGEIbUZcF3G2rbE7_HlyicyRzjtJWHKy1lp-CBeZfComvB7II6iHI7cA"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-white sm:text-4xl">
              Tu Cocina de Confianza
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-stone-600 dark:text-stone-300 lg:mx-0">
              En Sabores de Casa, somos más que un simple restaurante; somos una extensión de tu hogar. Un espacio cálido y acogedor donde cada huésped se siente como en familia.
            </p>
          </div>
          <div className="space-y-4 text-stone-700 dark:text-stone-300">
            <p>
              Nuestra andadura comenzó en 2010, impulsada por la pasión por la auténtica cocina casera. Nuestra filosofía es sencilla: servir platos elaborados con amor, utilizando sólo los ingredientes más frescos de origen local.
            </p>
            <p>
              Creemos en el poder de la tradición y en la alegría de compartir una comida. Nuestros valores son el corazón de todo lo que hacemos: calidad, tradición, cercanía y funcionalidad. Nos comprometemos a mantener los más altos estándares, honrar las tradiciones culinarias y fomentar un sentido de comunidad.
            </p>
            <p>Únase a nosotros en Sabores de Casa, donde cada comida es una celebración del hogar.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default AboutUs;
