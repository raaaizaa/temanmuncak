import { Button } from '@nextui-org/react'
import React from 'react'
import { FaRegSadTear } from 'react-icons/fa'

interface Props {
  onClick: () => void
  message: string
}

export default function Error({ onClick, message }: Props) {
  return (
    <div className="z-50 h-full w-full fixed bg-black/50 top-0 left-0 transition-all duration-200 ease-in flex justify-center items-center">
      <div className="bg-white w-fit h-fit rounded-2xl">
        <div className="py-16 px-10 space-y-12">
          <div className="flex justify-center items-center">
            <FaRegSadTear size={128} />
          </div>
          <p className="text-2xl text-center">{message}</p>
          <p className="text-center">
            Tour Guide hanya bisa ditambahkan sekali dan hanya bisa ditambahkan
            ke satu gunung yang akan dituju!
          </p>
          <Button
            onClick={onClick}
            className="w-full bg-[#3F6C29] text-white font-bold">
            Kembali
          </Button>
        </div>
      </div>
    </div>
  )
}
