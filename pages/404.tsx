import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <>
      <Head>
        <title>

        </title>
      </Head>
      <main className="w-full h-full justify-center items-center flex">
        <Link
          className="p-2 text-[2rem]"
          href="/"
        >
          Go home
        </Link>
      </main>
    </>
  )
}

export default NotFoundPage;