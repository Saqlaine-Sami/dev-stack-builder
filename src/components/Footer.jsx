const Footer = () => {
  return (
    <footer id="contact" className="mt-16 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2">
              <div className="brand-gradient-bg flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold text-white">
                DS
              </div>

              <span className="text-lg font-bold text-slate-900">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex flex-wrap gap-5 text-sm font-medium text-slate-600">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#home" className="hover:text-pink-500">
                Home
              </a>

              <a href="#technologies" className="hover:text-pink-500">
                Technologies
              </a>

              <a href="#projects" className="hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#about" className="hover:text-pink-500">
                About
              </a>

              <a href="#contact" className="hover:text-pink-500">
                Contact
              </a>

              <a href="#" className="hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a href="#" className="hover:text-pink-500">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-pink-500">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-pink-500">
              Privacy
            </a>

            <a href="#" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
