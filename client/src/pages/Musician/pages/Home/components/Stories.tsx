import { useAppSelector } from "../../../../../app/hooks";

const Stories = () => {
  const users = useAppSelector((state) => state.users.user);
  return (
    <div className=" ">
      <div className="flex  mt-[26px] ml-[260px] gap-[24px]">
        {users?.map((user, i) => (
          <div key={i} className="flex items-center flex-col gap-[12px]">
            <img
              src={user.profile_picture}
              alt=""
              className="cursor-pointer w-[44px] h-[44px] rounded-full"
            />
            <h2 className="font-semibold text-[10px]">{user.username}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
