"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  AlertCircle,
  User,
  Car,
  MapPin,
  Calendar,
  Clock,
  FileText,
  Shield,
  Info,
} from "lucide-react";

const CrashReportDesign = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Title Page
    {
      title: "Title Page",
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white p-12">
          <Shield className="w-32 h-32 mb-8 text-blue-200" />
          <h1 className="text-5xl font-bold mb-4 text-center text-white">
            Alabama Law Enforcement
          </h1>
          <h2 className="text-3xl font-semibold mb-8 text-center text-blue-100">
            Crash Report Digital Entry System
          </h2>
          <div className="mt-12 bg-white/20 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Project Team
            </h3>
            <p className="text-xl mb-2 text-blue-100">Brady Hajec</p>
            <p className="text-xl mb-2 text-blue-100">[Team Member 2]</p>
            <p className="text-xl mb-2 text-blue-100">[Team Member 3]</p>
            <p className="text-xl text-blue-100">[Team Member 4]</p>
          </div>
          <p className="mt-8 text-lg text-blue-200">
            User Interface Design and Evaluation - Fall 2025
          </p>
        </div>
      ),
    },

    // Hardware/Software Specifications
    {
      title: "Hardware & Software Specifications",
      content: (
        <div className="p-8 bg-gray-50">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Hardware & Software Specifications
          </h2>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                Hardware Requirements
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Patrol Vehicle Tablet:</strong> 10-12 inch
                    ruggedized tablet with stylus support
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Station Desktop:</strong> Standard Windows PC with
                    24 inch monitor
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Network:</strong> 4G LTE connectivity for field use,
                    secure WiFi at station
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Input:</strong> Touch screen, keyboard, and mouse
                    support
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                Software Requirements
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>OS:</strong> Windows 10/11 or iOS for tablets
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Browser:</strong> Chrome, Edge, or Safari (web-based
                    application)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Database:</strong> Secure cloud storage with local
                    caching
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Security:</strong> 256-bit encryption, multi-factor
                    authentication
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Integration:</strong> Alabama DMV database, NCIC
                    access
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

    // Interface Metaphor & Interaction Type
    {
      title: "Interface Metaphor & Interaction Type",
      content: (
        <div className="p-8 bg-gray-50">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Interface Metaphor & Interaction Type
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">
              Interface Metaphor
            </h3>
            <p className="text-lg mb-4">
              <strong>Digital Clipboard/Form Metaphor</strong>
            </p>
            <p className="mb-4">
              The interface mimics a traditional paper form on a clipboard that
              officers are already familiar with. The digital version maintains
              the visual structure of the physical crash report form while
              adding intelligent features like auto-complete, validation, and
              quick data entry shortcuts.
            </p>
            <p>
              This metaphor helps officers transition from paper to digital
              seamlessly, reducing cognitive load and training time.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">
              Interaction Type
            </h3>
            <p className="text-lg mb-4">
              <strong>Form Fill-in with Instructive Guidance</strong>
            </p>
            <div className="space-y-3">
              <p>
                <strong>Primary:</strong> Form fill-in interaction with
                structured data entry fields
              </p>
              <p>
                <strong>Secondary:</strong> Direct manipulation for diagram
                creation (crash scene)
              </p>
              <p>
                <strong>Supporting:</strong> Menu selection for dropdowns and
                categorical data
              </p>
              <p className="mt-4">
                The system provides contextual help, field validation, and
                progressive disclosure to guide officers through the process
                efficiently while ensuring data accuracy.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // Lexicon
    {
      title: "Lexicon",
      content: (
        <div className="p-8 bg-gray-50">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Lexicon - Common Terminology
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                term: "Crash Report",
                def: "Official documentation of a traffic collision incident",
              },
              {
                term: "Reporting Officer",
                def: "Law enforcement officer filing the crash report",
              },
              {
                term: "Unit",
                def: "A vehicle, pedestrian, or other entity involved in the crash",
              },
              {
                term: "Driver/Operator",
                def: "Person operating a vehicle involved in the crash",
              },
              {
                term: "VIN",
                def: "Vehicle Identification Number - unique 17-character vehicle identifier",
              },
              {
                term: "Citation",
                def: "Traffic violation ticket issued as result of crash investigation",
              },
              {
                term: "Contributing Factors",
                def: "Conditions or actions that led to or worsened the crash",
              },
              {
                term: "Crash Diagram",
                def: "Visual representation of crash scene showing vehicle positions",
              },
              {
                term: "Property Damage",
                def: "Damage to vehicles or other property resulting from crash",
              },
              {
                term: "Injury Severity",
                def: "Classification of injuries (fatal, incapacitating, non-incapacitating, possible)",
              },
              {
                term: "Roadway Conditions",
                def: "State of road surface and environment at time of crash",
              },
              {
                term: "Submission",
                def: "Finalizing and sending completed crash report to central database",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <h4 className="font-semibold text-blue-800 mb-2">
                  {item.term}
                </h4>
                <p className="text-sm text-gray-800">{item.def}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    // Persona
    {
      title: "Persona",
      content: (
        <div className="p-8 bg-gray-50">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            User Persona - Officer Marcus Seals
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex gap-8 mb-6">
              <div className="w-48 h-48 bg-blue-200 rounded-lg flex items-center justify-center">
                <User className="w-32 h-32 text-blue-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Officer Marcus Seals
                </h3>
                <p className="text-gray-800 mb-4">
                  Patrol Officer, Montgomery Police Department
                </p>
                <div className="grid grid-cols-2 gap-3 text-gray-800">
                  <div>
                    <strong>Age:</strong> 34
                  </div>
                  <div>
                    <strong>Experience:</strong> 8 years
                  </div>
                  <div>
                    <strong>Education:</strong> Associate in Criminal Justice
                  </div>
                  <div>
                    <strong>Tech Comfort:</strong> Moderate
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Background</h4>
                <p className="text-sm text-gray-800">
                  Marcus has been with MPD for 8 years, handling 3-5 crash
                  reports weekly. He is comfortable with basic technology but
                  prefers simple, straightforward interfaces. Currently fills
                  out paper forms at scenes, then types into computer back at
                  station.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Goals</h4>
                <ul className="text-sm space-y-1 text-gray-800">
                  <li>• Complete reports quickly and accurately</li>
                  <li>• Minimize time spent on paperwork</li>
                  <li>• Reduce data entry errors</li>
                  <li>• Return to patrol duties faster</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">
                  Frustrations
                </h4>
                <ul className="text-sm space-y-1 text-gray-800">
                  <li>• Double data entry (paper then computer)</li>
                  <li>• Difficult to read handwriting</li>
                  <li>• Missing required fields discovered later</li>
                  <li>• Complicated software with unclear navigation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Needs</h4>
                <ul className="text-sm space-y-1 text-gray-800">
                  <li>• Clear indication of required fields</li>
                  <li>• Auto-save to prevent data loss</li>
                  <li>• Quick lookup of driver/vehicle info</li>
                  <li>• Works offline in areas with poor signal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Empathy Map
    {
      title: "Empathy Map",
      content: (
        <div className="p-8 bg-gray-50">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Empathy Map - Officer Marcus Seals
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="border-2 border-blue-300 p-6 rounded-lg bg-blue-50">
                <h4 className="font-bold text-blue-800 mb-3 text-lg">
                  THINKS & FEELS
                </h4>
                <ul className="text-sm space-y-2 text-gray-800">
                  <li>• I need to get this right the first time</li>
                  <li>• Worried about making mistakes on reports</li>
                  <li>• Wants to help accident victims efficiently</li>
                  <li>• Frustrated by duplicate data entry</li>
                  <li>• Values accuracy over speed, but wants both</li>
                </ul>
              </div>

              <div className="border-2 border-green-300 p-6 rounded-lg bg-green-50">
                <h4 className="font-bold text-green-800 mb-3 text-lg">SEES</h4>
                <ul className="text-sm space-y-2 text-gray-800">
                  <li>• Stressed drivers at accident scenes</li>
                  <li>• Colleagues struggling with paper forms</li>
                  <li>• Traffic backing up while completing reports</li>
                  <li>• Other departments using digital tablets</li>
                  <li>• Supervisors reviewing reports for errors</li>
                </ul>
              </div>

              <div className="border-2 border-orange-300 p-6 rounded-lg bg-orange-50">
                <h4 className="font-bold text-orange-800 mb-3 text-lg">
                  SAYS & DOES
                </h4>
                <ul className="text-sm space-y-2 text-gray-800">
                  <li>• Let me get your information</li>
                  <li>• Takes notes on paper at scene</li>
                  <li>• Reviews form for completeness</li>
                  <li>• Asks clarifying questions to drivers</li>
                  <li>• Returns to station to type up reports</li>
                  <li>• This should only take a few minutes</li>
                </ul>
              </div>

              <div className="border-2 border-purple-300 p-6 rounded-lg bg-purple-50">
                <h4 className="font-bold text-purple-800 mb-3 text-lg">
                  HEARS
                </h4>
                <ul className="text-sm space-y-2 text-gray-800">
                  <li>• How long will this take?</li>
                  <li>• Supervisors: Make sure all fields are complete</li>
                  <li>• Colleagues complaining about paperwork</li>
                  <li>• Drivers providing insurance information</li>
                  <li>• Radio dispatch with new calls</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
                <h4 className="font-bold text-red-800 mb-3 text-lg">PAINS</h4>
                <ul className="text-sm space-y-1 text-gray-800">
                  <li>• Time-consuming double data entry</li>
                  <li>• Risk of losing paper forms</li>
                  <li>• Illegible handwriting causing errors</li>
                  <li>• Missing information discovered hours later</li>
                  <li>• Complex software with poor usability</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                <h4 className="font-bold text-green-800 mb-3 text-lg">GAINS</h4>
                <ul className="text-sm space-y-1 text-gray-800">
                  <li>• Complete reports faster and more accurately</li>
                  <li>• Enter data once at the scene</li>
                  <li>• Automatic validation prevents errors</li>
                  <li>• More time for actual police work</li>
                  <li>• Professional digital system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Scenario
    {
      title: "Officer Scenario",
      content: (
        <div className="p-8 bg-gray-50">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Usage Scenario - Officer Seals
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-lg mb-2 text-blue-800">
                  Context
                </h4>
                <p className="text-gray-800">
                  It is 2:30 PM on a Tuesday afternoon. Officer Marcus Seals
                  responds to a two-vehicle collision at the intersection of
                  Dexter Avenue and Court Street in Montgomery. Both vehicles
                  are drivable with moderate damage, and no serious injuries are
                  reported.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-lg mb-2 text-green-800">
                  Step 1: Arrival & Assessment
                </h4>
                <p className="text-gray-800">
                  Officer Seals arrives at the scene, ensures everyone is safe,
                  and retrieves his department-issued tablet from his patrol
                  vehicle. He opens the Crash Report app and taps New Report on
                  the main screen.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-lg mb-2 text-green-800">
                  Step 2: Basic Information
                </h4>
                <p className="text-gray-800">
                  The app automatically populates the date, time, and his
                  officer information from his login. He taps the location
                  field, and GPS auto-fills the intersection. He verifies it is
                  correct and proceeds to the next section.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-lg mb-2 text-green-800">
                  Step 3: First Driver Information
                </h4>
                <p className="text-gray-800">
                  He approaches the first driver and asks for their license.
                  Using the tablet camera, he scans the driver license barcode.
                  The system automatically fills in name, address, date of
                  birth, and license number. He then scans the vehicle VIN,
                  which populates make, model, year, and registration.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-lg mb-2 text-green-800">
                  Step 4: Second Driver Information
                </h4>
                <p className="text-gray-800">
                  He repeats the process with the second driver. The app clearly
                  shows he is entering Unit 2 information. The interface
                  highlights any missing required fields in yellow, ensuring he
                  does not forget critical information.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-lg mb-2 text-green-800">
                  Step 5: Crash Details
                </h4>
                <p className="text-gray-800">
                  He uses the crash diagram tool to quickly sketch the position
                  of both vehicles at the intersection. He selects contributing
                  factors from dropdown menus: Driver 1 - Failed to Yield and
                  notes road conditions as Dry, Clear.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-lg mb-2 text-green-800">
                  Step 6: Review & Submit
                </h4>
                <p className="text-gray-800">
                  Before submitting, the app runs a validation check and shows a
                  green checkmark confirming all required fields are complete.
                  Officer Seals reviews the summary page, adds a brief narrative
                  description, and taps Submit Report. The report uploads to the
                  department database, and he receives a confirmation number.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-semibold text-lg mb-2 text-purple-800">
                  Outcome
                </h4>
                <p className="text-gray-800">
                  Total time: 12 minutes. Officer Seals has completed the entire
                  report at the scene without needing to return to the station
                  for data entry. Both drivers receive an email with the report
                  number. Officer Seals clears the scene and returns to patrol,
                  saving approximately 30 minutes compared to the old
                  paper-and-retype process.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Lo-Fi Wireframe
    {
      title: "Lo-Fidelity Wireframe",
      content: (
        <div className="p-8 bg-gray-50">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Lo-Fidelity Wireframe Sketches
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md border-4 border-gray-600">
              <h3 className="text-center font-bold mb-4 text-lg text-gray-900">
                Wireframe 1: Login & Dashboard
              </h3>
              <div className="border-2 border-gray-600 p-4 space-y-4 bg-white">
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-gray-600 rounded-full mx-auto mb-2"></div>
                  <div className="text-xs font-semibold text-gray-800">
                    ALABAMA STATE SEAL
                  </div>
                </div>
                <div className="border-2 border-gray-600 h-8 flex items-center px-2 text-xs font-medium text-gray-800">
                  Badge Number
                </div>
                <div className="border-2 border-gray-600 h-8 flex items-center px-2 text-xs font-medium text-gray-800">
                  Password
                </div>
                <div className="bg-gray-700 h-10 flex items-center justify-center font-bold text-sm text-white">
                  LOGIN
                </div>
                <div className="mt-8 space-y-2">
                  <div className="border-2 border-gray-600 h-12 flex items-center px-2 text-sm font-bold text-gray-800">
                    + NEW CRASH REPORT
                  </div>
                  <div className="border-2 border-gray-600 h-10 flex items-center px-2 text-xs font-medium text-gray-800">
                    Drafts (3)
                  </div>
                  <div className="border-2 border-gray-600 h-10 flex items-center px-2 text-xs font-medium text-gray-800">
                    Recent Reports
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md border-4 border-gray-600">
              <h3 className="text-center font-bold mb-4 text-lg text-gray-900">
                Wireframe 2: Report Entry Form
              </h3>
              <div className="border-2 border-gray-600 p-4 space-y-3 bg-white">
                <div className="flex gap-2">
                  <div className="flex-1 border-2 border-gray-600 h-6 text-xs flex items-center px-1 font-medium text-gray-800">
                    Info
                  </div>
                  <div className="flex-1 border-2 border-blue-600 h-6 text-xs flex items-center px-1 bg-blue-200 font-bold text-gray-900">
                    Drivers
                  </div>
                  <div className="flex-1 border-2 border-gray-600 h-6 text-xs flex items-center px-1 font-medium text-gray-800">
                    Details
                  </div>
                </div>
                <div className="text-xs font-bold text-gray-900">
                  DRIVER 1 [SCAN LICENSE]
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-gray-600 h-6 text-xs px-1 font-medium text-gray-800 flex items-center">
                    First Name*
                  </div>
                  <div className="border border-gray-600 h-6 text-xs px-1 font-medium text-gray-800 flex items-center">
                    Last Name*
                  </div>
                  <div className="border border-gray-600 h-6 text-xs px-1 col-span-2 font-medium text-gray-800 flex items-center">
                    Address*
                  </div>
                  <div className="border border-gray-600 h-6 text-xs px-1 font-medium text-gray-800 flex items-center">
                    License Number*
                  </div>
                  <div className="border border-gray-600 h-6 text-xs px-1 font-medium text-gray-800 flex items-center">
                    State*
                  </div>
                </div>
                <div className="text-xs font-bold mt-4 text-gray-900">
                  VEHICLE INFO [SCAN VIN]
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border border-gray-600 h-6 text-xs px-1 font-medium text-gray-800 flex items-center">
                    Year*
                  </div>
                  <div className="border border-gray-600 h-6 text-xs px-1 font-medium text-gray-800 flex items-center">
                    Make*
                  </div>
                  <div className="border border-gray-600 h-6 text-xs px-1 font-medium text-gray-800 flex items-center">
                    Model*
                  </div>
                </div>
                <div className="bg-gray-700 h-8 flex items-center justify-center font-bold text-xs mt-4 text-white">
                  + ADD DRIVER 2
                </div>
                <div className="flex gap-2 mt-4">
                  <div className="flex-1 border-2 border-gray-600 h-8 flex items-center justify-center text-xs font-medium text-gray-800">
                    SAVE DRAFT
                  </div>
                  <div className="flex-1 bg-gray-700 h-8 flex items-center justify-center font-bold text-xs text-white">
                    NEXT →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Hi-Fi Login
    {
      title: "Hi-Fidelity Design: Login",
      content: (
        <div className="h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 flex items-center justify-center p-8">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center">
                  <Shield className="w-16 h-16 text-white" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-blue-900 mb-1">
                Alabama Law Enforcement
              </h1>
              <p className="text-gray-600">Crash Report System</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Badge Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                  placeholder="Enter badge number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                  placeholder="Enter password"
                />
              </div>

              <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-colors mt-6">
                Sign In
              </button>

              <div className="text-center text-sm text-gray-600 mt-4">
                <p>Secure Connection • Version 2.1</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Hi-Fi Dashboard
    {
      title: "Hi-Fidelity Design: Dashboard",
      content: (
        <div className="h-full bg-gray-50">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 shadow-lg">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8" />
                <div>
                  <h1 className="text-xl font-bold">
                    Alabama Crash Report System
                  </h1>
                  <p className="text-sm opacity-90">
                    Officer M. Seals • Badge 2847
                  </p>
                </div>
              </div>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">
                Logout
              </button>
            </div>
          </div>

          <div className="max-w-6xl mx-auto p-8">
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-6 rounded-xl shadow-lg mb-6 flex items-center justify-between group transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <FileText className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold">New Crash Report</h2>
                  <p className="text-blue-100">Start a new incident report</p>
                </div>
              </div>
              <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                  <h3 className="font-bold text-lg">Draft Reports</h3>
                </div>
                <p className="text-3xl font-bold text-orange-600 mb-2">3</p>
                <p className="text-sm text-gray-600">Incomplete reports</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-green-600" />
                  <h3 className="font-bold text-lg">Submitted Today</h3>
                </div>
                <p className="text-3xl font-bold text-green-600 mb-2">5</p>
                <p className="text-sm text-gray-600">Reports completed</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-6 h-6 text-blue-600" />
                  <h3 className="font-bold text-lg">Quick Actions</h3>
                </div>
                <div className="space-y-2">
                  <button className="w-full text-left text-sm text-blue-600 hover:underline">
                    Search Drivers
                  </button>
                  <button className="w-full text-left text-sm text-blue-600 hover:underline">
                    View Templates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Hi-Fi Crash Report Form
    {
      title: "Hi-Fidelity Design: Crash Report Form",
      content: (
        <div className="h-full bg-gray-50 overflow-y-auto">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 shadow-lg">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8" />
                <div>
                  <h1 className="text-xl font-bold">
                    Crash Report #CR-2025-001847
                  </h1>
                  <p className="text-sm opacity-90">
                    Officer M. Seals • October 1, 2025
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">
                  Save Draft
                </button>
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm transition-colors">
                  Submit Report
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto p-6">
            {/* Progress Tabs */}
            <div className="flex mb-6 bg-white rounded-lg shadow-sm p-1">
              <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold">
                Basic Info
              </button>
              <button className="flex-1 py-3 px-4 text-gray-600 hover:bg-gray-100 rounded-lg">
                Drivers & Vehicles
              </button>
              <button className="flex-1 py-3 px-4 text-gray-600 hover:bg-gray-100 rounded-lg">
                Crash Details
              </button>
              <button className="flex-1 py-3 px-4 text-gray-600 hover:bg-gray-100 rounded-lg">
                Review & Submit
              </button>
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Incident Information
                </h2>
                <div className="ml-auto bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Auto-filled via GPS
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date of Crash <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value="2025-10-01"
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Time of Crash <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="time"
                      value="14:30"
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location <span className="text-red-500">*</span>
                  <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                </label>
                <input
                  type="text"
                  value="Intersection of Dexter Ave & Court St, Montgomery, AL"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none bg-blue-50 text-gray-900"
                  readOnly
                />
                <p className="text-sm text-gray-600 mt-1">
                  GPS: 32.3763° N, 86.3077° W
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Weather Conditions <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900">
                    <option>Clear</option>
                    <option>Cloudy</option>
                    <option>Rain</option>
                    <option>Fog</option>
                    <option>Snow</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Road Surface <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900">
                    <option>Dry</option>
                    <option>Wet</option>
                    <option>Icy</option>
                    <option>Snow-covered</option>
                    <option>Debris</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Light Conditions <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900">
                    <option>Daylight</option>
                    <option>Dusk</option>
                    <option>Dark - Streetlights</option>
                    <option>Dark - No Streetlights</option>
                    <option>Dawn</option>
                  </select>
                </div>
              </div>

              {/* Driver Section Preview */}
              <div className="border-t pt-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      Driver & Vehicle Information
                    </h3>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <span>Scan Driver License</span>
                    <div className="w-5 h-5 border-2 border-white rounded"></div>
                  </button>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <h4 className="text-lg font-semibold">Driver 1 (Unit 1)</h4>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      License Scanned
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value="Sarah"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-blue-50 text-gray-900"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value="Johnson"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-blue-50 text-gray-900"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        License Number *
                      </label>
                      <input
                        type="text"
                        value="AL-98765432"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-blue-50 text-gray-900"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <button className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50">
                  Save Draft
                </button>
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center gap-2">
                  Continue to Drivers & Vehicles
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Developer Handoff Notes
    {
      title: "Developer Handoff Notes",
      content: (
        <div className="p-8 bg-gray-50 min-h-screen">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Developer Handoff Notes
          </h2>

          <div className="space-y-6">
            {/* Technical Implementation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Technical Implementation Details
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Framework:</strong> Built with Next.js 13+ using App
                    Router architecture and React 18 with TypeScript for type
                    safety and modern development practices.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Styling:</strong> Tailwind CSS provides
                    utility-first styling with custom blue color palette
                    matching Alabama state branding (#1e3a8a, #1e40af, #2563eb).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Icons:</strong> Lucide React icon library used
                    throughout for consistency (Shield, User, Car, MapPin,
                    Calendar, Clock, FileText, Info, ChevronRight, AlertCircle).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>State Management:</strong> React useState hook
                    manages slide navigation and form interactions with
                    client-side rendering enabled via "use client" directive.
                  </span>
                </li>
              </ul>
            </div>

            {/* UI Components */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center gap-2">
                <User className="w-5 h-5" />
                Key UI Components & Features
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Slide-based Presentation:</strong> Multi-slide
                    design document with navigation controls, slide indicators,
                    and keyboard/mouse support for easy navigation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Form Elements:</strong> Comprehensive form design
                    with proper labeling, validation indicators (*), focus
                    states, and accessibility features including dark text
                    (text-gray-900) for contrast.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Responsive Design:</strong> Grid layouts, flexbox
                    components, and mobile-first approach ensure compatibility
                    across tablet and desktop devices.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Interactive Elements:</strong> Buttons with hover
                    states, form inputs with focus indicators, and modern UI
                    patterns following police application design standards.
                  </span>
                </li>
              </ul>
            </div>

            {/* Design System */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Design System & Standards
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Color Palette:</strong> Alabama state blue theme
                    (blue-900, blue-800, blue-600) with appropriate contrast
                    ratios for accessibility compliance.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Typography:</strong> Consistent font weights
                    (font-bold, font-semibold, font-medium) and text sizes
                    following hierarchical structure for professional police
                    interface.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Form Standards:</strong> Standardized input styling
                    with border-gray-300, rounded-lg corners,
                    focus:border-blue-600 states, and proper padding (px-4
                    py-3).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Accessibility:</strong> High contrast text, proper
                    labeling, keyboard navigation support, and WCAG compliance
                    considerations throughout the interface.
                  </span>
                </li>
              </ul>
            </div>

            {/* Implementation Notes */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Critical Implementation Notes
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Security Requirements:</strong> Implement proper
                    authentication, session management, and data encryption for
                    sensitive police information handling.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Data Validation:</strong> All form fields require
                    server-side validation, sanitization, and proper error
                    handling with user-friendly feedback messages.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Offline Capability:</strong> Consider implementing
                    PWA features for offline form completion and data
                    synchronization when connection is restored.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Performance:</strong> Optimize for tablet use with
                    touch-friendly UI elements, fast load times, and efficient
                    data handling for field operations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    <strong>Browser Support:</strong> Ensure compatibility with
                    Chrome, Firefox, Safari, and Edge browsers commonly used in
                    law enforcement environments.
                  </span>
                </li>
              </ul>
            </div>

            {/* Future Considerations */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center gap-2">
                <ChevronRight className="w-5 h-5" />
                Future Enhancement Opportunities
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    Integration with existing police databases and CAD systems
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>GPS auto-location capture and mapping integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    Voice-to-text capabilities for hands-free data entry
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    Barcode/QR code scanning for driver license automation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>
                    Photo capture and document attachment capabilities
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-screen bg-white">
      {/* Navigation */}
      <div className="bg-gray-900 text-white p-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-xl font-bold">
            Alabama Police Crash Report - Design Document
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm">
              Slide {currentSlide + 1} of {slides.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="px-3 py-1 bg-blue-600 rounded disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                ←
              </button>
              <button
                onClick={() =>
                  setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))
                }
                disabled={currentSlide === slides.length - 1}
                className="px-3 py-1 bg-blue-600 rounded disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="h-full">{slides[currentSlide].content}</div>

      {/* Slide Indicator */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentSlide ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CrashReportDesign;
