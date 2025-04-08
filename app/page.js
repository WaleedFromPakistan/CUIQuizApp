import Link from "next/link";

export default function Home() {
  return (
  <div className="h-[625px] w-full bg-yellow-50 flex justify-center items-center">
    <div className="h-[500px] w-[900px] bg-gray-700 flex flex-col justify-center items-center rounded-xl">
      <h1 className="text-white text-4xl font-extrabold">WELCOME TO COMSATS QUIZ PANNEL</h1>
      <Link href="/quiz"><div className="mt-6 py-3 px-11 bg-gray-950 text-white text-2xl rounded-2xl hover:bg-gray-800 cursor-pointer">Start</div></Link>
    </div>
  </div>
  );
}
