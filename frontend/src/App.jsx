import { BiLike } from "react-icons/bi";
import { FaXTwitter, FaArrowRight } from "react-icons/fa6";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Marquee } from "./components/Marqee";
import HowToBuy from "./components/HowToBuy";
import About from "./components/About";

function App() {
  return (
    <div className="bg-[#07091D] text-white">
      <div className=" px-5 md:px-10 h-screen py-5 md:py-10">
        <div className=" w-full h-full border-4 border-[#45B9F6] rounded-3xl relative bg-white/5 overflow-hidden">
          <div className=" w-40 absolute -right-5 -top-10 ">
            <img src="/moon.webp" alt="" className=" w-full h-full" />
          </div>

          {/* navbar  */}
          <div className=" px-5 md:px-24">
            <div className=" flex items-center justify-between pt-2">
              <div className=" flex items-center gap-5">
                <a href="/" className=" heading text-[#45B9F6]">
                  HOME
                </a>
                <a href="#about" className=" heading text-[#45B9F6]">
                  ABOUT
                </a>
                <a href="#howtobuy" className=" heading text-[#45B9F6]">
                  HOW TO BUY
                </a>
              </div>

              <div className=" w-24 rounded-full overflow-hidden">
                <video
                  src="https://res.cloudinary.com/dsdg8ke2n/video/upload/v1753196068/u9459915811_httpss.mj.runRcyC9nL55V4_animate_this_picture_sho_cf9a55b3-305d-4f5b-9290-0fc92b1a0056_3_u0o8zj.mov"
                  className=" w-full h-full"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
              <div className=" flex items-center gap-5 pr-10">
                <div>
                  <BiLike className=" text-[#45B9F6] text-2xl" />
                </div>
                <div>
                  <a href="https://x.com/biusolana" target="_blank">
                    <FaXTwitter className=" text-[#45B9F6] text-2xl" />
                  </a>
                </div>
                <a
                  href="https://letsbonk.fun/WAGAUZAcy1QQk6UctqVSNjC1vyoiLCJ4vGvPtjzbonk"
                  target="_blank"
                >
                  <button className=" px-10 bg-main py-2 rounded-lg border border-zinc-800">
                    <p className=" heading text-[#45B9F6]">BUY $BIU</p>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* hero  */}
          <div className=" w-full md:grid grid-cols-12 pl-2 md:pl-24">
            <div className=" col-span-6  mt-16">
              <div className=" px-5 py-1 border border-zinc-400 rounded-full w-max flex items-center gap-2">
                <FaAngleDoubleUp className=" text-green-500" />
                <p className=" text-xs font-medium">50% UP</p>
              </div>
              <h1 className=" monoton text-4xl md:text-7xl mt-5">$BIU</h1>
              <h1 className=" heading tracking-wide text-4xl md:text-5xl mt-5">
                CATTY MEMECOIN
              </h1>
              <p className=" text-zinc-300">
                BIU WERE INSPIRED BY THE DEADFELLAZ COLLECTION TO CREATE THE
                STRONGESTI COMMUNITY POSSIBLE BY UNITING MORE TALENTED ARTISTS
                AND INFLUENCERS
              </p>
              <div className=" w-full border-2 border-zinc-400 mt-5 pl-5 rounded-full h-12 flex items-center justify-between">
                <p className=" select-all">
                  WAGAUZAcy1QQk6UctqVSNjC1vyoiLCJ4vGvPtjzbonk
                </p>
                <a
                  href="https://letsbonk.fun/WAGAUZAcy1QQk6UctqVSNjC1vyoiLCJ4vGvPtjzbonk"
                  target="_blank"
                  className=" px-5 rounded-r-full bg-[#45B9F6] hover:bg-[#3b9ed3] duration-200 h-full flex items-center justify-center"
                >
                  <FaArrowRight />
                </a>
              </div>
            </div>

            <div className=" col-span-6 ">
              <div className=" w-96 h-96 bg-main rounded-full md:ml-20 p-10 flex items-center justify-center">
                <div className=" bg-[#0a0c29] w-full h-full rounded-full p-10">
                  <div className=" w-full h-full rounded-full bg-main overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196067/raw_2_hgzi7w.webp"
                      className=" w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* hero end */}
        </div>
      </div>
      {/* about  */}
      <About />
      {/* about end */}

      {/* arts  */}
      <Marquee />
      {/* arts end */}

      {/* how to buy  */}

      <HowToBuy />

      {/* how to buy end */}

      <div className=" w-full flex flex-col md:flex-row items-center justify-between px-5 md:px-24 py-10">
        <div className="">
          <div className=" w-14 h-14 rounded-full overflow-hidden border border-zinc-700">
            <img
              src="https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196068/raw_6_xxhtbm.webp"
              alt=""
              className=" w-full h-full"
            />
          </div>
          <h1 className=" heading text-lg mt-2">Join The Community</h1>
          <a
            href="https://x.com/biusolana"
            target="_blank"
            className=" mt-2 flex items-center gap-2"
          >
            <FaXTwitter /> <span className=" text-zinc-300">Twitter</span>
          </a>
        </div>
        <p className=" text-2xl monoton">
          © {new Date().getFullYear()} Biusolana
        </p>
      </div>
    </div>
  );
}

export default App;
