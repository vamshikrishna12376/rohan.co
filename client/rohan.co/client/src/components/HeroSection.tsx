
import Image from "../assets/Rectangle 2.png"

export default function HeroSection() {
  return (
    <div className='w-full h-[90vh] bg-[#F2F0F1] flex'>
      <div className='w-1/2 h-full flex flex-col items-center justify-center gap-6'>
        <h1 className='text-center text-6xl font-bold w-3/4'>FIND CLOTHES THAT MATCH YOUR STYLE</h1>
        <p className='text-center w-3/4 text-xl'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className='border-2 rounded-lg py-2 px-4 bg-black text-white'>Shop Now</button>


      
      </div>
      <div className='w-1/2 h-full flex items-center justify-end'>
        <img src={Image} alt=""  className='w-3/4 h-full'/>
      </div>
    </div>
  )
}
