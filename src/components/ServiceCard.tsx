import React from 'react'
import Image from 'next/image';

interface cardProps {
  label: string;
}

const ServiceCard = ({label} : cardProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3 border border-neutral-800 py-6 px-5">
        <Image src='/images/star.png' alt='icon' width={30} height={20} />
        <span>{label}</span>
      </div>
    </div>
  )
}

export default ServiceCard