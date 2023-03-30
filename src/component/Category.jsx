import Bouton from "./Bouton";
import { auth } from "../firebase/firebase";
function Box() {
  const user = auth.currentUser;
  return (
    <>
      <div className="flex items-center justify-center">
        {user && <Bouton path={"mes-commandes"} label={"Mes commandes"} />}
      </div>
      <div className="max-w-screen-lg mx-auto flex-auto text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <img
            src="https://i.etsystatic.com/22672222/r/il/62f430/2400458247/il_1588xN.2400458247_jlkn.jpg"
            className="md:basis-[30%] basis-full bg-cover bg-center flex flex-1 h-[300px]"
          />
          <Bouton path={"Jordan"} label={"Jordan"} extraCss={"test"} />
        </div>
        <div>
          <img
            src="https://www.webstickersmuraux.com/fr/img/as1281-jpg/folder/products-listado-merchanthover/stickers-muraux-logo-nike.jpg"
            className="md:basis-[30%] basis-full bg-cover bg-center flex flex-1 h-[300px]"
          />
          <Bouton path={"Nike"} label={"Nike"} extraCss={"test"} />
        </div>
        <div>
          <img
            src="https://www.makrea.com/img/scenes/ndkcp/p/1/2/2/3/1223-large_default.webp"
            className="md:basis-[30%] basis-full bg-cover bg-center flex flex-1 h-[300px]"
          />
          <Bouton path={"Adidas"} label={"Adidas"} extraCss={"test"} />
        </div>
      </div>
    </>
  );
}
export default Box;
