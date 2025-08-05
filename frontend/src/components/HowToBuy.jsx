function HowToBuy() {
  return (
    <div
      id="howtobuy"
      className=" relative text-white h-screen bg-[url('https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753196067/catbannernew1_oxfifu.webp')]"
    >
      <div className=" absolute top-0 w-full h-20 bg-gradient-to-t to-main from-transparent"></div>
      <div className=" absolute bottom-0 w-full h-20 bg-gradient-to-t from-main to-transparent"></div>
      <h1 className=" text-center text-4xl md:text-5xl pt-20 monoton">
        HOW TO BUY
      </h1>
      <div className="w-full gap-5 md:gap-10 grid grid-cols-1 md:grid-cols-2 px-5 md:px-24 mt-10">
        <div className=" w-full relative flex flex-col items-center">
          <div className=" w-full h-8 rounded-full bg-yellow-300 absolute -bottom-3 left-0 right-0 drop-shadow-[0px_0px_10px_#d130af]"></div>
          <div className=" px-5 md:px-12 w-[90%] h-52 flex flex-col items-center bg-[#07091d] border-2 border-[#45B9F6] rounded-3xl justify-center drop-shadow-[0px_0px_10px_#d130af]">
            <h1 className=" text-4xl heading">Create a Wallet</h1>
            <p className=" mt-2 text-zinc-300 text-center">
              CREATE A PHANTOM WALLET THAT SUPPORTS SOLANA (SOL)
            </p>
          </div>
        </div>
        <div className=" w-full relative flex flex-col items-center">
          <div className=" w-full h-8 rounded-full bg-yellow-300 absolute -bottom-3 left-0 right-0 drop-shadow-[0px_0px_10px_#d130af]"></div>
          <div className=" px-5 md:px-12 w-[90%] h-52 flex flex-col items-center bg-[#07091d] border-2 border-[#45B9F6] rounded-3xl justify-center drop-shadow-[0px_0px_10px_#d130af]">
            <h1 className=" text-4xl heading">BUY SOL</h1>
            <p className=" mt-2 text-zinc-300 text-center">
              PURCHASE SOLANA (SOL) IN YOUR PHANTOM WALLET
            </p>
          </div>
        </div>
        <div className=" w-full relative flex flex-col items-center mt-5">
          <div className=" w-full h-8 rounded-full bg-yellow-300 absolute -bottom-3 left-0 right-0 drop-shadow-[0px_0px_10px_#d130af]"></div>
          <div className=" px-5 md:px-12 w-[90%] h-40 flex flex-col items-center bg-[#07091d] border-2 border-[#45B9F6] rounded-3xl justify-center drop-shadow-[0px_0px_10px_#d130af]">
            <h1 className=" text-4xl heading">CONNECT WALLET</h1>
            <p className=" mt-2 text-zinc-300 text-center">
              CONNECT YOUR PHANTOM WALLET TO PUMP.FUN
            </p>
          </div>
        </div>
        <div className=" w-full relative flex flex-col items-center mt-5">
          <div className=" w-full h-8 rounded-full bg-yellow-300 absolute -bottom-3 left-0 right-0 drop-shadow-[0px_0px_10px_#d130af]"></div>
          <div className=" px-5 md:px-12 w-[90%] h-40 flex flex-col items-center bg-[#07091d] border-2 border-[#45B9F6] rounded-3xl justify-center drop-shadow-[0px_0px_10px_#d130af]">
            <h1 className=" text-4xl heading">SWAP $BIU</h1>
            <p className=" mt-2 text-zinc-300 text-center">
              SWAP THE SOL TO YOUR FAVORITE $BIU
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToBuy;
