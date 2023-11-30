import React from 'react'
import Image1 from "../assets/Image1.png"

const DetailPage = () => {
  return (
    <div className="w-screen h-screen bg-[#F2F4F6] flex justify-center items-center">
        <div className="w-[90%] h-[90%] bg-[white] flex justify-around items-center">
            <div className="w-[40%] h-[80%]  ml-[5%]">
         <img src ={Image1} alt ="" className= "w-[100%] h-[100%]"  />

            </div>
            <div className="w-[48%] h-[80%]  flex justify-around items-center flex-col ">
            <div className="w-full h-[60%]   flex justify-center flex-col gap-5">
                <p className="font-semi-bold text-xl text-[#3B82F6] ">Running shoes</p>
                <p className="font-bold text-4xl ">Air Pro X3 Aqua</p>
                <p className ="font-semi-bold text-grey text-[15px]">
                    <span className="text-grey  text-xl ">$60.00 </span>
                   <span className="text-grey font-bold  text-xl"> $58.00 </span> + Free Shipping
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in   elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.</p>
            </div>
            <div className="w-full h-[35%]  flex flex-col">
                <div className="w-[80%] h-[50%] bg-[white] border-t-2 border-[#3B82F6] border-b-2 border-[#3B82F6] flex justify-center items-center" >
                  <div className='w-[45%] h-[80%] flex items-center justify-center '>
                    <div className='w-[20%] h-[60%] bg-[white] border-solid border-2 border-[#ebe8e8] flex justify-center items-center'>+</div>
                    <div className='w-[20%] h-[60%] bg-[white] border-solid border-2 border-[#ebe8e8] flex justify-center items-center'>1</div>
                    <div className='w-[20%] h-[60%] bg-[white] border-solid border-2 border-[#ebe8e8] flex justify-center items-center'>-</div>
                 
                  </div>
                  <div className='w-[50%] h-[80%] flex justify-center items-center'>
                    <button className='w-[70%] h-[80%] bg-[#3B82F6] text-white rounded-[8px] font-bold'>Add to Cart</button>
                  </div>
                </div>
                <p className="font-bold">Category:<span className="font-semi-bold text-xl text-[#3B82F6] ">Running shoes</span></p>
            </div>
            </div>
        </div>
         </div>
  )
}

export default DetailPage