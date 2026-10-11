const Home = () => {
    return (
        <main className="flex min-h-screen flex-col items-center bg-white px-5 mt-5 text-center">
            <Hero />
            <Pitch />
            <DemoButton />
            <Matrix />
        </main>
    );
};

export default Home;

const Hero = () => {
    return (
        <h1 className="mt-10 max-w-3xl text-4xl font-bold
      leading-tight tracking-tight text-gray-900 md:mt-10 md:text-6xl">
            AI-Powered Operations for
            <br />
            Modern Brokerages
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
        <button
            type="button"
            className="mt-10 rounded-full bg-blue-500 px-8 py-3
        text-base font-semibold text-white shadow-lg
        transition hover:bg-blue-700"
        >
            Request a Demo
        </button>
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

interface MatrixCard {
    title: string;
    description: string;
}

const MatrixCard = ({ title, description }: MatrixCard) => {
    return (
        <div className="flex min-h-24 flex-col items-center
      justify-center px-5 sm:border-r sm:border-gray-200
      last:border-r-0">
            <span className="text-5xl font-bold leading-tight text-black md:text-6xl">
                {title}
            </span>
            <p className="mt-2 max-w-52 text-base font-semibold
        leading-6 text-gray-500 md:text-lg">
                {description}
            </p>
        </div>
    );
};
