import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import React from 'react'

const RightSidebar = () => {
  return (
    <div>
      <div className='mt-10 px-10 text-colorPrimary'>
        <h1 className=' font-bold text-2xl'>Suggestions</h1>
        <div className='mt-6 flex flex-col gap-y-5'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-x-3'>
              <img src='https://i.ibb.co.com/1nB0GvW/db1f9a3eaca4758faae5f83947fa807c.jpg' className='h-16 w-16 rounded-full border border-colorSecondary p-1' />
              <div>
                <h1>Brittri</h1>
                <p className='text-sm'>brittre@gmail.com</p>
              </div>
            </div>

            <Button className='bg-colorSecondary text-colorPrimary border-2 '>Follow</Button>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-x-3'>
              <img src='https://i.ibb.co.com/1nB0GvW/db1f9a3eaca4758faae5f83947fa807c.jpg' className='h-16 w-16 rounded-full border p-1' />
              <div>
                <h1>Brittri</h1>
                <p className='text-sm'>brittre@gmail.com</p>
              </div>
            </div>

            <Button className='bg-colorSecondary text-colorPrimary border-2 '>Follow</Button>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-x-3'>
              <img src='https://i.ibb.co.com/1nB0GvW/db1f9a3eaca4758faae5f83947fa807c.jpg' className='h-16 w-16 rounded-full border p-1' />
              <div>
                <h1>Brittri</h1>
                <p className='text-sm'>brittre@gmail.com</p>
              </div>
            </div>

            <Button className='bg-colorSecondary text-colorPrimary border-2 '>Follow</Button>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-x-3'>
              <img src='https://i.ibb.co.com/1nB0GvW/db1f9a3eaca4758faae5f83947fa807c.jpg' className='h-16 w-16 rounded-full border p-1' />
              <div>
                <h1>Brittri</h1>
                <p className='text-sm'>brittre@gmail.com</p>
              </div>
            </div>

            <Button className='bg-colorSecondary text-colorPrimary border-2 '>Follow</Button>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-x-3'>
              <img src='https://i.ibb.co.com/1nB0GvW/db1f9a3eaca4758faae5f83947fa807c.jpg' className='h-16 w-16 rounded-full border p-1' />
              <div>
                <h1>Brittri</h1>
                <p className='text-sm'>brittre@gmail.com</p>
              </div>
            </div>

            <Button className='bg-colorSecondary text-colorPrimary border-2 '>Follow</Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RightSidebar