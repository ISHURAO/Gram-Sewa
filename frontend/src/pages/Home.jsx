import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-50 relative">

      {/* TOP GOV BAR */}
      <div className="bg-gray-200 text-sm px-6 py-2">
        Government of India | Ministry of Rural Development
      </div>

      {/* NAVBAR */}
      <nav className="bg-blue-900 text-white px-10 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">GramSewa</h1>

        <div className="flex gap-6 items-center">
          <button>Home</button>
          <button>About</button>
          <button>Dashboard</button>
          <button>Reports</button>

          <input
            placeholder="Search village..."
            className="px-3 py-1 rounded text-black"
          />

          <button className="bg-white text-blue-900 px-4 py-1 rounded font-semibold">
            Login
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-28 px-10 text-center">
        <h2 className="text-5xl font-bold mb-6">Welcome to GramSewa</h2>
        <p className="text-lg max-w-2xl mx-auto">
          A smart digital governance platform empowering villages with transparency,
          complaint tracking and real-time development monitoring.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold text-blue-900 mb-4">
            About GramSewa
          </h3>

          <p className="text-gray-600 leading-relaxed">
            GramSewa is a digital governance platform designed to empower
            villages through transparency, complaint management,
            development monitoring and public participation. It connects
            villagers directly with Panchayat authorities and ensures
            accountability in real-time.
          </p>
        </div>
      </section>

      {/* DASHBOARD CARDS */}
      <section className="bg-gray-100 py-16 text-center">
        <h3 className="text-2xl font-bold mb-10">
          Dashboards & Reports
        </h3>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {["Scheme Monitoring","Village Reports","Downloads"].map((item,i)=>(
            <div key={i} className="bg-white p-10 rounded-2xl shadow hover:shadow-2xl hover:-translate-y-2 transition">
              <h4 className="text-lg font-semibold">{item}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* APP DOWNLOAD */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-4">
            Download Our App
          </h3>

          <p className="text-gray-600 mb-6">
            Access GramSewa services directly from your mobile phone.
            Stay updated with village activities anytime anywhere.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-xl">
              Google Play
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-xl">
              App Store
            </button>
          </div>
        </div>
      </section>

      {/* PORTALS */}
      <section className="bg-gray-100 py-16 text-center">
        <h3 className="text-2xl font-bold mb-10">
          Other Important Portals
        </h3>

        <div className="flex flex-wrap justify-center gap-6 px-6">
          {["Scheme Portal","Village Data","Citizen Portal","Gov Records"].map((item,i)=>(
            <div key={i} className="bg-white px-8 py-5 rounded-xl shadow">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-gray-300 text-center py-8 text-sm">
        © 2026 GramSewa | National Digital Governance Initiative
      </footer>

      {/* FLOATING TOP CORNER ICON */}
      <a
        href="#"
        className="fixed top-5 right-5 bg-gradient-to-r from-blue-700 to-indigo-600 p-3 rounded-full shadow-xl hover:scale-110 transition duration-300 z-50"
      >
        <img
          src="https://drive.google.com/file/d/1GDwXYFQsajStsU0JhUj-im_8AX5uNgyE/view?usp=drive_link"
          alt="icon"
          className="w-6 h-6"
        />
      </a>

    </div>
  );
}