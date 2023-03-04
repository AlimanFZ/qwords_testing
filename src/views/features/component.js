import React from 'react'

export default function Product() {
    return (
        <div className='w-full px-10 pt-8'>
             <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
    <h3 className="mb-6 text-3xl font-bold">Layanan Andalan</h3>
    <p className="mb-6 pb-2 md:mb-12 md:pb-0">
      Layanan andalan yang sering digunakan
    </p>
  </div>
            <div className='flex justify-center gap-3'>
            <div className="flex justify-center">
  <div
    className="block max-w-sm rounded-lg bg-amber-800 text-center shadow-lg dark:bg-neutral-700">
   
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-white">
        Pengiriman Cepat
      </h5>
      <p className="mb-4 text-base text-white">
        Mampu mengirim barang dari sabang - merauke dengan waktu 5 menit
      </p>
    </div>
  </div>
</div>
<div className="flex justify-center">
  <div
    className="block max-w-sm rounded-lg bg-teal-800 text-center shadow-lg dark:bg-neutral-700">
   <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-white">
        Barang Bervariasi
      </h5>
      <p className="mb-4 text-base text-white">
        Barang yang dijual adalah barang langka
      </p>
    </div>
  </div>
</div>
<div className="flex justify-center">
  <div
    className="block max-w-sm rounded-lg bg-purple-900 text-center shadow-lg dark:bg-neutral-700">
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-white">
        Customer Service Andalan
      </h5>
      <p className="mb-4 text-base text-white">
        Customer service penuh perhatian melebihi perhatian pacar anda
      </p>
    </div>
  </div>
</div>
            </div>
        </div>
    )
}
