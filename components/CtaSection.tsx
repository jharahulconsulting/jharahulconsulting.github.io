export default function CtaSection() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 mb-16 sm:mb-20">
        <div className="hero-gradient rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl">
          
          {/* Background Blobs */}
          <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-white/10 rounded-full -mr-20 sm:-mr-28 md:-mr-32 -mt-20 sm:-mt-28 md:-mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary-container/30 rounded-full -ml-20 sm:-ml-28 md:-ml-32 -mb-20 sm:-mb-28 md:-mb-32 blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-6 sm:mb-8 leading-tight">
              Ready to transform your digital infrastructure?
            </h2>

            <div className="text-white text-base sm:text-lg md:text-xl space-y-3 sm:space-y-4 font-normal break-words">
              
              <p>
                📞 Call / WhatsApp:
                <a
                  href="https://wa.me/918910939928"
                  className="underline ml-2 block sm:inline"
                >
                  +91 8910939928
                </a>
              </p>

              <p>
                📧 Email:
                <a
                  href="mailto:jhaconsultancyvapi@gmail.com"
                  className="underline ml-2 block sm:inline"
                >
                  jhaconsultancyvapi@gmail.com
                </a>
              </p>

              <p>
                📍 Address: <span className="block sm:inline">Valsad, Gujarat(INDIA) - 396191</span>
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}