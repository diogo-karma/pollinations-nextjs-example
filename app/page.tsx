'use client'
import Image from "next/image";
// @ts-expect-error todo
import { usePollinationsText, usePollinationsImage, PollinationsMarkdown } from "@pollinations/react";

export default function Home() {

  const text = usePollinationsText('Write a short haiku about Pollinations.AI');
  const imageUrl = usePollinationsImage('A lotus flower', { width: 800, height: 600, seed: 42 });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {text ? <p>{text}</p> : <p>Loading...</p>}
        {imageUrl ? <img src={imageUrl} /> : <p>Loading...</p>}
        <PollinationsMarkdown>
          Write about the blue see in markdown and in your response embed an image with the text as prompt using ![Alt text](https://pollinations.ai/p/[prompt])
        </PollinationsMarkdown>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://pollinations.ai/readme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://pollinations.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to pollinations.ai →
        </a>
      </footer>
    </div>
  );
}
