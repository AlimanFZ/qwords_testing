import React from 'react'

export default function Product() {
    return (
        <div className='w-full px-10 pt-8'>
             <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
    <h3 className="mb-6 text-3xl font-bold">Produk</h3>
    <p className="mb-6 pb-2 md:mb-12 md:pb-0">
      Produk yang Tersedia di toko ini
    </p>
  </div>
            <div className='flex justify-center gap-3'>
                <div className="flex justify-center">
                    <div
                        className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                        <a href="#!">
                            <img
                                className="rounded-t-lg h-64 w-72"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIhDh3Oe7uXByUfOjMQEtKyLG4uriGcQT1Q&usqp=CAU"
                                alt="" />
                        </a>
                        <div className="p-6">
                            <h5
                                className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Handuk
                            </h5>
                            <p className="mb-4 text-2xl text-neutral-600 dark:text-neutral-200">
                                Rp. 76.000,-
                            </p>
                            <button
                                type="button"
                                class="inline-block rounded bg-cyan-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                Beli
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div
                        className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                        <a href="#!">
                            <img
                                className="rounded-t-lg h-64 w-72"
                                src="https://dynamic.zacdn.com/tEokrNDY5xCqQpD4bg1VthVcdSw=/fit-in/346x500/filters:quality(90):fill(ffffff)/https://static-id.zacdn.com/p/two-mix-4566-2969762-1.jpg"
                                alt="" />
                        </a>
                        <div className="p-6">
                        <h5
                                className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Pakaian Anak
                            </h5>
                            <p className="mb-4 text-2xl text-neutral-600 dark:text-neutral-200">
                                Rp. 20.000,-
                            </p>
                            <button
                                type="button"
                                class="inline-block rounded bg-cyan-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                Beli
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div
                        className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                        <a href="#!">
                            <img
                                className="rounded-t-lg h-64 w-72"
                                src="https://s3.cosmopolitan.co.id/images/vSZCLy_68_425821_large.jpg"
                                alt="" />
                        </a>
                        <div className="p-6">
                        <h5
                                className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Kaus Kaki
                            </h5>
                            <p className="mb-4 text-2xl text-neutral-600 dark:text-neutral-200">
                                Rp. 21.000,-
                            </p>
                            <button
                                type="button"
                                class="inline-block rounded bg-cyan-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                Beli
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
