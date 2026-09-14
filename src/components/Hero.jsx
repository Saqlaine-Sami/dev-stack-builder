const Hero = () => {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[540px] max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 lg:py-20"
    >
      {/* Left Content */}
      <div>
        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Build Your Ideal
          <br />
          <span className="brand-gradient-text">Development Stack</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 md:text-lg">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#technologies"
            className="brand-gradient-bg rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02] hover:opacity-90"
          >
            Explore Technologies
          </a>

          <a
            href="#about"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="/images/banner-stack.png"
          alt="Development stack illustration"
          className="w-full max-w-[480px] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
