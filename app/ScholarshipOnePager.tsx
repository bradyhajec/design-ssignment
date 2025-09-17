"use client";

export default function ScholarshipOnePager() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Top Nav (anchors to sections) */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold">Scholarship Finder</h1>
          <div className="flex gap-4 text-sm">
            <a href="#login" className="hover:underline">
              Login
            </a>
            <a href="#search" className="hover:underline">
              Search
            </a>
            <a href="#results" className="hover:underline">
              Results
            </a>
            <a href="#details" className="hover:underline">
              Details
            </a>
          </div>
        </nav>
      </header>

      {/* Splash/Login (Section 1) */}
      <section
        id="login"
        className="h-[85vh] flex flex-col items-center justify-center text-center space-y-6 px-4"
      >
        <div>
          <p className="text-sm uppercase tracking-wide text-blue-700 font-semibold">
            Welcome
          </p>
          <h2 className="text-4xl font-extrabold">
            Find scholarships tailored to you
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl">
            Sign in to save matches and track deadlines across Alabama and
            Georgia programs.
          </p>
        </div>
        <form className="w-full max-w-sm space-y-3">
          <label className="block text-left text-sm">
            Email
            <input
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="you@example.com"
              type="email"
            />
          </label>
          <label className="block text-left text-sm">
            Password
            <input
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="••••••••"
              type="password"
            />
          </label>
          <button
            type="button"
            className="w-full rounded-xl bg-blue-600 text-white py-2.5 hover:bg-blue-700"
          >
            Sign In
          </button>
          <button type="button" className="w-full rounded-xl border py-2.5">
            Create Account
          </button>
        </form>
      </section>

      {/* Search (Section 2) */}
      <section id="search" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold text-center">
            Find Scholarships for Your Future
          </h3>
          <p className="text-center text-gray-600 mt-2">
            Enter your info and we will match you to relevant opportunities.
          </p>

          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <label className="text-sm">
              GPA
              <input
                className="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder="e.g., 3.6"
                inputMode="decimal"
              />
            </label>
            <label className="text-sm">
              ACT / SAT
              <input
                className="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder="ACT 28 or SAT 1320"
              />
            </label>
            <label className="text-sm md:col-span-1">
              Intended Major
              <select className="mt-1 w-full rounded-xl border px-3 py-2">
                <option value="">Select Major</option>
                <option>Biology</option>
                <option>Engineering</option>
                <option>Business</option>
                <option>Computer Science</option>
                <option>Education</option>
              </select>
            </label>
            <label className="text-sm md:col-span-1">
              State
              <select className="mt-1 w-full rounded-xl border px-3 py-2">
                <option value="">Select State</option>
                <option>Alabama</option>
                <option>Georgia</option>
              </select>
            </label>
            <fieldset className="md:col-span-2">
              <legend className="text-sm">Extracurriculars</legend>
              <div className="mt-2 flex flex-wrap gap-2">
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
                    className="inline-flex items-center gap-2 border rounded-full px-3 py-1 cursor-pointer select-none"
                  >
                    <input type="checkbox" className="accent-blue-600" />
                    <span className="text-sm">{tag}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="md:col-span-2 flex gap-3">
              <button
                type="button"
                className="flex-1 rounded-xl bg-blue-600 text-white py-2.5 hover:bg-blue-700"
              >
                Search Scholarships
              </button>
              <button type="button" className="rounded-xl border px-4">
                Clear
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Results (Section 3) */}
      <section id="results" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h3 className="text-3xl font-semibold">Scholarship Results</h3>
            <div className="flex items-center gap-2">
              <label className="text-sm">
                Sort by
                <select className="ml-2 rounded-lg border px-3 py-2">
                  <option>Relevance</option>
                  <option>Amount</option>
                  <option>Deadline</option>
                </select>
              </label>
              <label className="text-sm">
                Filter
                <select className="ml-2 rounded-lg border px-3 py-2">
                  <option>All</option>
                  <option>Alabama Only</option>
                  <option>Georgia Only</option>
                  <option>STEM</option>
                </select>
              </label>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "STEM Excellence Scholarship",
                amount: "$5,000",
                eligibility: "GPA 3.5+, AL/GA, STEM major",
                id: "stem",
              },
              {
                name: "Leadership in Service Award",
                amount: "$2,500",
                eligibility: "Community service 100+ hours, AL",
                id: "service",
              },
              {
                name: "Southern Scholars Fund",
                amount: "$3,000",
                eligibility: "Residents of GA with ACT 28+",
                id: "southern",
              },
            ].map((card) => (
              <article
                key={card.id}
                className="bg-white rounded-2xl shadow p-5"
              >
                <h4 className="text-lg font-bold">{card.name}</h4>
                <p className="text-gray-600">Amount: {card.amount}</p>
                <p className="text-sm text-gray-500">
                  Eligibility: {card.eligibility}
                </p>
                <div className="flex gap-2 mt-3">
                  <a
                    href="#details"
                    className="rounded-lg bg-blue-600 text-white px-4 py-2 text-sm"
                  >
                    View Details
                  </a>
                  <button className="rounded-lg border px-4 py-2 text-sm">
                    Save
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Details (Section 4) */}
      <section id="details" className="py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow rounded-2xl p-6">
          <h3 className="text-2xl font-bold">STEM Excellence Scholarship</h3>
          <p className="text-gray-600">Amount: $5,000</p>
          <dl className="mt-3 grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="font-medium">Eligibility</dt>
              <dd className="text-gray-700">
                GPA 3.5+, intended STEM major, resident of Alabama or Georgia.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Deadline</dt>
              <dd className="text-gray-700">March 15, 2026</dd>
            </div>
            <div>
              <dt className="font-medium">Contact</dt>
              <dd className="text-gray-700">scholarships@example.org</dd>
            </div>
            <div>
              <dt className="font-medium">Website</dt>
              <dd className="text-blue-700 underline">
                example.org/stem-excellence
              </dd>
            </div>
          </dl>
          <div className="mt-6 flex gap-3">
            <button className="flex-1 rounded-xl bg-blue-600 text-white py-2.5">
              Apply Now
            </button>
            <button className="rounded-xl border px-4">Save for Later</button>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        © 2025 Scholarship Finder
      </footer>
    </main>
  );
}
