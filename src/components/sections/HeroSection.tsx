import React from "react";

export default function HeroSection() {
  return (
    <>
      <div
        id="DESKTOP"
        className="hero hidden min-h-screen flex-row justify-start text-left text-neutral-content lg:flex"
        style={{
          backgroundImage: "url(/images/landing/HeroBack.jpg)",
          width: "100%",
        }}
      >
        <div className="hero-content ml-64 pr-[430px]">
          <div className="container max-w-md text-white">
            <p className="p-2 text-2xl">Sexual Content Blocker</p>
            <div className="container " style={{ fontFamily: "Futura" }}>
              <h1 className="text-9xl font-medium ">Zeboot</h1>
            </div>
            <div className="mb-8 px-2 text-lg font-medium">
              <p>
                Tired of stumbling upon explicit and inappropriate content
                online? Look no further! SafeGuard is your go-to solution for
                filtering out explicit content and ensuring a safer online
                experience.
              </p>
              <button className="btn btn-accent text-white my-5">
                <a href="https://textcheckai.page.link/toapp">Get Clean Life</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero mb-6 min-h-screen sm:hidden"
        style={{
          backgroundImage: "url(/images/backSmart.webp)",
          width: "100%",
        }}
      >
        <div
          id="SMARTPHONE"
          className="flex flex-row hero-content justify-start text-left text-neutral-content"
        >
          <div className="container w-md pb-56 px-5">
            <div style={{ fontFamily: "Futura" }}>
              <p className="py-2">Sexual Content Blocker</p>
              <h1 className="text-5xl font-bold text-white">Zeboot</h1>
            </div>
            <div className="mb-8 text-sm font-medium">
              <p>
                Tired of stumbling upon explicit and inappropriate content
                online?
                <br />
                Look no further! SafeGuard is your go-to solution for filtering
                out explicit content and ensuring a safer online experience.
              </p>

              <button className="btn-outline btn my-5">ダウンロード</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
