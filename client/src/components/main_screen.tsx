import { Playfair_Display } from "next/font/google"

const font = Playfair_Display({
    subsets: ["latin"],
    weight: "400",
});

export default function () {
    return (
      <div className="">
        <h1 className={font.className + " text-6xl font-bold z-10"}>
          <span className="text-8xl text-red-400">M</span>edi
          <span className="text-red-400 text-8xl">C</span>o.
        </h1>
        <p className="p-2 text-center text-xl">Enabling assistance to <span className="text-red-300">you</span></p>
      </div>
    )
  }