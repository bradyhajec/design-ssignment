"use client";

export default function ScholarshipOnePager() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Top Nav (anchors to sections) */}
      <header className="sticky top-0 z-10 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Scholarship Finder
            </h1>
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="#login"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              Login
            </a>
            <a
              href="#search"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              Search
            </a>
            <a
              href="#results"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              Results
            </a>
            <a
              href="#details"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              Details
            </a>
          </div>
        </nav>
      </header>

      {/* Splash/Login (Section 1) */}
      <section
        id="login"
        className="min-h-screen flex flex-col items-center justify-center text-center space-y-8 px-4 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-sm text-cyan-300 font-medium">Now Live</p>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            Find scholarships
            <br />
            tailored to you
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Sign in to save matches and track deadlines across Alabama and
            Georgia programs.
          </p>
        </div>

        <div className="w-full max-w-md space-y-4 relative z-10">
          <div className="space-y-4">
            <div className="relative">
              <input
                className="w-full rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="relative">
              <input
                className="w-full rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
                placeholder="Password"
                type="password"
              />
            </div>
          </div>
          <div className="space-y-3">
            <button
              type="button"
              className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
            >
              Sign In
            </button>
            <button
              type="button"
              className="w-full rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 py-3 text-white font-medium hover:bg-white/20 transition-all duration-200"
            >
              Create Account
            </button>
          </div>
        </div>
      </section>

      {/* Search (Section 2) */}
      <section
        id="search"
        className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Find Your Perfect Match
            </h3>
            <p className="text-xl text-gray-300 mt-4">
              Enter your information and discover scholarships made for you
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">GPA</label>
                <input
                  className="w-full rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
                  placeholder="e.g., 3.6"
                  inputMode="decimal"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">
                  Test Scores
                </label>
                <input
                  className="w-full rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
                  placeholder="ACT 28 or SAT 1320"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">
                  Intended Major
                </label>
                <select className="w-full rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200">
                  <option value="" className="bg-slate-800">
                    Select Major
                  </option>
                  <option className="bg-slate-800">Biology</option>
                  <option className="bg-slate-800">Engineering</option>
                  <option className="bg-slate-800">Business</option>
                  <option className="bg-slate-800">Computer Science</option>
                  <option className="bg-slate-800">Education</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">
                  State
                </label>
                <select className="w-full rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200">
                  <option value="" className="bg-slate-800">
                    Select State
                  </option>
                  <option className="bg-slate-800">Alabama</option>
                  <option className="bg-slate-800">Georgia</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium text-gray-200 block mb-3">
                Extracurriculars
              </label>
              <div className="flex flex-wrap gap-3">
                {[
                  "Sports",
                  "Band",
                  "Student Government",
                  "Community Service",
                  "Robotics",
                  "DECA",
                ].map((tag) => (
                  <label
                    key={tag}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 cursor-pointer select-none hover:bg-white/20 transition-all duration-200"
                  >
                    <input type="checkbox" className="accent-cyan-400" />
                    <span className="text-sm text-gray-200">{tag}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                type="button"
                className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
              >
                Search Scholarships
              </button>
              <button
                type="button"
                className="px-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results (Section 3) */}
      <section
        id="results"
        className="py-20 px-4 bg-gradient-to-b from-black/20 to-black/40"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
            <div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Scholarship Results
              </h3>
              <p className="text-gray-400 mt-2">
                3 matches found for your profile
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-300">Sort by</label>
                <select className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
                  <option className="bg-slate-800">Relevance</option>
                  <option className="bg-slate-800">Amount</option>
                  <option className="bg-slate-800">Deadline</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-300">Filter</label>
                <select className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
                  <option className="bg-slate-800">All</option>
                  <option className="bg-slate-800">Alabama Only</option>
                  <option className="bg-slate-800">Georgia Only</option>
                  <option className="bg-slate-800">STEM</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "STEM Excellence Scholarship",
                amount: "$5,000",
                eligibility: "GPA 3.5+, AL/GA, STEM major",
                id: "stem",
                match: "95%",
              },
              {
                name: "Leadership in Service Award",
                amount: "$2,500",
                eligibility: "Community service 100+ hours, AL",
                id: "service",
                match: "88%",
              },
              {
                name: "Southern Scholars Fund",
                amount: "$3,000",
                eligibility: "Residents of GA with ACT 28+",
                id: "southern",
                match: "76%",
              },
            ].map((card) => (
              <article
                key={card.id}
                className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/15 transform hover:scale-[1.02] transition-all duration-200 shadow-xl"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-xs font-semibold text-green-400">
                      {card.match} match
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {card.name}
                </h4>
                <p className="text-cyan-300 font-semibold text-xl mb-1">
                  {card.amount}
                </p>
                <p className="text-sm text-gray-300 mb-4">{card.eligibility}</p>
                <div className="flex gap-3">
                  <a
                    href="#details"
                    className="flex-1 text-center rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                  >
                    View Details
                  </a>
                  <button className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/20 transition-all duration-200">
                    Save
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Details (Section 4) */}
      <section id="details" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white">
                  STEM Excellence Scholarship
                </h3>
                <p className="text-cyan-300 text-2xl font-semibold mt-1">
                  $5,000
                </p>
              </div>
              <div className="flex items-center gap-2 bg-green-500/20 rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium text-green-400">
                  95% Match
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <dt className="font-semibold text-gray-200 mb-2">
                    Eligibility Requirements
                  </dt>
                  <dd className="text-gray-300 leading-relaxed">
                    GPA 3.5+, intended STEM major, resident of Alabama or
                    Georgia. Must demonstrate academic excellence and commitment
                    to STEM fields.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-200 mb-2">
                    Application Deadline
                  </dt>
                  <dd className="text-gray-300">March 15, 2026</dd>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <dt className="font-semibold text-gray-200 mb-2">
                    Contact Information
                  </dt>
                  <dd className="text-gray-300">scholarships@example.org</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-200 mb-2">
                    Official Website
                  </dt>
                  <dd className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
                    example.org/stem-excellence
                  </dd>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg">
                Apply Now
              </button>
              <button className="px-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200">
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-400 text-sm">
            © 2025 Scholarship Finder. Empowering students to achieve their
            dreams.
          </p>
        </div>
      </footer>
    </main>
  );
}
