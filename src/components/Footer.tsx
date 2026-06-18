function Footer() {
  return (
    <footer
      className="
      mt-16
      py-10
      border-t
      border-white/10
      backdrop-blur-lg
      "
    >

      <div className="text-center">

        <h2 className="text-2xl font-bold text-cyan-400">
          AlgoViz
        </h2>

        <p className="text-gray-400 mt-4">
          Interactive DSA Visualizer & Performance Analyzer
        </p>

        <p className="text-gray-500 mt-6">
          Built with React, TypeScript, Tailwind CSS and Recharts
        </p>

      </div>

    </footer>
  );
}

export default Footer;