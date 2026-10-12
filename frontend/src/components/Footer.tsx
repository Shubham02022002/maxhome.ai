import logo from "../assets/logo.svg";
import linkedin from "../assets/linkedIn.svg";

const footerLinks = [
    {
        title: "Product",
        links: [
            { label: "Features", href: "#features" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About us", href: "#about" },
            { label: "Contact", href: "#contact" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy policy", href: "/privacy" },
            { label: "Terms of service", href: "/terms" },
        ],
    },
];

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-deep text-deep-ink">
            <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_2fr] lg:gap-20">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <a
                            href="/"
                            aria-label="MaxHome.AI home"
                            className="inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                        >
                            <img
                                src={logo}
                                alt="MaxHome.AI"
                                className="h-10 w-auto"
                            />
                        </a>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-deep-ink/70">
                            Simplifying real estate transactions with AI-powered
                            automation. Close more deals, stress less about the rest.
                        </p>

                        {/* Social links */}
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit MaxHome.AI on LinkedIn (opens in a new tab)"
                                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 transition duration-200 hover:border-brand/50 hover:bg-brand/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                            >
                                <img
                                    src={linkedin}
                                    alt=""
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav
                        aria-label="Footer navigation"
                        className="grid grid-cols-2 gap-8 sm:grid-cols-3"
                    >
                        {footerLinks.map((group) => (
                            <div key={group.title}>
                                <h2 className="text-sm font-semibold tracking-wide">
                                    {group.title}
                                </h2>

                                <ul className="mt-5 space-y-3">
                                    {group.links.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="text-sm text-deep-ink/65 transition-colors duration-200 hover:text-brand focus-visible:text-brand focus-visible:outline-none"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Bottom bar */}
                <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-deep-ink/60">
                        &copy; {year} MaxHome.AI. All rights reserved.
                    </p>

                    <p className="text-sm text-deep-ink/50">
                        Built for smarter real estate workflows.
                    </p>
                </div>
            </div>
        </footer>
    );
}