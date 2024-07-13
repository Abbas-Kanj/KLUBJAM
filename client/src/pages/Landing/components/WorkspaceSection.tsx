import line from "../../../../public/images/Line.png";
import sec1Img1 from "../../../../public/images/Rectangle 7.png";
import sec1Img2 from "../../../../public/images/Rectangle 8.png";
import sec1Img3 from "../../../../public/images/Rectangle 9.png";

const WorkspaceSection = () => {
  return (
    <section className="flex justify-center w-full relative">
      <div className="mt-[202px] flex flex-col text-center relative z-10">
        <h1 id="workspace" className="font-black text-[45px] ">
          Produce & Collab Together
        </h1>
        <img src={line} className="mb-[19px] mt-[9px] shadow-drop" alt="" />
        <p className="text-[20px]  font-semibold">
          Have the ability to create and collaborate on
          <br /> music projects, whether it's a single or
          <br /> multiple musicians on one project.
        </p>
      </div>
      <div className="flex mt-[327px] mr-[100px] w-[680px] h-[600px] relative z-1">
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
