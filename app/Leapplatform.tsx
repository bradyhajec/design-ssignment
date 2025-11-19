"use client";
import React, { useState, useMemo } from "react";
import type { LucideProps } from "lucide-react";
import {
  Search,
  BookOpen,
  User,
  FileText,
  BarChart3,
  Plus,
  ChevronRight,
  Star,
  Users,
  Award,
  Briefcase,
  X,
} from "lucide-react";

// Mock data
type Resource = {
  id: number;
  title: string;
  topic: string;
  grade: string;
  standard: string;
  type: string;
  saved: boolean;
  description: string;
};

type Role = "teacher" | "student" | "undergraduate";

type Mentor = {
  id: number;
  name: string;
  role: string;
  experience: string;
  available: boolean;
};

type Internship = {
  id: number;
  title: string;
  location: string;
  duration: string;
};

const mockResources: Resource[] = [
  {
    id: 1,
    title: "Introduction to Fractions",
    topic: "Fractions",
    grade: "3rd",
    standard: "CCSS.MATH.3.NF.A.1",
    type: "Lesson Plan",
    saved: false,
    description: "Understand fractions as parts of a whole with visual models",
  },
  {
    id: 2,
    title: "Geometry Basics Interactive",
    topic: "Geometry",
    grade: "4th",
    standard: "CCSS.MATH.4.G.A.1",
    type: "Activity",
    saved: false,
    description:
      "Identify and classify 2D shapes through interactive exercises",
  },
  {
    id: 3,
    title: "Algebraic Expressions Quiz",
    topic: "Algebra",
    grade: "6th",
    standard: "CCSS.MATH.6.EE.A.2",
    type: "Quiz",
    saved: true,
    description: "Evaluate expressions with variables and whole numbers",
  },
  {
    id: 4,
    title: "Measurement Simulation",
    topic: "Measurement",
    grade: "5th",
    standard: "CCSS.MATH.5.MD.A.1",
    type: "Simulation",
    saved: false,
    description: "Convert measurement units within a system",
  },
  {
    id: 5,
    title: "Decimal Operations Practice",
    topic: "Decimals",
    grade: "5th",
    standard: "CCSS.MATH.5.NBT.B.7",
    type: "Activity",
    saved: false,
    description: "Add, subtract, multiply, and divide decimals",
  },
  {
    id: 6,
    title: "Pythagorean Theorem Exploration",
    topic: "Geometry",
    grade: "8th",
    standard: "CCSS.MATH.8.G.B.6",
    type: "Lesson Plan",
    saved: true,
    description: "Apply the Pythagorean theorem to solve problems",
  },
];

const mockAssignments = [
  {
    id: 1,
    title: "Fraction Fundamentals",
    dueDate: "2024-12-05",
    status: "In Progress",
    submissions: 18,
    total: 24,
  },
  {
    id: 2,
    title: "Geometry Shapes Quiz",
    dueDate: "2024-12-08",
    status: "Not Started",
    submissions: 0,
    total: 24,
  },
];

const mockStudentAssignments = [
  {
    id: 1,
    title: "Fraction Fundamentals",
    dueDate: "2024-12-05",
    status: "Submitted",
    score: 85,
  },
  {
    id: 2,
    title: "Geometry Shapes Quiz",
    dueDate: "2024-12-08",
    status: "Assigned",
    score: null,
  },
];

const mockMentors: Mentor[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Middle School Math Specialist",
    experience: "15 years",
    available: true,
  },
  {
    id: 2,
    name: "Prof. Michael Roberts",
    role: "Curriculum Designer",
    experience: "10 years",
    available: true,
  },
];

const mockInternships: Internship[] = [
  {
    id: 1,
    title: "Student Teacher - Oak Elementary",
    location: "Auburn, AL",
    duration: "Spring 2025",
  },
  {
    id: 2,
    title: "Math Tutor - Highland Middle",
    location: "Opelika, AL",
    duration: "Flexible",
  },
];

const LEAPPlatform = () => {
  const [userRole, setUserRole] = useState<Role>("teacher"); // teacher, student, undergraduate
  const [currentView, setCurrentView] = useState("browse");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [resources, setResources] = useState<Resource[]>(mockResources);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  );
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);

  const grades = [
    "all",
    "K",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
  ];
  const topics = [
    "all",
    "Fractions",
    "Geometry",
    "Algebra",
    "Measurement",
    "Decimals",
    "Statistics",
  ];

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGrade =
        selectedGrade === "all" || resource.grade === selectedGrade;
      const matchesTopic =
        selectedTopic === "all" || resource.topic === selectedTopic;
      return matchesSearch && matchesGrade && matchesTopic;
    });
  }, [resources, searchQuery, selectedGrade, selectedTopic]);

  const toggleSave = (resourceId: number) => {
    setResources(
      resources.map((r) =>
        r.id === resourceId ? { ...r, saved: !r.saved } : r
      )
    );
  };

  const handlePreview = (resource: Resource) => {
    setSelectedResource(resource);
  };

  const handleAssign = (resource: Resource) => {
    setSelectedResource(resource);
    setShowAssignmentModal(true);
  };

  // Header Component
  const Header = () => (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <BookOpen size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">LEAP</h1>
              <p className="text-xs text-blue-100">Math Education Platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium capitalize">{userRole}</p>
              <p className="text-xs text-blue-100">Welcome back</p>
            </div>
            <div className="bg-white/20 p-2 rounded-full">
              <User size={24} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );

  // Navigation Component
  const Navigation = () => {
    const navItems: Record<
      Role,
      { id: string; label: string; icon: React.ComponentType<LucideProps> }[]
    > = {
      teacher: [
        { id: "browse", label: "Browse", icon: Search },
        { id: "assignments", label: "Assignments", icon: FileText },
        { id: "collections", label: "Collections", icon: Star },
        { id: "progress", label: "Progress", icon: BarChart3 },
      ],
      student: [
        { id: "browse", label: "Explore", icon: Search },
        { id: "my-assignments", label: "My Assignments", icon: FileText },
        { id: "progress", label: "My Progress", icon: BarChart3 },
      ],
      undergraduate: [
        { id: "browse", label: "Resources", icon: Search },
        { id: "collections", label: "My Collection", icon: Star },
        { id: "mentors", label: "Mentors", icon: Users },
        { id: "internships", label: "Opportunities", icon: Briefcase },
      ],
    };

    return (
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1">
            {navItems[userRole].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors ${
                    currentView === item.id
                      ? "border-blue-600 text-blue-600 font-medium"
                      : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    );
  };

  // Browse View
  const BrowseView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Search className="text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for lessons, activities, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 outline-none text-gray-700"
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Grade Level
            </label>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade === "all" ? "All Grades" : `Grade ${grade}`}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Topic
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic === "all" ? "All Topics" : topic}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {resource.description}
                </p>
              </div>
              <button
                onClick={() => toggleSave(resource.id)}
                className={`p-2 rounded-full ${
                  resource.saved
                    ? "text-yellow-500"
                    : "text-gray-400 hover:text-yellow-500"
                }`}
              >
                <Star
                  size={20}
                  fill={resource.saved ? "currentColor" : "none"}
                />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                {resource.grade} Grade
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                {resource.topic}
              </span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                {resource.type}
              </span>
            </div>

            <div className="text-xs text-gray-500 mb-3">
              <strong>Standard:</strong> {resource.standard}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => handlePreview(resource)}
                className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
              >
                Preview
              </button>
              {userRole === "teacher" && (
                <button
                  onClick={() => handleAssign(resource)}
                  className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Assign
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <Search className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No resources found
          </h3>
          <p className="text-gray-600">
            Try adjusting your filters or search terms
          </p>
        </div>
      )}
    </div>
  );

  // Teacher Assignments View
  const AssignmentsView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">My Assignments</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
          <Plus size={20} />
          <span>Create Assignment</span>
        </button>
      </div>

      <div className="space-y-4">
        {mockAssignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-5"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {assignment.title}
                </h3>
                <p className="text-sm text-gray-600">
                  Due: {assignment.dueDate}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  assignment.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {assignment.status}
              </span>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Submissions</span>
                <span>
                  {assignment.submissions} / {assignment.total}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{
                    width: `${
                      (assignment.submissions / assignment.total) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
              <span>View Details</span>
              <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // Student Assignments View
  const StudentAssignmentsView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">My Assignments</h2>

      <div className="space-y-4">
        {mockStudentAssignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-5"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {assignment.title}
                </h3>
                <p className="text-sm text-gray-600">
                  Due: {assignment.dueDate}
                </p>
              </div>
              {assignment.score !== null && (
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    {assignment.score}%
                  </div>
                  <div className="text-xs text-gray-500">Score</div>
                </div>
              )}
            </div>

            <div className="mb-3">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  assignment.status === "Submitted"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {assignment.status}
              </span>
            </div>

            <button
              className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                assignment.status === "Assigned"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {assignment.status === "Assigned"
                ? "Start Assignment"
                : "Review Feedback"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // Collections View
  const CollectionsView = () => {
    const savedResources = resources.filter((r) => r.saved);

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">My Collection</h2>
          <div className="text-sm text-gray-600">
            {savedResources.length}{" "}
            {savedResources.length === 1 ? "item" : "items"} saved
          </div>
        </div>

        {savedResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {savedResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-5"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900">
                    {resource.title}
                  </h3>
                  <Star
                    size={20}
                    className="text-yellow-500"
                    fill="currentColor"
                  />
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {resource.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {resource.grade} Grade
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    {resource.topic}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Star className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No saved resources yet
            </h3>
            <p className="text-gray-600 mb-4">
              Start saving resources to build your collection
            </p>
            <button
              onClick={() => setCurrentView("browse")}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Browse Resources
            </button>
          </div>
        )}
      </div>
    );
  };

  // Mentors View (Undergraduate)
  const MentorsView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Connect with Mentors</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockMentors.map((mentor: Mentor) => (
          <div
            key={mentor.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-5"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-4 text-white">
                <User size={32} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {mentor.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{mentor.role}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Award size={16} />
                  <span>{mentor.experience} experience</span>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                  Request Mentorship
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Internships View (Undergraduate)
  const InternshipsView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">
        Teaching Opportunities
      </h2>

      <div className="space-y-4">
        {mockInternships.map((internship: Internship) => (
          <div
            key={internship.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-5"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {internship.title}
                </h3>
                <p className="text-sm text-gray-600">{internship.location}</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                {internship.duration}
              </span>
            </div>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // Preview Modal
  const PreviewModal = () => {
    if (!selectedResource) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedResource.title}
              </h2>
              <button
                onClick={() => setSelectedResource(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-gray-700">{selectedResource.description}</p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                  Grade {selectedResource.grade}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                  {selectedResource.topic}
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                  {selectedResource.type}
                </span>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Standards Alignment
                </h3>
                <p className="text-sm text-gray-700">
                  {selectedResource.standard}
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Preview Content
                </h3>
                <p className="text-sm text-gray-700">
                  This is a sample preview of the lesson content. The full
                  resource includes interactive exercises, step-by-step
                  instructions, and assessment materials.
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setSelectedResource(null)}
                className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
              >
                Close
              </button>
              {userRole === "teacher" && (
                <button
                  onClick={() => {
                    setShowAssignmentModal(true);
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Assign to Class
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Assignment Modal
  const AssignmentModal = () => {
    if (!showAssignmentModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-xl max-w-lg w-full">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Create Assignment
              </h2>
              <button
                onClick={() => setShowAssignmentModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Period 1 - Math 101</option>
                  <option>Period 3 - Advanced Math</option>
                  <option>Period 5 - Geometry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Due Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Attempts
                </label>
                <input
                  type="number"
                  defaultValue="3"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="feedback"
                  className="rounded text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="feedback" className="text-sm text-gray-700">
                  Enable immediate feedback
                </label>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowAssignmentModal(false)}
                className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowAssignmentModal(false);
                  setSelectedResource(null);
                }}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Create Assignment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Main render
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Role Switcher (for demo purposes) */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-yellow-800 mb-2">
            <strong>Demo Mode:</strong> Switch roles to explore different views
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => {
                setUserRole("teacher");
                setCurrentView("browse");
              }}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                userRole === "teacher"
                  ? "bg-yellow-600 text-white"
                  : "bg-white text-yellow-800 hover:bg-yellow-100"
              }`}
            >
              Teacher
            </button>
            <button
              onClick={() => {
                setUserRole("student");
                setCurrentView("browse");
              }}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                userRole === "student"
                  ? "bg-yellow-600 text-white"
                  : "bg-white text-yellow-800 hover:bg-yellow-100"
              }`}
            >
              Student
            </button>
            <button
              onClick={() => {
                setUserRole("undergraduate");
                setCurrentView("browse");
              }}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                userRole === "undergraduate"
                  ? "bg-yellow-600 text-white"
                  : "bg-white text-yellow-800 hover:bg-yellow-100"
              }`}
            >
              Undergraduate
            </button>
          </div>
        </div>

        {/* Main Content Views */}
        {currentView === "browse" && <BrowseView />}
        {currentView === "assignments" && userRole === "teacher" && (
          <AssignmentsView />
        )}
        {currentView === "my-assignments" && userRole === "student" && (
          <StudentAssignmentsView />
        )}
        {currentView === "collections" && <CollectionsView />}
        {currentView === "mentors" && userRole === "undergraduate" && (
          <MentorsView />
        )}
        {currentView === "internships" && userRole === "undergraduate" && (
          <InternshipsView />
        )}
        {currentView === "progress" && (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <BarChart3 className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Progress Dashboard
            </h3>
            <p className="text-gray-600">
              Track student performance and completion rates
            </p>
          </div>
        )}
      </main>

      {/* Modals */}
      {selectedResource && !showAssignmentModal && <PreviewModal />}
      {showAssignmentModal && <AssignmentModal />}
    </div>
  );
};

export default LEAPPlatform;
