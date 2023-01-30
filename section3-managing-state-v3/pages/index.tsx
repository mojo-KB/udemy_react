import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col text-sm'>
      <div className=' text-lg'>Manaing State</div>
      <div className='text-italic'>key concept: </div>
      <div className='text-blue-800 list-disc flex flex-col'>
        <Link href="">- Reacting to Input with State</Link>
        <Link href="">- Choosing the state structure</Link>
        <Link href="">- Sharing state between components</Link>
        <Link href="">- Preserving and Resetting State</Link>
        <Link href="">- Extracting State Logic into a Reducer</Link>
        <Link href="">- Passing Data Deeply with Context</Link>
        <Link href="">- Scaling up with Reducer and Context</Link>
      </div>
    </div>
  )
}

export default Home
