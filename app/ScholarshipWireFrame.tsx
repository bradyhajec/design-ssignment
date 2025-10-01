export default function ScholarshipWireframe() {
  return (
    <div className="p-6 space-y-12">
      {/* Desktop Wireframe */}
      <div className="border-2 border-gray-400 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4">
          Scholarship Engine Wireframe (Desktop)
        </h2>

        {/* Header */}
        <div className="flex justify-between border-b-2 border-gray-300 pb-4 mb-4">
          <div className="font-bold">LOGO</div>
          <div className="flex space-x-6">
            <span>Home</span>
            <span>Scholarships</span>
            <span>About</span>
            <span>Contact</span>
          </div>
          <div className="border px-4 py-1">Search Bar</div>
        </div>

        {/* Above the Fold */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="border p-6 text-center">
            Hero Image / Call to Action
          </div>
          <div className="border p-6 text-center">
            Filter Panel (GPA, Major, Deadline)
          </div>
        </div>

        {/* Below the Fold */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="border p-6 text-center">Scholarship Card</div>
          <div className="border p-6 text-center">Scholarship Card</div>
          <div className="border p-6 text-center">Scholarship Card</div>
        </div>

        <div className="border p-6 text-center mb-6">FAQ Section</div>

        {/* Footer */}
        <div className="border-t-2 border-gray-300 pt-4 flex justify-between">
          <span>© 2025 Scholarship Engine</span>
          <div className="flex space-x-4">
            <span>Contact</span>
            <span>Privacy Policy</span>
            <span>Social Icons</span>
          </div>
        </div>
      </div>

      {/* Mobile Wireframe */}
      <div className="border-2 border-gray-400 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4">
          Scholarship Engine Wireframe (Mobile)
        </h2>

        {/* Header */}
        <div className="flex justify-between border-b-2 border-gray-300 pb-4 mb-4">
          <div className="font-bold">LOGO</div>
          <div className="border px-2 py-1">☰</div>
        </div>

        {/* Above the Fold */}
        <div className="border p-6 text-center mb-4">
          Hero Image / Call to Action
        </div>
        <div className="border p-6 text-center mb-4">
          Filter Panel (Dropdowns)
        </div>

        {/* Below the Fold */}
        <div className="space-y-4 mb-4">
          <div className="border p-6 text-center">Scholarship Card</div>
          <div className="border p-6 text-center">Scholarship Card</div>
        </div>

        <div className="border p-6 text-center mb-4">FAQ Section</div>

        {/* Footer */}
        <div className="border-t-2 border-gray-300 pt-4 text-center">
          <span>© 2025 Scholarship Engine | Contact | Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

export function AuburnHomepageWireframe() {
  return (
    <div className="p-6 space-y-12">
      {/* Desktop Wireframe */}
      <div className="border-2 border-gray-400 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4">
          Auburn.edu Homepage Wireframe (Desktop)
        </h2>

        {/* Utility/Emergency Bar */}
        <div className="border p-2 text-center mb-4">
          Emergency Alert / Weather Updates
        </div>

        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-gray-300 pb-4 mb-6">
          <div className="flex items-center space-x-4">
            <div className="border px-4 py-2 font-bold">AUBURN UNIVERSITY</div>
          </div>
          <div className="flex space-x-6">
            <span>Academics</span>
            <span>Admissions</span>
            <span>Research</span>
            <span>Student Life</span>
            <span>Athletics</span>
            <span>Alumni</span>
          </div>
          <div className="border px-4 py-2">Search Auburn</div>
        </div>

        {/* Above the Fold */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-2 border p-8 text-center">
            <div className="text-lg font-semibold mb-2">Hero Image / Video</div>
            <div className="text-sm">Main Campus Feature / Announcement</div>
            <div className="mt-4 space-x-4">
              <div className="inline-block border px-4 py-2">Apply Now</div>
              <div className="inline-block border px-4 py-2">Visit Campus</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border p-4 text-center">Quick Links</div>
            <div className="border p-4 text-center">Campus Directory</div>
            <div className="border p-4 text-center">Give to Auburn</div>
          </div>
        </div>

        {/* Below the Fold */}
        <div className="border rounded-xl p-4 mb-6 text-center">
          Scroll Indicator — Below the Fold
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="border p-6 text-center">Latest News Story</div>
          <div className="border p-6 text-center">Featured Research</div>
          <div className="border p-6 text-center">Athletics Highlight</div>
        </div>

        <div className="grid grid-cols-12 gap-4 mb-6">
          <div className="col-span-6 border p-6 text-center">
            <div className="font-semibold mb-2">Upcoming Events</div>
            <div className="text-sm">Campus Calendar</div>
          </div>
          <div className="col-span-6 border p-6 text-center">
            <div className="font-semibold mb-2">Student Life Highlights</div>
            <div className="text-sm">Campus Activities / Organizations</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="border p-8 text-center">
            <div className="font-semibold">Academic Programs</div>
            <div className="text-sm mt-2">Schools & Colleges</div>
          </div>
          <div className="border p-8 text-center">
            <div className="font-semibold">Research Spotlight</div>
            <div className="text-sm mt-2">Innovation & Discovery</div>
          </div>
          <div className="border p-8 text-center">
            <div className="font-semibold">War Eagle Athletics</div>
            <div className="text-sm mt-2">Sports Updates</div>
          </div>
          <div className="border p-8 text-center">
            <div className="font-semibold">Alumni Network</div>
            <div className="text-sm mt-2">Success Stories</div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-gray-300 pt-6 grid grid-cols-4 gap-4">
          <div className="border p-4 text-center">
            <div className="font-semibold">Contact Info</div>
            <div className="text-sm">Auburn, AL 36849</div>
          </div>
          <div className="border p-4 text-center">
            <div className="font-semibold">Resources</div>
            <div className="text-sm">Students/Faculty/Staff</div>
          </div>
          <div className="border p-4 text-center">
            <div className="font-semibold">Policies</div>
            <div className="text-sm">Accessibility/Privacy</div>
          </div>
          <div className="border p-4 text-center">
            <div className="font-semibold">Connect</div>
            <div className="text-sm">Social Media/Newsletter</div>
          </div>
        </div>
      </div>

      {/* Mobile Wireframe */}
      <div className="border-2 border-gray-400 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4">
          Auburn.edu Homepage Wireframe (Mobile)
        </h2>

        {/* Utility/Emergency Bar */}
        <div className="border p-2 text-center mb-3">Alert Bar</div>

        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-gray-300 pb-3 mb-3">
          <div className="border px-3 py-2 font-bold">AU</div>
          <div className="border px-3 py-1 flex-1 mx-3 text-center">Search</div>
          <div className="border px-2 py-1">☰</div>
        </div>

        {/* Above the Fold */}
        <div className="border p-10 text-center mb-3">
          Hero / CTA (Above the Fold)
        </div>
        <div className="space-y-2 mb-4">
          <div className="border p-3 text-center">Quick Links</div>
          <div className="border p-3 text-center">Apply / Visit / Give</div>
        </div>

        {/* Below the Fold */}
        <div className="space-y-3 mb-4">
          <div className="border p-6 text-center">News Card</div>
          <div className="border p-6 text-center">News Card</div>
          <div className="border p-6 text-center">Events List</div>
          <div className="border p-6 text-center">
            Student Life / Highlights
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-gray-300 pt-4 text-center">
          <span>Contact | Resources | Policies | Social</span>
        </div>
      </div>
    </div>
  );
}
