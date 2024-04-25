import Image from "next/image";
import coffee from "./assets/coffee-cup.png";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center flex-col gap-4 pt-10 mb-2 items-center h-[40vh] mt-10">
        <div
          className="flex justify-center items-center text-white text-6xl 
        notable-regular  "
        >
          Buy me a Chai
          <Image
            src={coffee}
            className="w-12 h-12 ml-4 justify-center items-center from-purple-900 to-purple-900"
          ></Image>
        </div>
        <p className="text-white syncopate-regular text-center">
          Accept support. Start a membership. Setup a shop. <br /> It’s easier
          than you think.
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-800 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-white  rounded-lg text-lg px-8 py-5 text-center me-2.5 syncopate-bold font-extrabold"
          >
            Start Here!
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-800 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-white rounded-lg text-lg px-8 py-5 text-center me-2.5 mb-2 syncopate-bold font-extrabold mt-5"
          >
            Read More
          </button>

          <button></button>
        </div>
      </div>
    </div>
  );
}
