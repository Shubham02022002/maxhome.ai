import { Footer } from "./Footer";
import Partners from "./Partners";

const handwriting = { fontFamily: "'Caveat', 'Comic Sans MS', cursive" };

const Home = () => {
    return (
        <main className="flex min-h-screen w-full flex-col items-center bg-white px-5 mt-5 text-center">
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');`}</style>
            <Hero />
            <Pitch />
            <DemoButton />
            <Matrix />
            <Partners />
            <Footer />
        </main>
    );
};

export default Home;

const Hero = () => {
    return (
        <h1 className="mt-10 max-w-3xl text-4xl font-bold
      leading-tight tracking-tighter text-gray-900 md:mt-10 md:text-6xl">
            AI-Powered Operations for
            <br />
            <span className="relative inline-block">
                Modern Brokerages
                <svg
                    className="pointer-events-none absolute -bottom-3 left-0 h-2.5 w-full text-blue-600"
                    viewBox="0 0 300 12"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M3 8 C 50 2, 110 10, 160 5 S 255 3, 297 7"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>
            </span>
        </h1>
    );
};

const Pitch = () => {
    return (
        <p className="mt-5 mb-3 max-w-3xl text-base font-normal
      leading-relaxed text-gray-600 md:text-xl">
            AI that truly understands real estate - so you can automate
            workflows, stop chasing documents, and reduce processing
            time by 80%
        </p>
    );
};

const DemoButton = () => {
    return (
        <div className="relative mt-10">
            <button
                type="button"
                className="rounded-full bg-blue-500 px-8 py-3
        text-base font-semibold text-white shadow-lg
        transition hover:bg-blue-700"
            >
                Request a Demo
            </button>

            <svg
                className="pointer-events-none absolute left-full top-0 ml-3 hidden h-8 w-12 text-blue-600 md:block"
                viewBox="0 0 48 32"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M46 5 C 30 2, 12 10, 5 26 M5 26 L4 15 M5 26  L17 22"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span
                className="pointer-events-none absolute left-full top-[-14px] ml-16 hidden -rotate-2 whitespace-nowrap text-2xl text-blue-600 md:block"
                style={handwriting}
                aria-hidden="true"
            >
                see it on your own listings
            </span>
        </div>
    );
};

const Matrix = () => {
    return (
        <section className="mt-16 grid w-full max-w-3xl
      grid-cols-1 items-center gap-8 pb-12
      sm:grid-cols-3 sm:gap-0">
            <MatrixCard
                title="80%"
                description="Time Saved on Documents"
                highlight
                note="hours back, every week"
            />
            <MatrixCard
                title="10+"
                description="Years of Transaction Data"
            />
            <MatrixCard
                title="100%"
                description="Real Estate Focused"
            />
        </section>
    );
};

interface MatrixCardProps {
    title: string;
    description: string;
    highlight?: boolean;
    note?: string;
}

const MatrixCard = ({ title, description, highlight, note }: MatrixCardProps) => {
    return (
        <div className="relative flex min-h-24 flex-col items-center
      justify-center px-5 sm:border-r sm:border-gray-200
      last:border-r-0">
            <span className="relative inline-block px-3 text-5xl font-bold leading-tight text-black md:text-6xl">
                {title}
                {highlight && (
                    <svg
                        className="pointer-events-none absolute -inset-x-1 -inset-y-1 h-[calc(100%+8px)] w-[calc(100%+8px)] text-amber-500"
                        viewBox="0 0 100 50"
                        preserveAspectRatio="none"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M14 10 C 40 -2, 88 0, 96 22 C 100 42, 60 50, 30 46 C 4 42, -4 24, 10 12 C 18 6, 30 4, 44 3"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                )}
            </span>
            <p className="mt-2 max-w-52 text-base font-semibold
        leading-6 text-gray-500 md:text-lg">
                {description}
            </p>

            {highlight && note && (
                <>
                    <svg
                        className="pointer-events-none absolute -top-8 left-1/2 ml-2 hidden h-8 w-9 text-amber-500 md:block"
                        viewBox="0 0 36 32"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M30 4 C 14 3, 5 12, 7 28 M7 28 L2 19 M7 28 L14 20"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span
                        className="pointer-events-none absolute -top-10 left-1/2 ml-12 hidden -rotate-3 whitespace-nowrap text-2xl text-amber-600 md:block"
                        style={handwriting}
                        aria-hidden="true"
                    >
                        {note}
                    </span>
                </>
            )}
        </div>
    );
};