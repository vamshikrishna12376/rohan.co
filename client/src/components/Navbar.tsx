
export default function Navbar() {
  return (
    <div className='w-full h-[10vh] bg-white flex flex-row'>
      <div className='w-[25%]  text-black font-sans font-extrabold flex items-center justify-center tracking-widest text-3xl '>ROHAN.CO</div>
      <div className='w-[50%]  flex items-center justify-center'>
        <ul className='flex flex-row w-full  items-center justify-center gap-10'>
            <li className='font-sans text-xl text-gray font-bold cursor-pointer'>SHOP</li>
            <li className='font-sans text-xl text-gray font-bold cursor-pointer'>ON SALE</li>
            <li className='font-sans text-xl text-gray font-bold cursor-pointer'>NEW ARRIVALS</li>
            <li className='font-sans text-xl text-gray font-bold cursor-pointer'>BRANDS</li>
        </ul>
      </div>
      <div className='w-[25%]  flex items-center justify-center gap-5'>
        <button className='flex flex-row gap-4 hover:p-4 hover:bg-gray-300 hover:rounded-xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="47.998" height="40.34"><g fill="#1a171b"><path d="M47.273 0h-6.544a.728.728 0 0 0-.712.58L38.63 7.219H.727a.727.727 0 0 0-.7.912l4.6 17.5c.006.021.019.037.026.059a.792.792 0 0 0 .042.094.747.747 0 0 0 .092.135.831.831 0 0 0 .065.068.626.626 0 0 0 .167.107.285.285 0 0 0 .045.029l13.106 5.145-5.754 2.184a4.382 4.382 0 1 0 .535 1.353l7.234-2.746 6.866 2.7A4.684 4.684 0 1 0 27.6 33.4l-5.39-2.113 13.613-5.164c.013-.006.021-.016.033-.021a.712.712 0 0 0 .188-.119.625.625 0 0 0 .063-.072.654.654 0 0 0 .095-.135.58.58 0 0 0 .04-.1.73.73 0 0 0 .033-.084l5.042-24.137h5.953a.728.728 0 0 0 0-1.455zM8.443 38.885a3.151 3.151 0 1 1 3.152-3.15 3.155 3.155 0 0 1-3.152 3.15zm23.1-6.3a3.151 3.151 0 1 1-3.143 3.149 3.155 3.155 0 0 1 3.148-3.152zM25.98 8.672l-.538 7.3H14.661l-.677-7.295zm-.645 8.75-.535 7.293h-9.328l-.672-7.293zM1.671 8.672h10.853l.677 7.3h-9.61zm2.3 8.75h9.362l.677 7.293H5.892zM20.2 30.5 9.175 26.17H31.6zm14.778-5.781h-8.722l.537-7.293h9.7zm1.822-8.752h-9.9l.537-7.295h10.889z"/><circle cx="8.443" cy="35.734" r=".728"/><circle cx="31.548" cy="35.734" r=".728"/></g></svg>
            
        </button>
        

      </div>
    </div>
  )
}
