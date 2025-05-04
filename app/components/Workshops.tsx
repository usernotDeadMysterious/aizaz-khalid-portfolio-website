import React from "react";

const workshops = [
  {
    title: "Cybersecurity Training Workshop",
    date: "October 2024",
    location: "IM Sciences Peshawar",
    description: "Hands-on training in ethical hacking, network defense and digital forensics.",
    tags: ["Cybersecurity", "Ethical Hacking", "Forensics"],
  },
  {
    title: "Cybersecurity Training workshops - Advance Session",
    date: "October 2024",
    location: "COMSATS - Islamabad",
    description: "Focused on SIEM, SOAR, Machine Learning and Mobile Penetration Testing .",
    tags: ["SIEM", "SOAR", "Frida", "Machine Learning"],
  },
  // Add more workshops here
];

function Workshops() {
  return (
    <div className="px-2 py-6 md:px-4 max-w-6xl mx-auto">
      
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {workshops.map((workshop, index) => (
          <div
            key={index}
            className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-md rounded-xl p-5 space-y-3 border border-zinc-200 dark:border-zinc-800"
          >
            <h3 className="text-xl font-semibold">{workshop.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{workshop.date} — {workshop.location}</p>
            <p className="text-zinc-700 dark:text-zinc-300">{workshop.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {workshop.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workshops;
