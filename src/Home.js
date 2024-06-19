import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Home = () => {
    const [ads, setads] = useState([])
    const addata = async () => {
        try {
          const response = await axios.get('http://casinosonlinein.com/1xbet/console/api/ads')
          // console.log(response.data.status)
          if (response.data.status == 'success') {
            console.log(response)
            setads(response.data.ads)
          }
        }
        catch (error) {
          console.log(error)
        }
      }

      useEffect(() => {
        addata()
      }, [])

      
  return (
    <>
      <div className=' container mx-auto mt-5 mb-20'>
        <div className='grid grid-cols-12 gap-4'>
          <div className=' col-span-12 lg:col-span-8'>
          <p className=' text-black text-[15px] mb-2 ps-3'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>

            <div className=' bg-gradient-to-r from-[#AE0F0A] to-[#480604] rounded-md'>
              <h2 className=' text-white text-[18px] font-bold ps-3'>Casino Blogs</h2>
            </div>

            <div className='grid grid-cols-12 gap-4 mt-4'>

              {ads?.map((ad, index) => (


                <div className=' col-span-12 lg:col-span-4 rounded-lg shadow-md'>
                  <div className=' bg-light'>
                    <a href={ad.url} target='_blank'>
                      <img src={`http://casinosonlinein.com/1xbet/console/public/storage/${ad.image}`} alt="" className=' object-cover w-full' />
                      <div className=' p-2 pb-4'>
                        <h3 className=' text-[18px] font-bold text-[#AE0F0A]'>{ad.title}</h3>
                        <p className=' text-[12px]'>{ad.description}</p>
                      </div>
                    </a>
                  </div>
                </div>

              ))}

            </div>
          </div>

          <div className=' col-span-12 lg:col-span-4'>
            <div className=' bg-gradient-to-r from-[#AE0F0A] to-[#480604] rounded-md'>
              <h2 className='text-white text-[18px] font-bold ps-3 mb-4'>Latest Magazines</h2>
            </div>
            <img src={require('./image/ad1.png')} alt="" className=' w-[266px] h-[372px] mb-2' />
            <img src={require('./image/ad2.png')} alt="" className=' w-[415px] h-[200px]' />
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
