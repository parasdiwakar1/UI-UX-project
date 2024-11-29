import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faFileAlt,
  faClipboardCheck,
  faUsers,
  faHandshake,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">How it works?</h2>
        <p className="text-gray-600 mb-8">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FontAwesomeIcon
              icon={faUserPlus}
              className="text-blue-600 text-3xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Select Your Role and Sign Up</h3>
            <p className="text-gray-600">
              Join the platform and pick your role to get started.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FontAwesomeIcon
              icon={faFileAlt}
              className="text-blue-600 text-3xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Buyers Post Your Requirements</h3>
            <p className="text-gray-600">
              Share details about what services or products you need.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FontAwesomeIcon
              icon={faClipboardCheck}
              className="text-blue-600 text-3xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
              Review, Select, and Contact the Best Suppliers
            </h3>
            <p className="text-gray-600">
              Pick suppliers who match your needs and contact them easily.
            </p>
          </div>
          {/* Step 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-blue-600 text-3xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
              Suppliers Complete Profiles
            </h3>
            <p className="text-gray-600">
              Suppliers can showcase their services and gain visibility.
            </p>
          </div>
          {/* Step 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FontAwesomeIcon
              icon={faHandshake}
              className="text-blue-600 text-3xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
              Contact Buyers and Share Quotes
            </h3>
            <p className="text-gray-600">
              Suppliers share proposals and start building partnerships.
            </p>
          </div>
          {/* Step 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FontAwesomeIcon
              icon={faComments}
              className="text-blue-600 text-3xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
              Build Connections and Leave Feedback
            </h3>
            <p className="text-gray-600">
              Buyers and suppliers finalize deals and exchange reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
