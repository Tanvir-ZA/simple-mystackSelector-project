import bannerImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-20">

        {/* Hero Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Build Your
            <span className="brand-gradient-text"> Developer Stack</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 md:mx-0">
            Discover the right technologies, build your development stack,
            and create modern web applications with confidence.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#technologies"
              className="brand-gradient rounded-full px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src={bannerImage}
            alt="Developer technology stack"
            className="w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;