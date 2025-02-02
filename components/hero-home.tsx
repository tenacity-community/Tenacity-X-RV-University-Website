import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Tenacity X RV University
              <br />
              Hackathon
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Get ready to hack, innovate, and collaborate on 6th January from
                10:00 AM to 6:30 PM at <br />C Block Homi J Bhabha Seminar Hall (3rd
                Floor)!
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                    <a
                    className="btn luma-checkout--button group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto !rounded-md"
                    data-luma-action="checkout"
                    data-luma-event-id="evt-zRwQJc8H77j28sX"
                    href="https://lu.ma/event/evt-zRwQJc8H77j28sX"
                    >
                    <span className="relative inline-flex items-center">
                      Register Now{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                      </span>
                    </span>
                    </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow rounded-full hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="/agenda"
                  >
                    View Agenda
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  Tenacity X RVU Hackathon
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  $ npm install -g hackathon-cli
                </span>{" "}
                <br />
                <span className="animate-[code-2_10s_infinite]">
                  Hackathon CLI installed successfully! <br />
                  Run `hackathon --help` to get started.
                </span>
                <br />
                <br />
                <span className="animate-[code-3_10s_infinite] text-gray-200">
                  $ hackathon init
                </span>
                <br />
                <span className="animate-[code-4_10s_infinite]">
                  🔧Setting up your hackathon environment... <br />
                  ✔ Team registered <br />
                  ✔ GitHub repository created <br />
                  ✔ Wi-Fi credentials fetched 🎉 <br />
                  You're all set! Happy hacking! <br />
                </span>
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  $ hackathon --help "Why is my code not working?" <br />
                </span>
                <span className="animate-[code-6_10s_infinite]">
                  AI Debugger says: "Did you try turning it off and on again?😉"{" "}
                  <br />
                  Pro Tip: Check your semicolons, brackets, and logic errors
                  first!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
