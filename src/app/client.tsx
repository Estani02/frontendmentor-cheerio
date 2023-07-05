'use client'

import { Challenge } from "@/interfaces"
import Image from "next/image"
import { useState } from "react"

export const HomePageClient = ({ challenges: initialState }: { challenges: Challenge[] }) => {

  const [challenges, setChallenges] = useState<Challenge[]>(initialState)
  const [like, setLike] = useState<Challenge[]>([])
  const [showLike, setShowLike] = useState<boolean>(false)

  const [challenge] = challenges

  function handleLike() {
    setLike((_liked) => _liked.concat(challenge))
    setChallenges((_challenges) => _challenges.slice(1))
    console.log(like);

  }

  function handleDislike() {
    setChallenges((_challenges) => _challenges.slice(1))
  }

  function handleShowLike() {
    setShowLike((_showLike) => !_showLike)
  }

  if (showLike) {
    return (
      <div>
        <div className="flex justify-between mb-6">
          <h3 className="text-lg font-bold">Challenges selecionados</h3>
          <button className="p-2 bg-blue-500 text-white font-semibold rounded-md" onClick={handleShowLike}>Volver ↖️</button>
        </div>
        <ul className="flex content-center flex-wrap gap-20">
          {like.map((challenge) => (
            <li key={challenge.title} className='basis-80 grow flex flex-col items-center gap-2'>
              <Image src={challenge.heroImage} alt={challenge.title} width={690} height={690} />
              <div className='flex flex-col items-center justify-between gap-4 text-center'>
                <h3 className='text-lg font-medium whitespace-nowrap'>{challenge.title}</h3>
                <p className='line-clamp-3 text-black/80 text-center'>{challenge.description}</p>
                <a
                  rel="noopener noreferrer"
                  className="bg-[#ED2C49] hover:bg-[#BC102A] text-white font-bold py-2 px-7 rounded-full transition-colors duration-200"
                  target="_blank"
                  href={`https://frontendmentor.io/challenges/${challenge.slug}`}>
                  Ver Challenge
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  function handleReset() {
    setChallenges(like)
    setLike(initialState)
  }

  return (
    <div key={challenge.title} className='flex flex-col items-center gap-2'>
      <Image src={challenge.heroImage} alt={challenge.title} width={690} height={690} />
      <div className='flex flex-col items-center gap-2'>
        <h3 className='text-lg font-medium'>{challenge.title}</h3>
        <p className='line-clamp-3 text-black/80 text-center'>{challenge.description}</p>
      </div>
      <div className="flex justify-evenly w-full">
        <button className="font-bold text-white py-2 w-36 rounded-md bg-green-500 hover:bg-green-700 transition-colors duration-300" onClick={handleLike} type="button">Me gusta</button>
        <button className="font-bold text-white py-2 w-36 rounded-md bg-red-500 hover:bg-red-700 transition-colors duration-300" onClick={handleDislike} type="button">No me gusta</button>
      </div>
      <div className="flex justify-evenly w-full">
        <button className="font-bold text-white py-2 w-36 rounded-md bg-gray-500 hover:bg-gray-700 transition-colors duration-300" onClick={handleReset} type="button">Reiniciar</button>
        <button className="font-bold text-white py-2 w-36 rounded-md bg-gray-500 hover:bg-gray-700 transition-colors duration-300" onClick={handleShowLike} type="button">Ver Me Gustas</button>
      </div>
    </div>
  )
}
