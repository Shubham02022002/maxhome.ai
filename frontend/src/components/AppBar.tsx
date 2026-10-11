import maxHomeLogo from "../assets/maxhome-logo.svg";

const AppBar = () => {
    return (
        <header className="w-full h-18 bg-white shadow-sm sticky top-0">
            <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center px-8">
                <div className="flex items-center justify-start cursor-pointer">
                    <img
                        src={maxHomeLogo}
                        alt="MaxHome logo"
                        className="h-8 w-auto"
                    />
                </div>
                <nav className="flex items-center justify-center gap-10 cursor-pointer">
                    <a href="#" className="font-semibold text-gray-600 hover:text-gray-900">
                        Home
                    </a>
                    <a href="#" className="font-semibold text-gray-600 hover:text-gray-900">
                        Features
                    </a>
                    <a href="#" className="font-semibold text-gray-600 hover:text-gray-900">
                        Press
                    </a>
                    <a href="#" className="font-semibold text-gray-600 hover:text-gray-900">
                        Careers
                    </a>
                </nav>
                <div className="flex items-center justify-end gap-4 cursor-pointer">
                    <button
                        type="button"
                        className="rounded-md px-4 py-2 text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-50"
                    >
                        Sign in
                    </button>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium leading-5 text-white hover:bg-blue-600"
                    >
                        Request a Demo
                    </button>
                </div>
            </div>
        </header>
    );
};

export default AppBar;