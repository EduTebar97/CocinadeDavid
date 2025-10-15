
import React from 'react';

const Reservations: React.FC = () => (
  <main className="container mx-auto px-6 py-12">
    <div className="relative min-h-[400px] flex items-end justify-start rounded-xl overflow-hidden mb-12">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBg0b8VgxQhvdEmKhJHwrS4dbvJOmrL-_OpZIwipO_80g5tgCoQInFHullZyhCAf8bKCs478hPIqU1-wdJiNniuZ_Q-Cz4BzoDtkUCHBaBCGgTxXm9-UqYBqIwnquFFmOr1WzbXWowd0sEWXy6w358R5qM7-L6TGWMxnt8m3LtDlSbXNy0k8vGquOUxDTjSajMBzvJIoZh5W1mrMJ5e0mXbKTF2reUFTKeMfMGqFbf42Njwn-6HpdqHZ1IovdlMN0Ezs774g4dte1U")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      <div className="relative p-8">
        <h1 className="text-5xl font-extrabold text-white text-shadow">Specialty Rice and Paellas</h1>
      </div>
    </div>
    <div className="max-w-3xl mx-auto text-center mb-12">
      <p className="text-lg text-neutral-700 dark:text-neutral-300">
        At Taste of Home, our love for rice is at the heart of our culinary creations. We use only the finest
        ingredients to craft each dish, ensuring a memorable dining experience. Our paellas are a testament to our
        commitment to quality and tradition.
      </p>
    </div>
    <div className="bg-primary/10 dark:bg-primary/20 p-8 rounded-xl mb-12 flex flex-col md:flex-row items-center gap-6 border-l-4 border-primary">
      <span className="material-symbols-outlined text-primary text-5xl">info</span>
      <div>
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">Important Notice</h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          Please note that all paella orders require a <strong>24-hour advance notice</strong> to ensure the freshest
          preparation and availability. We appreciate your understanding and look forward to serving you.
        </p>
      </div>
    </div>
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-neutral-900 dark:text-neutral-100">Our Rice Dishes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
          <div
            className="w-full h-48 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbA6_iaaacbW81UuPFnbTvTnTzYY8pkmweUdvZHgX8nMSEogBz_58M2w_tdkdDw4meDt5ot_lE1eIfIhM2jdi7cFqPqyK8V67LpQJVfOKuRchxZ7ZF4JQpMJb7oT1LJS3lemUFlAzNXNeWricVjOe6MDogLAqXxoFST4DtTB1hLqicvN1FaMUT53HXcgOwdJ8i3fF6En1rFvVQVwWEvoELnvSAq0D_uDChQ0oKqBd_mdu2UAYb_BiXZiQy0MWqD_PH5r6ReiweZLY")',
            }}
          ></div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Seafood Paella</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              A classic paella with a variety of fresh seafood.
            </p>
          </div>
        </div>
        <div className="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
          <div
            className="w-full h-48 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCF6Yo7_TKPma-u6K8pEKPcaWvJqsOU4yVB8_hDj7HkaBOUAjVnYh4EPuk18Yt1cBoZvisqaDrz78FYFLOVZvqr1zmmJKrC2eCLXrc8hFb0OjDG_gm7FGsGdnV5BrBUb_fiO5VY8kzQHFlph6zNJ8_Ar8sdstQeEQXt81FCt6mc1ikr3veeUKhrnYchWctxmuTg2ZZucUZsnaIikj4VTfLQBuCGsw30l8u_2rFCFRYSmwT85A0iLFY15pH0mfWpRsKr5juGsdV3iH4")',
            }}
          ></div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Chicken & Chorizo Paella</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              A hearty paella with tender chicken and spicy chorizo.
            </p>
          </div>
        </div>
        <div className="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
          <div
            className="w-full h-48 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDoi7UFHW_nUWlFoRKpD0mhxljV_rFGNQOH5p_X65MS7VCcy4oAvcY2xWaLELXHe5Hi0rEID1OZDP6gq_0jN2gVekWRGAFF1wjuM2yBv70SStRXCxW_8AxH1FS28ecT45y7mZqGfmzVS-PJ7C0_XEsWt_8IlWXFueIjp7NbCnNQv4t3tNEQawxsuDkgtUcozXcU6a7TaUx6KVePXu3N_Z0dP13HfBX2H5LwTMHkSfYnwXZ09L3GaPm60a2aSuuTd3LZJsaomrZVK6s")',
            }}
          ></div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Vegetable Paella</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              A flavorful paella with a medley of seasonal vegetables.
            </p>
          </div>
        </div>
        <div className="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
          <div
            className="w-full h-48 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2xJ-2dRYriFXcWAzpDJOBpb6LtaJk5agj9y2c5tmKEAQ0nS1DmU-TPu_0wrVb0ZIgwsji2atSwrws25-IXzRuRebmjVnBvrE3xtl7ae7R3BsXEQyr-AApa9OggswFJSuWm3qNRSVUM8hrekePR9qmT-zh47ixP5JfGrEco8S-c6wfw8bbmX4KY_M3z-T3WeEvEzi2_oL6_9EGCaMfaan3WwizNWUB59Q2RF4j6XOZk5Mt86lzpLkZ6cv-UZ4HZRBfeNvCAayVZUY")',
            }}
          ></div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Mixed Paella</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              A combination of seafood, chicken, and vegetables.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-background-light dark:bg-background-dark/50 rounded-xl p-10 text-center">
      <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">Group Orders & Catering</h2>
      <p className="max-w-2xl mx-auto text-neutral-700 dark:text-neutral-300 mb-8">
        Planning a large gathering? We offer special pricing and custom options for group orders. Please call us to
        discuss your needs and place your order.
      </p>
      <button className="bg-primary text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/40">
        <span className="material-symbols-outlined align-middle mr-2">call</span>
        Call for Large Orders
      </button>
    </div>
  </main>
);

export default Reservations;
