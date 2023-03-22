function Card() {
  return (
    <div>
      <div>
        <h2 className="text-center mt-20 font-bold underline text-3xl">
          Nos produits les plus vendus
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8 gap-4 mt-10 m-3">
        <div className="p-2 bg-white rounded-md">
          <img
            src="/src/images/products/p1.jpg"
            alt=""
            className="h-52 w-full object-cover"
          />
          <div className="text-center my-2">
            <strong> Plain white t-shirt </strong>
            <p className="">A simple proudct description here</p>
            <p className="font-bold text-lg italic my-2">from 9.99€</p>
            <button className="  hover:bg-cyan-500 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">
              Voir
            </button>
          </div>
        </div>

        <div className="p-2 bg-white rounded-md">
          <img
            src="/src/images/products/p2.jpg"
            alt=""
            className="h-52 w-full object-cover"
          />
          <div className="text-center my-2">
            <strong> Plain white t-shirt </strong>
            <p className="">A simple proudct description here</p>
            <p className="font-bold text-lg italic my-2">from 9.99€</p>
            <button className=" hover:bg-cyan-500 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">
              Voir
            </button>
          </div>
        </div>

        <div className="p-2 bg-white rounded-md">
          <img
            src="/src/images/products/p3.jpg"
            alt=""
            className="h-52 w-full object-cover"
          />
          <div className="text-center my-2">
            <strong> Plain white t-shirt </strong>
            <p className="">A simple proudct description here</p>
            <p className="font-bold text-lg italic my-2">from 9.99€</p>
            <button className="hover:bg-cyan-500 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">
              Voir
            </button>
          </div>
        </div>

        <div className="p-2 bg-white rounded-md">
          <img
            src="/src/images/products/p4.jpg"
            alt=""
            className="h-52 w-full object-cover"
          />
          <div className="text-center my-2">
            <strong> Plain white t-shirt </strong>
            <p className="">A simple proudct description here</p>
            <p className="font-bold text-lg italic my-2">from 9.99€</p>
            <button className="hover:bg-cyan-500 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">
              Voir
            </button>
          </div>
        </div>

        <div className="p-2 bg-white rounded-md">
          <img
            src="/src/images/products/p5.jpg"
            alt=""
            className="h-52 w-full object-cover"
          />
          <div className="text-center my-2">
            <strong> Plain white t-shirt </strong>
            <p className="">A simple proudct description here</p>
            <p className="font-bold text-lg italic my-2">from 9.99€</p>
            <button className=" hover:bg-cyan-500 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">
              Voir
            </button>
          </div>
        </div>

        <div className="p-2 bg-white rounded-md">
          <img
            src="/src/images/products/p6.jpg"
            alt=""
            className="h-52 w-full object-cover"
          />
          <div className="text-center my-2">
            <strong> Plain white t-shirt </strong>
            <p className="">A simple proudct description here</p>
            <p className="font-bold text-lg italic my-2">from 9.99€</p>
            <button className=" hover:bg-cyan-500 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">
              Voir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
