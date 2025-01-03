import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const HabotLandingPage = () => {
  return (
    <div className="bg-gray-100">
      
      <section
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white px-4 sm:px-8"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/4df9/f396/c8b4ef806609efd227c6672c5dba3716?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N8k~qqGEqOPOGELe8eaIK9DNKww1VvRXDU17NnAINtiSdHNlqpKKlZRqK8afttUELmHhzbcQ4i-RzZ~n2YH5gbXXIdhcyOQw5oovtPVZ2hLmjRiVRyOlEKh6WxZgBif1h3z1wpQ9uyPB5ASSZSKZWWoilOUpgYzJ8C90TkKzKIDfM4QndQzGl6I0naeO-86sWuBgejIaJHqcgJgu-qFH2AJo9RR6Bg6PgRdVN-Tq~FccWbJy~PF~qcADefpcOvJJR-Ncg3oALwkg4Atr0nRBGx13ov7sSqQkSzYLvBz~8AW-CDtTl~ZG~gGxeDRRFtIMjNM7r7ELsTYdpD7HJ771QA__')",
        }}
      >
      
        <div
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{ backgroundColor: "#072F5773" }}
        ></div>
        <h1 className="text-4xl sm:text-7xl font-bold mb-4 text-center relative">
          Are You a Supplier?
        </h1>
        <p className="text-xl sm:text-6xl mb-6 text-center relative">
          Explore Matching Opportunities.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-4xl px-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-4xl px-4 relative">
          <input
            type="text"
            placeholder="Search your required service here"
            className="py-3 px-4 rounded-lg text-black w-full"
            aria-label="Search service"
          />
          <input
            type="text"
            placeholder="Search your desired location here"
            className="py-3 px-4 rounded-lg text-black w-full"
            aria-label="Search location"
          />
          <button
            className="py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600"
            aria-label="Search"
          >
            Search
          </button>
        </div>
       <a
          href="#"
          className="mt-4 text-blue-300 underline text-sm sm:text-base relative hover:text-blue-400 transition-colors"
          aria-label="Link to buyer page"
        >
          Are you a buyer? Click here if you are looking to post requirements
        </a>
      </section>
      

    
      <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center bg-[#E8FBFF]">
        <div className="md:w-1/2 text-center md:text-left md:mr-12">
          <h2 className="text-2xl font-bold mb-4">
            Ready to dive into <span className="text-blue-600">HABOT?</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button
            className="py-3 px-8 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            aria-label="Sign up button"
          >
            Sign up Today!
          </button>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-2 gap-4">
          {[
            "Abu Dhabi",
            "Dubai",
            "Sharjah & Ajman",
            "Fujairah",
            "Ras Al Khaimah",
            "Umm Al Quwain",
          ].map((city) => (
            <button
              key={city}
              className="py-4 px-6 text-black border-2 border-[#E7760D] rounded-lg hover:bg-[#E7760D] hover:text-white hover:border-white transition-colors"
              aria-label={`Select ${city}`}
            >
              {city}
            </button>
          ))}
        </div>
      </section>

    
      <section className="flex flex-col md:flex-row items-center justify-center bg-[#123557] text-white p-8 md:space-x-8">
        <div className="flex items-center justify-center w-full md:w-1/2">
          <div className="relative">
            <img
              src="https://s3-alpha-sig.figma.com/img/2909/031e/3307f64812ef70cd9d8e886864fad468?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oCzfDb8G3gkF29yfdEv2VecC7w3ohfCnCeb3Zl5gPoerFrUN1Z1QEEXwi-wf03IfvyyLyUi7byTaVZVZt798hCnBoP0UN8-SvEgYRl-QAnijuH3TWu15jw9XfVKmhILcr5V5aFOEoysLbXj5UBc0-QRAo1ZWlXHC~smXgpLdlaEW80Phc976rEJ0NwjBRqfKmsXQdml5s-qM4FT5jq1somveWCmf0yIRYaXYHv9-g5L-J~Gd3oKQr3YeEtw3IYdhf9fs34OqURaNN20qti6etWwWo2KltT6g9LVIh8CzXC7OJJWdCXh4pYUd2rof1sbOnHcZgJrPThREKoZ3pxL9fQ__"
              alt="Post Your Requirements"
              className="rounded-lg shadow-lg"
            />
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-600 text-5xl"
              aria-label="Play video"
            >
              <img
                className="w-12 h-12"
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="Play"
              />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-2xl font-semibold">
              <span className="text-orange-500">Buyer</span> & Supplier
            </h3>

            <ul className="space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <p>Post your requirements.</p>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <p>Sit back for multiple suppliers to contact you.</p>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <p>Choose among the suppliers based on the ratings and reviews.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

    
      <section className="bg-[#E8FBFF] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0 sm:space-x-6">
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-4xl font-bold text-gray-900">
                Let Suppliers{" "}
                <span className="underline decoration-orange-500">
                  Find You
                </span>
              </h2>
            </div>
            <div className="flex">
              <button
                className="py-3 px-8 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                aria-label="Start Now"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HabotLandingPage;
