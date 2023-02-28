import { FaGooglePlay, FaAppStore } from 'react-icons/fa'
const Pricing = () => {
  return (
    <section className="sm:px-8 md:px-16 px-4 py-12 text-white">
      <div className="flex items-center mb-16 w-fit">
        <div className="w-2 h-10 bg-yellow-400 mr-3"></div>
        <h2 className="text-3xl font-bold">Our Pricing Plans</h2>
      </div>
      <div className="flex flex-wrap justify-around sm:mb-48 mb-16 gap-4">
        <div className="h-[380px] bg-amber-700 w-[300px] flex flex-col items-center justify-around p-4">
          <h4 className="text-xl font-bold">Bronze Plan</h4>
          <div className="flex">
            <h2 className="text-4xl font-bold">$7.99</h2>
            <p className="mt-4">/month</p>
          </div>
          <hr className="w-full" />
          <div className="">
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">No Ads</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">Unlimited Stream time</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">20 Monthly downloads</p>
            </div>
          </div>
          <button className="border-solid border-2 border-yellow-300 py-3 px-5 font-bold text-yellow-300">
            Choose Plan
          </button>
        </div>
        <div className="h-[380px] bg-yellow-400 w-[300px] flex flex-col items-center justify-around p-4 shadow-[4px_4px_40px_5px_gold]">
          <h4 className="text-xl font-bold">Gold Plan</h4>
          <div className="flex">
            <h2 className="text-4xl font-bold">$12.99</h2>
            <p className="mt-4">/month</p>
          </div>
          <hr className="w-full" />
          <div className="">
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">No Ads</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">Unlimited Stream time</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">100 Monthly downloads</p>
            </div>
          </div>
          <button className="border-solid border-2 border-yellow-300 py-3 px-5 font-bold text-yellow-300 bg-black">
            Choose Plan
          </button>
        </div>
        <div className="h-[380px] bg-gray-500 w-[300px] flex flex-col items-center justify-around p-4">
          <h4 className="text-xl font-bold">Silver Plan</h4>
          <div className="flex">
            <h2 className="text-4xl font-bold">$9.99</h2>
            <p className="mt-4">/month</p>
          </div>
          <hr className="w-full" />
          <div className="">
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">No Ads</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">Unlimited Stream time</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-4xl">•</span>
              <p className="text-xl font-bold">50 Monthly downloads</p>
            </div>
          </div>
          <button className="border-solid border-2 border-white py-3 px-5 font-bold">
            Choose Plan
          </button>
        </div>
      </div>
      <div className="max-w-[1500px] shadow-[2px_2px_10px_3px_gold] flex flex-col items-center justify-center m-auto py-10">
          <h2 className='sm:text-2xl text-xl font-bold m-4'>Download Our Mobile Application</h2>  
          <div className="flex sm:gap-4 flex-wrap items-center justify-center">
          <button className=" w-48 flex items-center justify-center text-xl font-semibold border-yellow-400 border-2 py-3 px-5 gap-2">Google Play<FaGooglePlay /></button>
          <button className=" w-48 flex items-center justify-center text-xl font-semibold border-yellow-400 border-2 py-3 px-5 gap-2">App Store<FaAppStore /></button>
          </div>      
      </div>
    </section>
  );
};


export default Pricing;
