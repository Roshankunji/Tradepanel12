import Nav from "../Nav/Nav";

const HomepageLayout = ({ children }) => {
  return (
    <>
      <div>
        <Nav />

        <div className="min-h-[89vh] max-h-fit w-full bg-backgroundColor px-10 font-sora">
          {children}
        </div>
      </div>
    </>
  );
};

export default HomepageLayout;
