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
            BIU started as a chaotic meme cat from the depths of internet culture — wild, loud, and dangerously adorable. But behind the laser eyes and GIFs lurks a crypto predator with razor-sharp instincts. By day, it’s just another viral feline, but by night, BIU prowls the Solana blockchain like a stealth sniper, flipping tokens and farming liquidity in silence. Laughed off by many, BIU isn’t just a meme — it’s a degenerate with claws deep in DeFi and instincts sharper than most wallets. Welcome to BIU: the purring menace of the Solana network.
          </p>

          <div className=" flex items-center gap-3 mt-5">
            <a
              href="https://pump.fun/coin/VwiqhEWtHZLNygKRczE7CjRLesgFTN3Yo3kJTrnpump"
              target="_blank"
            >
              <button className=" px-10 bg-[#131950] py-2 rounded-lg border border-zinc-800">
                <p className=" heading text-[#45B9F6]">BUY $BIU</p>
              </button>
            </a>
            <a href="https://x.com/i/communities/1952792476370264552" target="_blank">
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
