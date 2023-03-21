function Card() {
  return (
    <div>
      <div>
        <h2 className="text-center mt-20 font-bold underline text-3xl">
          Nos produits les plus vendus
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8 gap-4 mt-10 m-3">
        <div class="p-2 bg-white rounded-md">
          <img
            src="/src/images/products/p1.jpg"
            alt=""
            class="h-52 w-full object-cover"
          />
          <div class="text-center my-2">
            <strong> Plain white t-shirt </strong>
            <p class="">A simple proudct description here</p>
            <p class="font-bold text-lg italic my-2">from 9.99€</p>
            <button class="  hover:bg-cyan-500 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">
              Voir
            </button>
          </div>
        </div>

        <div class="p-2 bg-white rounded-md">
          <img
            src="/src/images/products/p2.jpg"
            alt=""
            class="h-52 w-full object-cover"
          />
          <div class="text-center my-2">
            <strong> Plain white t-shirt </strong>
            <p class="">A simple proudct description here</p>
            <p class="font-bold text-lg italic my-2">from 9.99€</p>
            <button class=" hover:bg-cyan-500 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">
              Voir
            </button>
          </div>
        </div>

        <div class="p-2 bg-white rounded-md">
          <img
            src="/src/images/products/p3.jpg"
            alt=""
            class="h-52 w-full object-cover"
          />
          <div class="text-center my-2">
            <strong> Plain white t-shirt </strong>
            <p class="">A simple proudct description here</p>
            <p class="font-bold text-lg italic my-2">from 9.99€</p>
            <button class="hover:bg-cyan-500 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">
              Voir
            </button>
          </div>
        </div>

        <div class="p-2 bg-white rounded-md">
          <img
            src="/src/images/products/p4.jpg"
            alt=""
            class="h-52 w-full object-cover"
          />
          <div class="text-center my-2">
            <strong> Plain white t-shirt </strong>
            <p class="">A simple proudct description here</p>
            <p class="font-bold text-lg italic my-2">from 9.99€</p>
            <button class="hover:bg-cyan-500 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">
              Voir
            </button>
          </div>
        </div>

        <div class="p-2 bg-white rounded-md">
          <img
            src="/src/images/products/p5.jpg"
            alt=""
            class="h-52 w-full object-cover"
          />
          <div class="text-center my-2">
            <strong> Plain white t-shirt </strong>
            <p class="">A simple proudct description here</p>
            <p class="font-bold text-lg italic my-2">from 9.99€</p>
            <button class=" hover:bg-cyan-500 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">
              Voir
            </button>
          </div>
        </div>

        <div class="p-2 bg-white rounded-md">
          <img
            src="/src/images/products/p6.jpg"
            alt=""
            class="h-52 w-full object-cover"
          />
          <div class="text-center my-2">
            <strong> Plain white t-shirt </strong>
            <p class="">A simple proudct description here</p>
            <p class="font-bold text-lg italic my-2">from 9.99€</p>
            <button class=" hover:bg-cyan-500 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">
              Voir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
