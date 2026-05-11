import "../styles/global.css"

type Course = {
  id: number;
  title: string;
  instructor: string;
  progress: number;
};

function App() {
  const courses: Course[] = [
    {
      id: 1,
      title: "React Basics",
      instructor: "John Smith",
      progress: 75,
    },
    {
      id: 2,
      title: "Node.js Mastery",
      instructor: "Sarah Lee",
      progress: 40,
    },
    {
      id: 3,
      title: "MongoDB Essentials",
      instructor: "David Brown",
      progress: 90,
    },
  ];

  return (
    <div className="container">
      <h1 className="heading">Course Enrollment Dashboard</h1>

      <div className="stats-container">
        <div className="card">
          <h2>3</h2>
          <p>Total Courses</p>
        </div>

        <div className="card">
          <h2>2</h2>
          <p>Active Courses</p>
        </div>

        <div className="card">
          <h2>68%</h2>
          <p>Average Progress</p>
        </div>
      </div>

      <div className="course-section">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>

            <p>Instructor: {course.instructor}</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>

            <p>{course.progress}% Completed</p>

            <button className="btn">Continue</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;