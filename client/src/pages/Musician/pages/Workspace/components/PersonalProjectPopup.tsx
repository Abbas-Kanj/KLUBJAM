interface ProjectProps {
  setOpenPersonalProjectPopup: (open: boolean) => void;
  project: any;
}

const PersonalProjectPopup: React.FC<ProjectProps> = ({
  setOpenPersonalProjectPopup,
  project,
}) => {
  return <div></div>;
};

export default PersonalProjectPopup;
