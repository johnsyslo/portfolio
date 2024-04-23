import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <>
      <section className="mt-[35px]">
        <h2 className="py-4 text-2xl font-bold">👋 Hey!</h2>
        <p className="text-base">
          I am John Syslo, a quarter-stack programmer, and student exploring the world of computer
          science in my freetime. I code <i>sometimes</i> for a little, with no real
          &quot;finished&quot; projects.
        </p>
        <br></br>
        <p>
          Currently, I am taking Web Development as a freshman at Lane Tech, with AP CSA on the way
          next year. You can find me learning how to make efficent and good looking dynamic
          websites, after I threw myself into something completely new one weekend.
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <p>
          I got into coding around 4th grade with the help of the computer teacher at my school. I
          had always had an interest in electronics and figuring out how things work, I loved to
          take things apart, figure out how it worked, and put them back together if I could. I
          started off working with the{' '}
          <Link className="text-sky-500 underline" href="https://scratch.mit.edu/" target="_blank">
            Scratch
          </Link>{' '}
          and after a while eventually moved to the{' '}
          <Link className="text-sky-500 underline" href="https://microbit.org/" target="_blank">
            Micro:bit
          </Link>
          . I worked on these things for years until I started teaching myself HTML & CSS in 7th
          grade, and in the summer of 8th I created my first{' '}
          <Link
            className="text-sky-500 underline"
            href="https://git.johnsyslo.com/v1"
            target="_blank"
          >
            portfolio
          </Link>
          .
        </p>
        <br></br>
        <p>
          Nowadays I am less active with programming after having taken a break for a good while
          over the summer and losing some interest. It is slowly coming back which is what lead to
          the creation of this site, I hope to get back into it and learn even more!
        </p>
      </section>
      <section className="mb-[50px] mt-[35px]">
        <h2 className="py-4 text-2xl font-bold">📞 Contact Me</h2>
        <p>
          Here are some ways you can get in touch with me, emailing is the best option for a quick
          response.
        </p>
        <div className="flex flex-row">
          <Link className="hover:underlinemr-5 text-sky-500" href="mailto:jsyslo@proton.me">
            email
          </Link>
          <Link className="hover:underline mr-5 text-sky-500" href="https://discord.com/users/1024889708624482354">
            discord
          </Link>
        </div>
      </section>
      <section className="mb-[50px] mt-[35px]"></section>
    </>
  );
}
