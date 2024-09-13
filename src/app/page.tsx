export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black text-white">
      {/* Background gradient and shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl"></div>

      <main className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 sm:mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient select-none">
          Revolutionary Innovation
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-8 text-gray-300">
          Prepare for Launch
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-400 leading-relaxed">
          We are a newly established audit firm built on a foundation of
          extensive expertise and a commitment to excellence. Our partners bring
          over 13 years of experience working with leading international audit
          firms, providing deep industry knowledge and a global perspective. We
          are dedicated to delivering high-quality audit, advisory, and
          assurance services tailored to meet the unique needs of each client.
          Our mission is to help businesses navigate complex financial
          landscapes with clarity and confidence, ensuring transparency,
          compliance, and sustainable growth. With a strong focus on integrity,
          professionalism, and a client-centered approach, we are your trusted
          partners in achieving financial excellence.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
          <a
            href="#"
            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 overflow-hidden font-bold rounded-full text-sm sm:text-base"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 transition-all duration-300 ease-out group-hover:bg-gradient-to-br group-hover:from-purple-700 group-hover:via-purple-800 group-hover:to-purple-900"></span>
            <span className="relative text-white transition-colors duration-300 ease-in-out group-hover:text-white">
              Discover the Future
            </span>
          </a>
          <a
            href="#"
            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 overflow-hidden font-bold rounded-full text-sm sm:text-base"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-600 via-pink-700 to-pink-800 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"></span>
            <span className="relative text-pink-500 transition-colors duration-300 ease-in-out group-hover:text-white">
              Join the Revolution
            </span>
          </a>
        </div>
      </main>

      <footer className="relative z-10 mt-8 sm:mt-16 text-center text-gray-500 text-sm sm:text-base">
        <p>&copy; 2023 Something Amazing. All rights reserved.</p>
      </footer>
    </div>
  );
}
