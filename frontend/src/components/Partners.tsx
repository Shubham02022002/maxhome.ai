import keyes from "../assets/keyes.svg";
import baird from "../assets/baird.svg";
import cbt from "../assets/cBT.svg";
import arc from "../assets/arc.svg";
import bhh from "../assets/berkshire.svg";
import watson from "../assets/watson.svg";

const Partners = () => {
    return (
        <section className="w-full bg-blue-50 px-6 py-16 text-center md:py-20">
            <h2 className="mb-14 text-3xl font-semibold text-gray-900 md:text-5xl">
                Leading Brokerages are Partnered with Us
            </h2>
            <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center
        justify-center gap-x-12 gap-y-10 md:justify-between md:gap-x-8">
                <img
                    src={keyes}
                    alt="Keyes"
                    className="h-12 w-36 object-contain"
                />
                <img
                    src={baird}
                    alt="Baird & Warner"
                    className="h-12 w-40 object-contain"
                />
                <img
                    src={cbt}
                    alt="Coldwell Banker Tomlinson"
                    className="h-12 w-44 object-contain"
                />
                <img
                    src={arc}
                    alt="ARC"
                    className="h-12 w-40 object-contain"
                />
                <img
                    src={bhh}
                    alt="Berkshire Hathaway HomeServices"
                    className="h-14 w-40 object-contain"
                />
                <img
                    src={watson}
                    alt="Watson Realty"
                    className="h-14 w-36 object-contain"
                />
            </div>

            <p className="mt-8 text-base font-semibold text-blue-600">
                and Many More!
            </p>
        </section>
    );
};

export default Partners;
