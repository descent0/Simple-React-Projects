export default function MainDiv() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="w-[900px] h-[450px] p-10 flex">
          <div className="flex flex-col w-[500px] space-y-4 justify-between">
            <div className="font-extrabold text-6xl">
              Your feet deserve the best
            </div>
            <div className="flex flex-col justify-between space-y-3">
              <div className="lowercase">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                OUR SHOES.
              </div>
              <div className="flex space-x-6 ">
                <button className="bg-[#D01C28] text-white rounded-sm pl-2 pr-2 content-center">
                  Shop Now
                </button>
                <button className="border border-black pl-2 pr-2 rounded-sm content-center">
                  Categories
                </button>
              </div>
              <div className="flex flex-col w-[131px ] h-[67px] space-y-1 justify-evenly">
                <div className="text-xs">is also availaible at</div>
                <div className="flex flex-row">
                  <a href="#">
                    <img src="/brandpage/flipkart.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/brandpage/amazon.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="/brandpage/shoe_image.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
