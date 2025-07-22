import React from "react";

function About() {
  return (
    <div id="about" className="text-white min-h-screen">
      <h1 className=" text-center text-4xl md:text-5xl mt-10 monoton">
        MEET BIU
      </h1>
      <div className=" md:grid grid-cols-2 gap-4 px-5 md:px-24 mt-10">
        <div className="">
          <p className=" text-zinc-300 tracking-wide leading-7">
            Andy started as a carefree member of the Boys Club, a trippy kid who
            embodied the meme culture's wild side. But beneath his seemingly
            light-hearted exterior lies a crypto mastermind with deep ties in
            the Asian finance scene. By day, he's the lovable Boys Club Andy,
            but by night, he transforms into a stealthy operator on the Binance
            blockchain, navigating the high-stakes world of crypto with a
            007-like finesse. Underestimated by many, Andy isn't just a
            meme-he's a crypto degenerate with connections that run deeper than
            anyone could imagine. Welcome to the real Andy: the silent hitman of
            the digital finance world.
          </p>

          <div className=" flex items-center gap-3 mt-5">
            <a
              href="https://letsbonk.fun/WAGAUZAcy1QQk6UctqVSNjC1vyoiLCJ4vGvPtjzbonk"
              target="_blank"
            >
              <button className=" px-10 bg-[#131950] py-2 rounded-lg border border-zinc-800">
                <p className=" heading text-[#45B9F6]">BUY $BIU</p>
              </button>
            </a>
            <a href="https://x.com/biusolana" target="_blank">
              <button className=" px-10 bg-[#090c27] py-2 rounded-lg border border-zinc-800">
                <p className=" heading text-[#45B9F6]">JOIN COMMUNITY</p>
              </button>
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0 h-96 rounded-lg overflow-hidden">
          <video
            src="https://res.cloudinary.com/dsdg8ke2n/video/upload/v1753196068/u9459915811_httpss.mj.run1wZ4eA0xbc0_animate_this_picture_sho_aaf1a088-2c99-427d-b5bc-835901f89d6e_0_jwxk1z.mov"
            className=" w-full h-full object-cover"
            loop
            muted
            autoPlay
          ></video>
        </div>
      </div>
    </div>
  );
}

export default About;
