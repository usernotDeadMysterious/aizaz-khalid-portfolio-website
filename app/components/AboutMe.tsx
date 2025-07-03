import Image from "next/image";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { Eye } from "lucide-react";
function AboutMe() {
  return (
    <div className="p-8 pt-0 space-y-3 w-full">
      <h2 className="text-2xl font-bold  ">About Me</h2>

      {/* Professional paragraph */}
      <div className="space-y-3 flex flex-col rounded-lg bg-slate-200/10 dark:bg-slate-700/20 p-4">
        <div className="w-full rounded-lg border border-gray-300 bg-slate-200/10 dark:bg-slate-700/10 p-3 shadow-md">
          <p className="text-sm  ">
            I'm a final-year Computer Science student with a strong interest in{" "}
            <b className="text-red-700 text-sm">Cybersecurity</b> and{" "}
            <b className=" text-blue-700 text-sm">Web development</b>.
          </p>
        </div>

        <Disclosure>
          {({ open }) => (
            <div className="w-full rounded-lg border border-gray-300 bg-slate-200/10 dark:bg-slate-700/10 p-3 shadow-md">
              <Disclosure.Button className="flex justify-between items-center w-full text-left">
                <span className=" font-semibold text-red-700 text-sm hover:text-md">
                  In the field of cybersecurity
                </span>
                <span className="text-xs text-blue-600">
                  {open ? "Hide Details" : "View Details"}
                </span>
              </Disclosure.Button>

              <Disclosure.Panel
                static
                className={`mt-2 text-justify transition-all duration-300 ease-in-out overflow-hidden ${
                  open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p>
                  I have developed strong knowledge and hands-on experience in
                  areas such as penetration testing, network security,
                  firewalls, IDS/IPS tools, and SIEM platforms. I'm also skilled
                  in asset classification, threat and vulnerability assessment
                  and mitigation, and using tools like Linux, SQL (for log
                  analysis), and Python (for automation).
                </p>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <div className="w-full rounded-lg border border-gray-300 bg-slate-200/10 dark:bg-slate-700/10 p-3 shadow-md">
              <Disclosure.Button className="flex justify-between items-center w-full text-left">
                <span className="text-sm font-semibold text-blue-700">
                  In the field of web development
                </span>
                <span className="text-xs text-blue-600">
                  {open ? "Hide Details" : "View Details"}
                </span>
              </Disclosure.Button>

              <Disclosure.Panel
                static
                className={`mt-2  text-justify transition-all duration-300 ease-in-out overflow-hidden ${
                  open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p>
                  I have developed strong knowledge and hands-on experience with
                  modern technologies such as HTML5, CSS3, JavaScript, the
                  React.js library, and the Next.js framework. I’m proficient in
                  using Tailwind CSS and UI libraries like ShadCN and Hero UI,
                  along with applying core UI/UX principles for design and
                  implementation.
                </p>
                <p className="mt-2">
                  My backend experience includes working with SQL databases
                  (MySQL and PostgreSQL), NoSQL databases (MongoDB), and Python.
                  I've also worked with Supabase as a cloud-based backend and am
                  currently learning the Django web framework and APIs.
                </p>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>

      <div
        className="flex flex-col
       justify-center items-center gap-2 "
      >
        <h3 className="text-xl mb-4 mt-4">Officially Certified by</h3>

        <div className="grid grid-cols-4   sm:grid-cols-4 md:grid-cols-7 items-center justify-center gap-3 overflow-hidden w-f">
          {/* Google Card  */}
          <a
            title="Visit Google Career Certificates"
            href="https://grow.google/certificates/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center border-2 border-solid border-gray-400 rounded-lg w-[80%] h-[10vh] p-1 ">
              <Image
                src="/google-logo.svg"
                alt="Google Logo"
                width={45}
                height={30}
                className="object-contain"
              />
            </div>
          </a>

          {/* EC Council Card */}
          <a
            href="https://www.eccouncil.org/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit EC-Council Official Website"
          >
            <div className="flex items-center justify-center border-2 border-solid border-gray-400 rounded-lg w-[80%] h-[10vh] p-1 ">
              <Image
                src="/ec-council-colored.svg"
                alt="EC-Council Logo"
                width={40}
                height={40}
                className="w-20 h-20 object-contain"
              />
            </div>
          </a>

          {/* Meta Card  */}
          <a
            href="https://about.meta.com/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Meta Certifications Website"
          >
            <div className="flex items-center justify-center border-2 border-solid border-gray-400 rounded-lg w-[80%] h-[10vh] p-1">
              <Image
                src="/meta-logo.svg"
                alt="Meta Company Logo"
                width={40}
                height={40}
                className="w-20 h-20 object-contain"
              />
            </div>
          </a>

          {/* Coursera Card  */}
          <a
            href="https://www.coursera.org/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Coursera Website"
          >
            <div className="flex items-center justify-center border-2 border-solid border-gray-400 rounded-lg w-[80%] h-[10vh] p-1">
              <Image
                src="/coursera-logo.svg"
                alt="Coursera Logo"
                width={40}
                height={40}
                className="w-20 h-20 object-contain"
              />
            </div>
          </a>

          {/* PMYP Card  */}
          <a
            href="https://pmyp.gov.pk/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Prime Minister’s Youth Program Website"
          >
            <div className="flex items-center justify-center border-2 border-solid border-gray-400 rounded-lg w-[80%] h-[10vh] p-1">
              <Image
                src="/pm-youth.png"
                alt="Prime Minister's Youth Program Image"
                width={100}
                height={55}
                //   className="w-24 h-24 object-contain"
              />
            </div>
          </a>

          {/* DigiSkills Card  */}
          <a
            href="https://digiskills.pk/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit DigiSkills Website"
          >
            <div className="flex items-center justify-center border-2 border-solid border-gray-400 rounded-lg w-[80%] h-[10vh] p-1">
              <Image
                src="/digiskills.png"
                alt="DigiSkills LMS logo"
                width={100}
                height={55}
                //   className="w-24 h-24 object-contain"
              />
            </div>
          </a>

          {/* Sololearn Card  */}
          <a
            href="https://www.sololearn.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit SoloLearn Website"
          >
            <div className="flex items-center justify-center border-2 border-solid border-gray-400 rounded-lg w-[80%] h-[10vh] p-1">
              <Image
                src="/Sololearn.svg"
                alt="Sololearn Learning platform logo"
                width={100}
                height={55}
                //   className="w-24 h-24 object-contain"
              />
            </div>
          </a>
          
        </div>
        <a 
        title="View Certificates"
        href="#certificates">
        <h3 className="text-sm mb-2 mt-2">Click to view certificates <Eye className="h-4 w-4 inline text-red-600"/></h3>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
