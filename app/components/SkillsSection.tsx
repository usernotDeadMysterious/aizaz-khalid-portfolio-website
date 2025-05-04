import React from "react";
import { Disclosure } from "@headlessui/react";
import { ArrowDown, ArrowUp, ChevronDown, Link } from "lucide-react";
function SkillsSection() {
  return (
    <div
    id="skills"
     className="p-8 pt-0 space-y-3 w-full">
      <h2 
      className="text-2xl font-bold ">Skills & Expertise</h2>

      <div className="grid grid-cols-1 gap-2">
        {/* Cybersecurity Section */}
        <div>
          <Disclosure>
            {({ open }) => (
              <div className="w-full rounded-lg border-s-1 p-3 shadow-md">
                <Disclosure.Button className="flex w-full justify-between items-center text-left  font-semibold text-md">
                  <span>Cybersecurity</span>
                  {/* show this span if disclosure is not opened  */}
                  {open ? (
                    <span className="text-xs text-red-600">
                      Click to close <ArrowUp className="h-4 w-4 inline" />
                    </span>
                  ) : (
                    <span className="text-xs text-red-600">
                      Click to open <ArrowDown className="h-4 w-4 inline" />
                    </span>
                  )}

                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel
                  static
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="list-disc pl-5  space-y-1">
                    <li>Penetration Testing & Vulnerability Assessment</li>
                    <li>Network Security & Firewalls</li>
                    <li>IDS/IPS Tools (Snort, Suricata)</li>
                    <li>SIEM Platforms (e.g., Splunk, Chronicle SIEM)</li>
                    <li>Threat Modeling & Asset Classification</li>
                    <li>Linux, SQL (log analysis), Python (automation)</li>
                  </ul>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>

        {/* Web Development Section */}
        <div>
          <Disclosure>
            {({ open }) => (
              <div className="w-full rounded-lg border-s-1 p-3 shadow-md">
                <Disclosure.Button className="flex w-full justify-between items-center text-left font-semibold text-md">
                  <span>Frontend</span>
                  {open ? (
                    <span className="text-xs text-red-600">
                      Click to close <ArrowUp className="h-4 w-4 inline" />
                    </span>
                  ) : (
                    <span className="text-xs text-red-600">
                      Click to open <ArrowDown className="h-4 w-4 inline" />
                    </span>
                  )}

                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel
                  static
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="list-disc pl-5  space-y-1">
                    <li>HTML5, CSS3, JavaScript (ES6+)</li>
                    <li>React.js & Next.js (SSR/SSG)</li>
                    <li>Tailwind CSS, ShadCN, Hero UI</li>
                    <li>UI/UX Principles & Responsive Design</li>
                  </ul>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>

        {/* Backend & Databases Section */}
        <div>
          <Disclosure>
            {({ open }) => (
              <div className="w-full rounded-lg  border-s-1 p-3 shadow-md">
                <Disclosure.Button className="flex w-full justify-between items-center text-left  font-semibold text-md">
                  <span>Backend & Databases</span>
                  {open ? (
                    <span className="text-xs text-red-600 justify-self-center">
                      Click to close <ArrowUp className="h-4 w-4 inline" />
                    </span>
                  ) : (
                    <span className="text-xs text-red-600 justify-self-center">
                      Click to open <ArrowDown className="h-4 w-4 inline" />
                    </span>
                  )}

                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel
                  static
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="list-disc pl-5  space-y-1">
                    <li>SQL: MySQL & PostgreSQL</li>
                    <li>NoSQL: MongoDB</li>
                    <li>Python (scripting & backend logic)</li>
                    <li>Supabase (cloud backend)</li>
                    <li>Currently learning Django & APIs</li>
                  </ul>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>

        {/* Soft skills  */}
        <div>
          <Disclosure>
            {({ open }) => (
              <div className="w-full rounded-lg border-s-1 p-3 shadow-md">
                <Disclosure.Button className="flex w-full justify-between items-center text-left font-semibold text-md">
                  <span>Soft Skills</span>
                  {open ? (
                    <span className="text-xs text-red-600 ">
                      Click to close <ArrowUp className="h-4 w-4 inline" />
                    </span>
                  ) : (
                    <span className="text-xs text-red-600 ">
                      Click to open <ArrowDown className="h-4 w-4 inline" />
                    </span>
                  )}

                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel
                  static
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Attention to details</li>
                    <li>Quick learner</li>
                    <li>Excellent written and verbal communication</li>
                    <li>Collaborative team player with leadership potential</li>
                    <li>Adaptable to dynamic environments</li>
                    <li>Problem-solving and critical thinking</li>
                    <li>Time management and multitasking abilities</li>
                  </ul>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
