import sec1Img1 from "/images/Rectangle 7.png";
import sec1Img2 from "/images/Rectangle 8.png";
import sec1Img3 from "/images/Rectangle 9.png";

const WorkspaceSection = () => {
  return (
    <section className="flex justify-center w-full relative">
      <div className="mt-52 flex flex-col text-center relative z-10 ml-10">
        <h1 id="workspace" className="font-black text-5xl text-nowrap px-6">
          Produce & Collab Together
        </h1>
        <div className="mb-5 mt-4 rounded-full h-1 shadow-drop w-full bg-primary"></div>
        <p className="text-2xl font-semibold">
          Have the ability to create and collaborate on
          <br /> music projects, whether it's a single or
          <br /> multiple musicians on one project.
        </p>
      </div>
      <div className="flex mt-80 mr-24 w-[680px] h-[600px] relative z-1">
        <img src={sec1Img2} alt="" className="absolute top-5 left-[20%] z-30" />
        <img src={sec1Img1} alt="" className="absolute bottom-0 left-0 z-40" />
        <img
          src={sec1Img3}
          alt=""
          className="absolute top-[30%] bottom-0 right-0 z-20"
        />
      </div>
    </section>
  );
};

export default WorkspaceSection;
