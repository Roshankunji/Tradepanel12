import Nav from "../Nav/Nav";

const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <div
        className={` min-h-[89vh] max-h-fit w-full bg-bg_color_1 px:4 md:px-[2rem] xl:px-20`}
      >
        <main
          className={`w-full m-auto p-4 pb-0 md:p-[2rem] md:pb-0 md:px-0 container mx-auto`}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
