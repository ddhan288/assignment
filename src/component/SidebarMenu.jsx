import React from "react";

function SidebarMenu() {
  const handleClick = () => {
    // handle button click event
  };

  return (
    <div className="flex flex-col justify-center py-11 text-base leading-6 whitespace-nowrap max-w-[242px] text-stone-500">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2f17f517018405441cc5882e702366640cc793e56acfa0fec2b9579f2744ca1?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
        className="self-center max-w-full aspect-[4] w-[142px]"
      />
      <div className="self-end mt-16 text-xs font-medium">MAIN MENU</div>
      <div className="flex gap-5 justify-between px-8 py-4 mt-2.5 font-medium text-red-500">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc361d613f18df413490ec0a72a39c25270abdfeea6383ef0bc14cd084a31343?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
          className="w-6 aspect-square"
        />
        <div className="flex-auto">Dashboard</div>
      </div>
      <div className="flex gap-5 justify-between px-8 py-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6240c7b0b2dd0ebd17f63e7984efc9450a83fb6678243ad5a3064cee9ac7f1de?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
          className="w-6 aspect-square"
        />
        <div className="flex-auto">Recruitment</div>
      </div>
      <div className="flex gap-5 justify-between px-8 py-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3e42c172916632d67f77e628a5ca01cbf5985512e1e4f9a0552a9ec60d02508?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
          className="w-6 aspect-square"
        />
        <div className="flex-auto">Schedule</div>
      </div>
      <div className="flex gap-5 justify-between px-8 py-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c03d35f443755da27d479b0e2d3b23da38350131dc645d6abab86c4a7f476f8?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
          className="my-auto w-5 aspect-square"
        />
        <div className="flex-auto">Employee</div>
      </div>
      <div className="flex gap-5 justify-between px-8 py-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f1e44970631f0eb39fe723c37116fa01d03f31b2bf8e3475c2acb81d12c2fc2?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
          className="w-6 aspect-square"
        />
        <div className="flex-auto">Department</div>
      </div>
      <div className="self-end mt-12 text-xs font-medium">OTHER</div>
      <div className="flex gap-5 justify-between px-8 py-4 mt-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/adae3fc8d6030b0a9fc33a95bfdc19a9f194cfdc50fcea06e8abfa38ec7e6e90?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
          className="w-6 aspect-square"
          onClick={handleClick}
        />
        <div className="flex-auto">Support</div>
      </div>
      <div className="flex gap-5 justify-between px-8 py-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/138657777fd73fabd5cf881083ac19597a12ec27ffd338e27a45b8ebc33502b8?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
          className="w-6 aspect-square"
          onClick={handleClick}
        />
        <div className="flex-auto">Settings</div>
      </div>
    </div>
  );
}
export default SidebarMenu