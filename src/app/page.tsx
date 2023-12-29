'use client'
import Image from 'next/image'
import Link from 'next/link'

function autoNext(id: number, key: string, code: string) {
  if (code === `Digit${key}`) {
    document.getElementById(`${id + 1}`)?.focus()
  } else if (key === "Backspace" && id !== 1) {
    document.getElementById(`${id - 1}`)?.focus()
  }
}

export default function Home() {
  return (
    <main className='font-[Nunito] flex justify-center'>
      <div className='outer-border border-[solid] border rounded-[25px] border-[#DFDFDF] p-10 mt-1'>
        <div className='flex flex-col self-center w-80'>
          <div className='flex flex-col items-center mb-12'>
            <Image src="/assets/icons/schoolar-logo.svg" alt='Logo' width={170} height={44}></Image>
            <Image src="/assets/icons/schoolar-arrow.svg" alt='' width={22} height={6} className='ml-[-20px]'></Image>
          </div>
          <p className='text-3xl font-bold mb-7 text-center'>Verify your account</p>
          <p className='font-light text-center mb-12'>A verification code has been sent to codewi*****@gmail.com.</p>
          <div className='mb-12 w-[290px] flex self-center'>
            <input type="number" className='input-otp' name='otp' id='1' onKeyUp={(event) => autoNext(1, event.key, event.code)}/>
            <input type="number" className='input-otp' name='otp' id='2' onKeyUp={(event) => autoNext(2, event.key, event.code)}/>
            <input type="number" className='input-otp' name='otp' id='3' onKeyUp={(event) => autoNext(3, event.key, event.code)}/>
            <input type="number" className='input-otp' name='otp' id='4' onKeyUp={(event) => {
              if (event.key === "Backspace") {
                document.getElementById('3')?.focus()
              }
              document.getElementById('4')?.blur()
            }}/>
          </div>
          <button className='h-12 w-80 border-[none] rounded-[100px] bg-[linear-gradient(to_right,_#1E90FF,_#990099)] text-[white] text-md cursor-pointer justify-self-center mb-7 '>Verify</button>
          <Link href='#' className='text-sm font-semibold text-[#1E90FF] mb-20 '>Try Another Way</Link>
          <div className='text-sm flex justify-between'>
            <p>Don't have an account yet?</p>
            <Link href='?' className='text-[#1E90FF]'>Register</Link>
          </div>
        </div>
      </div>
    </main>

  )
}
