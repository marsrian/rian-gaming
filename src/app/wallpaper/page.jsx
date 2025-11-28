import Image from 'next/image'
import React from 'react'

const WallpaperPage = () => {
  return (
    <div>
      <h3 className='text-white text-3xl font-bold mb-4 text-center'>Wallpaper Category</h3>
      <div className='grid grid-cols-3 gap-3'>
        <Image src="/hz1.png" width={500} height={300} alt='MARS RIAN GAMING POSTER' className='shadow-md shadow-slate-200 rounded-md' />
        <Image src="/hz2.png" width={500} height={300} alt='MARS RIAN GAMING POSTER' className='shadow-md shadow-slate-200 rounded-md' />
        <Image src="/hz3.png" width={500} height={300} alt='MARS RIAN GAMING POSTER' className='shadow-md shadow-slate-200 rounded-md' />
        <Image src="/kena1.jpg" width={500} height={300} alt='MARS RIAN GAMING POSTER' className='shadow-md shadow-slate-200 rounded-md' />
        <Image src="/tlou.jpg" width={500} height={300} alt='MARS RIAN GAMING POSTER' className='shadow-md shadow-slate-200 rounded-md' />
      </div>
    </div>
  )
}

export default WallpaperPage
