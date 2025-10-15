
import React from 'react';

const MenuPage: React.FC = () => {
  const menu = {
    'Arroces y fideuà': [
      'Arroz al horno',
      'Arroz del señoret',
      'Arroz negro',
      'Arroz con setas, boletus y verduritas',
      'Arroz de secreto y ajitos tiernos',
      'Paella valenciana',
      'Fideuà',
    ],
    'Carnes (incluye aves y casquería)': [
      'Pollo al horno',
      'Pollo y conejo al ajillo',
      'Pollo y conejo con tomate',
      'Pechugas con nata y cebolla',
      'Lomo a la pimienta',
      'Lomo con salsa de setas',
      'Longanizas con pisto',
      'Chuletas de pavo al horno',
      'Costillas al horno',
      'Costillas a la miel y mostaza',
      'Carrillada',
      'Carrillada al oporto',
      'Hígado con cebolla',
      'Magro',
      'Churrasco',
      'Manitas de cerdo',
      'Codillo al horno',
      'Pollo al limón',
      'Riñones en salsa verde',
      'Rabo de toro',
      'Albóndigas a la almendra',
      'Berenjena rellena de carne',
    ],
    'Pescados y mariscos': [
      'Merluza rebozada',
      'Merluza al papillote',
      'Merluza al horno con verduras',
      'Merluza en salsa verde',
      'Bacalao al pil-pil',
      'Bacalao a la muselina',
      'Bacalao con pisto',
      'Calamar con salsa',
      'Brochetas de calamar al horno con salsa de aguacate',
      'Pota rebozada',
      'Chipirón rebozado',
      'Jurel en escabeche casero y verduras',
      'Albóndigas de pescado en salsa',
      'Gambón en tempura',
      'Berberechos glaseados con salsa teriyaki',
    ],
    'Verduras / vegetariano / vegano': [
      'Salteado de verduras con garbanzos especiados',
      'Salteado de setas y ajitos con patatas a lo pobre',
      'Puré de calabacín, cebolla, patata y zanahoria',
      'Parrillada de verduras',
      'Pimientos rojos asados',
      'Filetes de seitán en salsa de pimienta',
      'Albóndigas de soja texturizada',
    ],
    'Ensaladas y platos fríos': [
      'Ensaladilla de pulpo',
      'Ensaladilla (normal)',
      'Ensalada de mayonesa y langostinos',
      'Ensaladas varias',
    ],
    'Entrantes / para picar': ['Bravas “Rincón”', 'Croquetas varias', 'Caracoles'],
    'Sopas y cremas': ['Crema de coliflor', 'Vichyssoise', 'Crema de champiñones'],
  };

  const getImageUrl = (dishName: string, index: number) => {
    // Use a more reliable placeholder service like picsum.photos
    // The seed ensures that each dish gets a unique but consistent image
    const seed = dishName.length + index;
    return `https://picsum.photos/seed/${seed}/300/300`;
  };

  return (
    <div className="min-h-screen w-full">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-12 text-center">
            Nuestra Cocina, en Tu Mesa
          </h1>

          {Object.entries(menu).map(([category, dishes]) => (
            <section key={category} className="mb-12">
              <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-200 mb-6">
                {category}
              </h2>
              <div className="flex overflow-x-auto p-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4">
                <div className="flex flex-nowrap gap-6 px-4">
                  {dishes.map((dish, index) => (
                    <div key={dish} className="w-64 flex-shrink-0 group">
                      <div className="flex flex-col gap-3">
                        <div
                           className="w-full aspect-square rounded-lg bg-cover bg-center overflow-hidden transform group-hover:scale-105 transition-transform duration-300 shadow-md"
                           style={{
                             backgroundImage: `url(${getImageUrl(dish, index)})`,
                           }}
                        ></div>
                        <div>
                          <h3 className="font-medium text-stone-900 dark:text-stone-100 text-lg">{dish}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <div className="mt-12 p-4 rounded-lg bg-primary/10 dark:bg-primary/20 text-center">
            <p className="text-sm text-stone-700 dark:text-stone-300">
              Nota: Los precios pueden variar según la disponibilidad de ingredientes frescos.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuPage;
