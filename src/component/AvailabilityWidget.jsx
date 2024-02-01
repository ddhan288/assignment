// import React from "react";

// function AvailabilityWidget() {
//   const handleButtonClick = () => {
//     // handle button click event here
//   };

//   return (
//     <div className="flex flex-col justify-center self-start px-5 py-3 mt-20 ml-12 font-medium bg-orange-50 rounded-xl text-blue-950 max-md:mt-10 max-md:ml-2.5">
//       <header className="text-lg leading-7">Available Position</header>
//       <button className="mt-4 text-4xl leading-7" onClick={handleButtonClick}>
//         24
//       </button>
//       <button className="mt-4 text-base leading-6 text-red-500" onClick={handleButtonClick}>
//         4 Urgently needed
//       </button>
//     </div>
//   );
// }

// export default AvailabilityWidget;

export default function AvailabilityWidget(props) {
  return (
    <div class="flex flex-col grow justify-center px-5 py-3 w-full font-medium whitespace-nowrap bg-orange-50 rounded-xl text-[color:var(--Tertiary-Color,#161E54)] max-md:mt-3.5">
      <div class="text-lg not-italic leading-7">Available Position</div>
      <div class="mt-4 text-4xl not-italic leading-7">24</div>
      <div class="mt-4 text-base not-italic leading-6 text-[color:var(--Main-Color,#FF5151)]">
        4 Urgently needed
      </div>
    </div>
  );
}