import * as React from "react";

function EmployeeStats() {
  const handleClick = () => {
    console.log("Button clicked");
    // Add your logic here
  };

  return (
    <div className="flex grow gap-5 justify-between p-5 w-full text-xs bg-white rounded-xl border border-solid border-neutral-200 max-md:mt-4">
      <header className="flex flex-col flex-1 font-medium leading-[150%] text-blue-950">
        <h2 className="text-lg leading-7">Total Employees</h2>
        <div className="mt-6 text-5xl leading-7 max-md:text-4xl">216</div>
        <div className="mt-8 text-stone-500">120 Men</div>
        <div className="mt-1 text-stone-500">96 Women</div>
      </header>
      <div className="flex flex-col flex-1 my-auto leading-6 whitespace-nowrap text-zinc-800">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/36a7339d06e350bb8c10b4d7a5b7e1d07fc231240a4c4ada7f7837859005510b?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
          alt="Employee statistics"
          className="self-center aspect-[1.47] w-[115px]"
        />
        <div className="justify-center px-2.5 mt-5 bg-orange-50 rounded">
          +2% Past month
        </div>
      </div>
      <button onClick={handleClick} className="button-class">
        Click Me
      </button>
    </div>
  );
}

export default EmployeeStats;




// jsx
// import { Image } from "@components";

// export default function MyComponent(props) {
//   return (
//     <div class="flex grow gap-5 justify-between p-5 w-full text-xs bg-white rounded-xl border border-solid border-neutral-200 max-md:mt-4">
//       <div class="flex flex-col flex-1 font-medium leading-[150%] text-[color:var(--Tertiary-Color,#161E54)]">
//         <div class="text-lg not-italic leading-7">Total Employees</div>
//         <div class="mt-6 text-5xl not-italic leading-7 max-md:text-4xl">
//           216
//         </div>
//         <div class="mt-8 not-italic text-[color:var(--Primary-Subtitle-Color,#686868)]">
//           120 Men
//         </div>
//         <div class="mt-1 not-italic text-[color:var(--Primary-Subtitle-Color,#686868)]">
//           96 Women
//         </div>
//       </div>
//       <div class="flex flex-col flex-1 my-auto leading-6 whitespace-nowrap text-[color:var(--Secondary-Title-Color,#303030)]">
//         <Image
//           image="https://cdn.builder.io/api/v1/image/assets/TEMP/36a7339d06e350bb8c10b4d7a5b7e1d07fc231240a4c4ada7f7837859005510b?placeholderIfAbsent=true"
//           backgroundSize="auto"
//           class="relative self-center w-[115px]"
//           aspectRatio={0.68}
//           noWebp={true}
//         />
//         <div class="flex flex-col justify-center px-2.5 mt-5 not-italic bg-orange-50 rounded">
//           +2% Past month
//         </div>
//       </div>
//     </div>
//   );
// }
