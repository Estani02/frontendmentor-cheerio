import { type NextData } from '@/interfaces'
import { load } from 'cheerio'
import Image from 'next/image'
import { HomePageClient } from './client'

async function getChallenge() {
  const html = await fetch('https://www.frontendmentor.io/challenges').then(async (res) => await res.text())

  // load html sirve para cargar el html en cheerio
  const $ = load(html)

  // Obtiene el elemento NEXT_DATA, lo devuelve en html como string y lo parsea a JSON
  const nextData = JSON.parse($('#__NEXT_DATA__').html() as string) as NextData // as string es para que no de error ya que no sabe que es un string

  return Object.values(nextData.props.initialState['v2/challenges'].entities)
}

export default async function Home() {
  const challenge = await getChallenge()

  return (
    <main className="flex min-h-screen flex-col items-center  px-24 py-5 gap-9">
      <h1 className='text-3xl font-bold uppercase'>Frontedmentor Challenges</h1>
      <HomePageClient challenges={challenge} />
    </main>
  )
}
