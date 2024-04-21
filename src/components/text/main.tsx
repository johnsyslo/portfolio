import Link from 'next/link'
import React from 'react'

export default function Main() {
  return (
    <>
    <section className="mt-[35px]">
        <h2 className="text-2xl py-4 font-bold">👋 Hey!</h2>
        <p className="text-base">I am John Syslo, a quarter-stack programmer, and student exploring the world of computer science in my freetime. I code <i>sometimes</i> for a little, with no real &quot;finished&quot; projects.</p>
        <br></br>
        <p>Currently, I am taking Web Development as a freshman at Lane Tech, with AP CSA on the way next year. You can find me learning how to make efficent and good looking dynamic websites, after I threw myself into something completely new one weekend.</p>
        <br></br>
        <Link className="text-sky-500" href="/about">about me ➡️</Link>
    </section>
    <section className="mt-[35px]">
        <h2 className="text-2xl py-4 font-bold">👨‍💻 Programming</h2>
        <p className="text-base">I am working on a few different projects currently. Most of them are used to develop my knowledge of the language or framework I am using, but a bunch are for school.</p>
        <br></br>
        <p>Currently I am working on this site and deepening my knowledge of Typescript while also learning React, Next.js, and Tailwind CSS. My next project, <i>coming hopefully soon</i>, will be an e-commerce site.</p>
        <br></br>
        <Link className="text-sky-500" href="/about">my projects ➡️</Link>
    </section>
    <section className="mt-[35px] mb-[50px]">
        <h2 className="text-2xl py-4 font-bold">📞 Contact Me</h2>
        <div className="flex flex-row">
          <Link className="text-sky-500 mr-5" href="https://github.com/johnsyslo">github</Link>
          <Link className="text-sky-500 mr-5" href="mailto:jsyslo@proton.me">email</Link>
          <Link className="text-sky-500 mr-5" href="https://discord.com/users/1024889708624482354">discord</Link>
        </div>
    </section>
    </>
  )
}