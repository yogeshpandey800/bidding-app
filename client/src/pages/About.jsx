



import { Link } from "react-router";
import { useSelector } from "react-redux";

export const About = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-sm shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            About This Project
          </h1>

          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg">
              Welcome to the <strong>Online Bidding System</strong> — a
              full-featured web application designed and developed by{" "}
              <strong>Yogesh Kumar Pandey</strong> as part of my{" "}
              <strong>Minor Project for the Master of Computer Applications (MCA)</strong>.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Project Objective
              </h2>
              <p>
                The main goal of this project is to create an efficient and
                secure online platform where users can buy and sell products
                through bidding. The system aims to replicate real-world auction
                processes in a digital environment with features like
                authentication, bidding, and real-time updates.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                For Academic Learning
              </h2>
              <p>
                This project is an educational implementation focused on
                enhancing practical knowledge of full-stack web development. It
                provides insights into:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Building dynamic and interactive web applications</li>
                <li>Implementing authentication and role-based access</li>
                <li>Developing real-time auction bidding features</li>
                <li>Structuring scalable and maintainable backend APIs</li>
                <li>Improving responsive and user-friendly UI design</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Key Features
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>User registration and authentication with cookies</li>
                <li>Role-based access for admin and users</li>
                <li>Real-time auction bidding system</li>
                <li>Item listing, uploading, and management</li>
                <li>Buyer and seller functionality in a single account</li>
                <li>Fully responsive frontend using React and Tailwind CSS</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Technologies Used
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Frontend:</strong> React.js, Tailwind CSS, Redux
                </li>
                <li>
                  <strong>Backend:</strong> Node.js, Express.js, Mongoose
                </li>
                <li>
                  <strong>Database:</strong> MongoDB
                </li>
                <li>
                  <strong>Authentication:</strong> JWT and Cookies
                </li>
                <li>
                  <strong>Payment Gateway:</strong> Razorpay (test integration)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Developer
              </h2>
              <p>
                This project has been conceptualized and developed by{" "}
                <strong>Yogesh Kumar Pandey</strong> as part of my MCA Minor
                Project. The focus is on delivering a practical understanding of
                full-stack development using the MERN (MongoDB, Express, React,
                Node.js) stack.
              </p>

              <div className="mt-4 p-4 bg-gray-50 rounded-sm">
                <p className="font-medium text-gray-900 mb-2">
                  Connect with the Developer:
                </p>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">GitHub Profile:</span>{" "}
                    <a
                      href="https://github.com/yogeshpandey800"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://github.com/yogeshpandey800
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">LinkedIn:</span>{" "}
                    <a
                      href="https://www.linkedin.com/in/yogeshkumarpandey/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      linkedin.com/in/yogeshkumarpandey
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    <a
                      href="mailto:yogeshpandey@example.com"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      2024073074@mmmut.ac.in
                    </a>
                  </p>
                </div>
              </div>
            </section>

          

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-center">
                Have questions or feedback? Feel free to{" "}
                <Link
                  to="/contact"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  contact me
                </Link>{" "}
                anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
