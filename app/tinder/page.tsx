import CardLoaderComponent from "./components/cardLoader.component";

export default function Page() {
  return(
      <div className="flex flex-col w-full">
          <h1 className="py-10 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span
              className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-200 from-pink-500">Swipe </span>tes
              infos.
          </h1>
          <p className="text-center text-xl font-bold pb-4">{"Parcours ce Tinder de l\'information: Swipe les fausses à gauche et match avec les vraies !"}</p>
          <CardLoaderComponent/>
      </div>
  );
}