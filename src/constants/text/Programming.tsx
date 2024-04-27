import Link from 'next/link';
import React from 'react';

export default function Programming() {
  return (
    <>
      <section className="mt-[35px]">
        <h2 className="py-4 text-2xl font-bold">👾 Programming</h2>
        <p className="text-base">
          I currently have very few projects as I am learning by myself every day. For the ones I
          have most of them are personal with a couple for school. I hope to grow this library soon,
          but for now here are the ones I am most proud of.
        </p>
      </section>
      <br></br>
      <hr></hr>
      <h2 className="py-4 text-2xl font-bold">Projects</h2>
      <section>
        <p className="text-base">
          <Link
            className="text-sky-500 hover:underline"
            href="https://github.com/johnsyslo/portfolio"
          >
            Micro:bit
          </Link>
          , a reacreation of all my old Micro:bit block code in Typescript! Not much of anything but
          cool to me because I was able to take long code statements and shrink them, showing how
          much I have improved.
        </p>
      </section>
      <section className="mb-[50px] mt-[35px]">
        <p className="text-base">
          <Link
            className="text-sky-500 hover:underline"
            href="https://github.com/johnsyslo/portfolio"
          >
            Portfolio
          </Link>
          , my portfolio is my very first React project, by using Next.js and TailwindCSS I was able
          to learn the basics of react. With components, app routing, and providers being used
          within my site.
        </p>
      </section>
    </>
  );
}
