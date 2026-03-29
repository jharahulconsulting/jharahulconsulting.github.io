export default function CtaSection() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12 mb-20">
        <div className="hero-gradient rounded-3xl p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container/30 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
              Ready to transform your digital infrastructure?
            </h2>

            <div className="text-white text-lg md:text-xl space-y-4 font-medium">
              
              <p>
                📞 Call / WhatsApp: 
                <a href="https://wa.me/918910939928" className="underline ml-2">
                  +91 8910939928
                </a>
              </p>

              <p>
                📧 Email: 
                <a href="mailto:jhaconsultancyvapi@gmail.com" className="underline ml-2">
                  jhaconsultancyvapi@gmail.com
                </a>
              </p>

              <p>
                📍 Address: Valsad, Gujarat - 396191
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}