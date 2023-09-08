import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SchemeCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <Image src="/event.jpg" alt="Shoes" className="rounded-xl max-h-40" width={300} height={100}/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">NIDHI EIR
    <div className="badge badge-secondary text-white">Open</div></h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus molestias eos saepe! Provident cumque libero, autem numquam eius voluptas.</p>
    <div className="card-actions flex">
      <Link href="#" className="btn btn-primary hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 bg-blue-900 text-white">Register now</Link>
      <Link href="incubation/technical/nidhieir" className="btn btn-primary hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 bg-blue-900 text-white">Know More</Link>
    </div>
  </div>
</div>
  )
}

export default SchemeCard
