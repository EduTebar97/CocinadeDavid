
import React from 'react';
import { Link } from 'react-router-dom';

const VerMenu: React.FC = () => {
  return (
    <section className="text-center py-12 bg-primary/5 dark:bg-primary/10 rounded-xl">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
          Explora Nuestra Cocina
        </h2>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
          Descubre la variedad completa de nuestros platos caseros, menús especiales y mucho más.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/menu"
            className="inline-flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-md transition-transform hover:scale-105"
          >
            <span className="truncate">Ver todos los platos</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VerMenu;
