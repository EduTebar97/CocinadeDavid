
import React from 'react';

const SpecialMenu: React.FC = () => {
  const menus = [
    {
      name: 'Menú Vegano',
      description: 'Platos 100% vegetales, llenos de sabor y creatividad.',
      imageUrl: 'https://picsum.photos/seed/vegan/300/300',
    },
    {
      name: 'Menú Fitness',
      description: 'Opciones equilibradas y nutritivas para cuidar tu cuerpo.',
      imageUrl: 'https://picsum.photos/seed/fitness/300/300',
    },
    {
      name: 'Menú para Trabajadores',
      description: 'Comida casera, rápida y económica para tu día a día.',
      imageUrl: 'https://picsum.photos/seed/work/300/300',
    },
  ];

  return (
    <section>
      <h2 className="px-4 pb-4 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
        Menús Especiales
      </h2>
      <div className="flex overflow-x-auto p-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex flex-nowrap gap-6">
          {menus.map((menu) => (
            <div key={menu.name} className="w-64 flex-shrink-0">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full aspect-square rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${menu.imageUrl})` }}
                ></div>
                <div>
                  <h3 className="font-medium text-stone-900 dark:text-stone-100">{menu.name}</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    {menu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
