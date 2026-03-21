export default function LayoutSection() {
  return (
    <section className="flex h-[150vh] w-full">
      <div className="w-[40%] flex flex-col">
        <div className="h-[50vh] bg-[#486239]" />
        <div className="flex-1 bg-[#c1bca4] relative">
          <div className="absolute right-0 top-0 w-[45%] h-1/2 bg-[#f6b51f]" />
        </div>
      </div>

      <div className="flex-1 bg-[#7a97af]" />
    </section>
  );
}