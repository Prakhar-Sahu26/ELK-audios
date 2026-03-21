export default function AgencyBlock() {
  return (
    <section className="w-full text-white">

      {/* DESKTOP LAYOUT */}
      <div className="
        hidden md:flex
        min-h-[50vh]
        items-center justify-center
        px-[8vw]
      ">
        <div className="max-w-[800px] text-center pt-40">
          <h2 className="text-[4rem] font-bold leading-[1] mb-6">
            Agency
          </h2>

          <p className="text-white/80 text-lg leading-8">
            <strong className="text-white">OAKS GROUP SA</strong> is a Swiss real estate investment
            company specializing in <strong className="text-white">real estate development</strong> in{" "}
            <strong className="text-white">Geneva</strong> and the{" "}
            <strong className="text-white">canton of Vaud</strong>. We excel in acquiring
            properties for development, project management, and brokerage.
          </p>

          <p className="mt-6 text-white/80 text-lg leading-8">
            As a committed <strong className="text-white">real estate developer</strong>, our mission
            is to lead eco-responsible and sustainable projects, integrating innovation
            to meet the needs of the market and our clients.
          </p>

          <a className="mt-8 inline-block font-semibold hover:underline">
            → Learn more
          </a>
        </div>
      </div>


      {/* MOBILE / TABLET LAYOUT */}
      <div className="
        md:hidden
        flex flex-col items-center text-center
        px-[6vw] pt-[6rem] pb-[4rem]
      ">

        <h2 className="text-[clamp(2.5rem,8vw,3rem)] font-bold leading-tight">
          Agency
        </h2>

        <div className="mt-5 max-w-[90%]">

          <p className="text-white/80 text-base leading-7">
            <strong className="text-white">OAKS GROUP SA</strong> is a Swiss real estate investment
            company specializing in <strong className="text-white">real estate development</strong> in{" "}
            <strong className="text-white">Geneva</strong> and the{" "}
            <strong className="text-white">canton of Vaud</strong>. We excel in acquiring
            properties for development, project management, and brokerage.
          </p>

          <p className="mt-5 text-white/80 text-base leading-7">
            As a committed <strong className="text-white">real estate developer</strong>, our mission
            is to lead eco-responsible and sustainable projects, integrating innovation
            to meet the needs of the market and our clients.
          </p>

        </div>

        <a className="mt-6 font-semibold hover:underline">
          → Learn more
        </a>
      </div>

    </section>
  );
}