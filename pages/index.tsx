import {
  MdFormatBold,
  MdFormatItalic,
  MdLink,
  MdOutlineStrikethroughS,
  MdCopyright,
  MdSuperscript,
  MdList,
  MdFormatListNumbered,
  MdFormatQuote,
  MdCode,
  MdImage,
  MdVideoLibrary,
} from 'react-icons/md';

import { RxTable } from 'react-icons/rx';

import { BsExclamationDiamond } from 'react-icons/bs';
import { BiHeading } from 'react-icons/bi';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [title, setTitle] = useState('Preview');
  const [text, setText] = useState('');
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center selection:bg-orange-200 flex-col gap-20'>
      <div className='shadow-md p-4 bg-white rounded-md flex flex-col gap-3 w-[677px]'>
        <input
          id='title'
          type='text'
          className='border rounded-md px-4 py-2 outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-4'
          placeholder='Title'
        />

        <section className='relative'>
          <ul
            id='options'
            className='bg-gray-100 border rounded-md flex align-center px-2 py-1 gap-1 absolute top-0 left-0 z-10 w-full border-b-0 rounded-b-none'
          >
            <li className='h-8 w-8 relative group'>
              <button className='hover:bg-gray-300 rounded-md h-full w-full outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-1'>
                <MdFormatBold className='text-2xl text-gray-500 translate-x-1' />
              </button>

              <span className='bg-black text-white text-xs px-4 py-2 rounded-md absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 invisible group-hover:visible transition duration-150 ease-out hover:ease-in after:content-[""] after:bg-black after:w-2 after:h-2 after:absolute after:rotate-45 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:translate-y-3 '>
                Bold
              </span>
            </li>
            <li className='h-8 w-8'>
              <button className='hover:bg-gray-300 rounded-md h-full w-full outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-1'>
                <MdFormatItalic className='text-2xl text-gray-500 translate-x-1' />
              </button>
            </li>
            <li className='h-8 w-8'>
              <button className='hover:bg-gray-300 rounded-md h-full w-full outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-1'>
                <MdLink className='text-2xl text-gray-500 translate-x-1' />
              </button>
            </li>
            <li className='h-8 w-8'>
              <button className='hover:bg-gray-300 rounded-md h-full w-full outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-1'>
                <MdOutlineStrikethroughS className='text-2xl text-gray-500 translate-x-1' />
              </button>
            </li>
            <li className='h-8 w-8'>
              <button className='hover:bg-gray-300 rounded-md h-full w-full outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-1'>
                <MdCopyright className='text-2xl text-gray-500 translate-x-1' />
              </button>
            </li>
            <li className='h-8 w-8'>
              <button className='hover:bg-gray-300 rounded-md h-full w-full outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-1'>
                <MdSuperscript className='text-2xl text-gray-500 translate-x-1' />
              </button>
            </li>
            <li className='h-8 w-8'>
              <button className='hover:bg-gray-300 rounded-md h-full w-full outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-1'>
                <BsExclamationDiamond className='text-2xl text-gray-500 translate-x-1' />
              </button>
            </li>
            <span className='h-full text-2xl font-thin text-gray-200'>|</span>
            <li className='h-8 w-8'>
              <button className='hover:bg-gray-300 rounded-md h-full w-full outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-1'>
                <BiHeading className='text-2xl text-gray-500 translate-x-1' />
              </button>
            </li>
            <li className='h-8 w-8'>
              <button className='hover:bg-gray-300 rounded-md h-full w-full outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-1'>
                <MdList className='text-2xl text-gray-500 translate-x-1' />
              </button>
            </li>
            <li className='h-8 w-8'>
              <button className='hover:bg-gray-300 rounded-md h-full w-full outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-1'>
                <MdFormatListNumbered className='text-2xl text-gray-500 translate-x-1' />
              </button>
            </li>
            <li className='h-8 w-8'>
              <button className='hover:bg-gray-300 rounded-md h-full w-full outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-1'>
                <MdFormatQuote className='text-2xl text-gray-500 translate-x-1' />
              </button>
            </li>
            <li className='h-8 w-8'>
              <button className='hover:bg-gray-300 rounded-md h-full w-full outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-1'>
                <MdCode className='text-2xl text-gray-500 translate-x-1' />
              </button>
            </li>
            <span className='h-full text-2xl font-thin text-gray-200'>|</span>
            <li className='h-8 w-8'>
              <button className='hover:bg-gray-300 rounded-md h-full w-full outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-1'>
                <RxTable className='text-2xl text-gray-500 translate-x-1' />
              </button>
            </li>
            <li className='h-8 w-8'>
              <button className='hover:bg-gray-300 rounded-md h-full w-full outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-1'>
                <MdImage className='text-2xl text-gray-500 translate-x-1' />
              </button>
            </li>
            <li className='h-8 w-8'>
              <button className='hover:bg-gray-300 rounded-md h-full w-full outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-1'>
                <MdVideoLibrary className='text-2xl text-gray-500 translate-x-1' />
              </button>
            </li>
          </ul>
          <textarea
            id='textarea'
            rows={7}
            placeholder='Text (optional)'
            className='border p-2 rounded-md relative w-full pt-12  outline-2 outline-orange-200 transition-outline duration-100 focus:outline-offset-4'
          />

          <div className='flex gap-2 justify-end mt-2'>
            <button className='bg-white border-2 border-gray-300 text-gray-500 hover:bg-gray-200 transition duration-200 ease-in-out rounded-full py-1 px-5 font-bold text-sm  '>
              Save Draft
            </button>
            <button
              onClick={() => {
                const inputValue = (
                  document.getElementById('textarea') as HTMLInputElement
                ).value;
                const titleValue = (
                  document.getElementById('title') as HTMLInputElement
                ).value;

                setTitle(titleValue);
                setText(inputValue);
              }}
              className='bg-orange-300 hover:bg-orange-400 hover:shadow-md hover:shadow-orange-300/50 duration-200 ease-in-out py-1 px-5 rounded-full  font-bold active:shadow-none active:bg-orange-200 text-orange-900'
            >
              Post
            </button>
          </div>
        </section>
      </div>

      <div className='relative w-[677px] max-h-96'>
        <div className='absolute -inset-4 bg-gradient-to-r from-orange-300 via-red-300 to-pink-500 rotate-2 rounded-md'></div>
        <div className='absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 -rotate-2 rounded-md opacity-50'></div>
        <div
          className='p-4 w-full
        bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60'
        >
          <h1 className='text-2xl font-semibold text-gray-700 mb-8 relative'>
            <span className='absolute w-12 h-1 bg-orange-300 -bottom-2 ' />
            {title}
          </h1>
          <div>
            {text
              ? text
              : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, beatae.'}
          </div>
        </div>
      </div>

      <Link href='/loading' className='bg-fuchsia-400 px-4 py-2 rounded-md'>
        Loading
      </Link>
    </div>
  );
}
