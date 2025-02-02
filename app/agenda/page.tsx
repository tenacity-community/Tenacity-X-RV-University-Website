"use client";

import { useEffect, useState, useRef } from "react";

const schedule = [
  {
    time: "10:00 AM - 10:30 AM",
    event: "Registration & Check-In",
    description: [
      "Participants arrive at the venue and check in at the registration desk.",
      "Teams confirm their presence and collect ID cards, which must be worn throughout the event.",
      "Organizers verify registrations and ensure teams are complete.",
      "Participants are directed to their seating areas.",
    ],
  },
  {
    time: "10:30 AM - 10:45 AM",
    event: "Welcome Address & Event Introduction",
    description: [
      "Opening speech by faculty coordinators and organizers.",
      "Event overview: Explanation of hackathon rules, judging criteria, and the problem statement format.",
      "Q&A session: Participants can ask last-minute questions regarding logistics, submission process, or judging.",
    ],
  },
  {
    time: "10:45 AM - 01:00 PM",
    event: "Hacking Phase (Round 1)",
    description: [
      "The problem statements are revealed, and teams start brainstorming and formulating their approach.",
      "Mentors and organizers walk around to assist teams with technical doubts and guidance.",
      "Teams begin building prototypes and implementing initial versions of their projects.",
      "Regular reminders and progress check-ins by organizers to ensure smooth progress.",
    ],
  },
  {
    time: "01:00 PM - 02:00 PM",
    event: "Lunch Break and Networking Session",
    description: [
      "Participants take a break and grab lunch.",
      "Opportunity to interact with other teams, judges, and mentors.",
      "A casual networking session may be organized, encouraging participants to share their ideas.",
    ],
  },
  {
    time: "02:00 PM - 04:00 PM",
    event: "Final Hacking Session (Round 2)",
    description: [
      "Teams resume development, refine their features, and finalize their implementations.",
      "Teams work on the UI/UX of their projects, focusing on presentation and user experience.",
      "Participants start documenting their projects (README files, GitHub descriptions, etc.).",
      "Organizers circulate to remind teams about submission deadlines.",
      "Teams prepare for their demos, ensuring their projects run smoothly for presentations.",
    ],
  },
  {
    time: "04:00 PM - 04:30 PM",
    event: "Shortlisting of Teams for Final Round",
    description: [
      "Teams submit their projects via the provided submission link.",
      "Judges conduct an initial screening of all submissions based on the judging criteria:",
      "Innovation & Creativity",
      "Impact & Problem-Solving Approach",
      "Functionality & Technical Implementation",
      "Design (UI/UX)",
      "Overall Presentation & Documentation.",
      "Top 10 teams are selected to move forward to the demo round.",
      "Announcements are made, and selected teams are given 10 minutes to set up for their presentation.",
    ],
  },
  {
    time: "04:30 PM - 06:00 PM",
    event: "Team Demos & Presentations",
    description: [
      "Each of the 10 shortlisted teams presents their project for 10 minutes:",
      "5 minutes for live demo of their project.",
      "3 minutes to explain their problem statement, solution, and implementation.",
      "2 minutes for Q&A with judges.",
      "Judges evaluate teams based on presentation clarity, innovation, feasibility, and technical depth.",
      "Live feedback is given to teams to highlight strengths and potential improvements.",
    ],
  },
  {
    time: "06:00 PM - 06:30 PM",
    event: "Judges' Deliberation & Award Ceremony",
    description: [
      "Judges deliberate on the final rankings of the projects.",
      "Announcement of top three winning teams and distribution of awards:",
      "Closing remarks from faculty and organizers.",
      "Group photo session and farewell note.",
    ],
  },
];

export default function SchedulePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle scroll event to update the active index
  useEffect(() => {
    const handleScroll = () => {
      const eventElements = document.querySelectorAll(".event-item");
      eventElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate the height of the highlighted line
  const calculateHighlightedLineHeight = () => {
    if (!containerRef.current) return "0%";

    const container = containerRef.current;
    const eventElements = container.querySelectorAll(".event-item");
    if (eventElements.length === 0) return "0%";

    const containerTop = container.getBoundingClientRect().top;
    const activeElement = eventElements[activeIndex];
    const activeElementRect = activeElement.getBoundingClientRect();

    let lineHeight;
    if (activeIndex === schedule.length - 1) {
      // For the last item, extend to the bottom of the element
      lineHeight = activeElementRect.bottom - containerTop;
    } else {
      // For all other items, extend to the middle
      lineHeight =
        activeElementRect.top + activeElementRect.height / 2 - containerTop;
    }

    return `${lineHeight}px`;
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="min-h-screenpy-12 px-4 sm:px-6 lg:px-8">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            <div className="max-w-3xl mx-auto relative" ref={containerRef}>
              
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300">
                {/* Highlighted Line */}
                <div
                  className="absolute left-0 w-0.5 bg-blue-500 shadow-[0_0_10px_rgba(0,90,241,4.0)] transition-all duration-500"
                  style={{
                    height: calculateHighlightedLineHeight(),
                  }}
                ></div>
              </div>

              {/* Schedule Items */}
              <div className="space-y-6 pl-12">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className={`event-item relative bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-md hover:shadow-lg transition duration-300 ${
                      index === activeIndex
                        ? "ring-2 shadow-[0_0_10px_rgba(0,90,241,2.0)]"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <h2 className="text-md sm:text-xl md:text-2xl font-semibold text-gray-800">
                        {item.event}
                      </h2>
                      <span className="text-xs px-2 text-white bg-black p-1.5 rounded-3xl mt-2 sm:mt-0">
                        {item.time}
                      </span>
                    </div>
                    <ul className="mt-2 list-disc text-sm list-inside text-gray-600">
                      {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
