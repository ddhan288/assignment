import React from 'react';

function ActivityComponent() {
  return (
    <div className="flex flex-col pb-7 text-white rounded-xl bg-gradient-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#161E54] max-w-[427px]">
      <header className="justify-center py-2.5 pr-2.5 pl-6 text-lg font-medium leading-7 whitespace-nowrap rounded-xl bg-indigo-950">
        Recently Activity
      </header>
      <div className="flex flex-col items-start px-7 mt-7 w-full text-sm">
        <div className="text-xs font-medium whitespace-nowrap">
          10.40 AM, Fri 10 Sept 2021
        </div>
        <div className="mt-1.5 text-lg font-medium leading-7 whitespace-nowrap">
          You Posted a New Job
        </div>
        <div className="mt-1.5 leading-5">
          Kindly check the requirements and terms of work and make sure everything is right.
        </div>
        <div className="flex gap-5 justify-between self-stretch mt-7 whitespace-nowrap">
          <div className="grow my-auto">Today you make 12 Activity</div>
          <button className="grow justify-center px-4 py-2.5 font-medium text-center bg-red-500 rounded">
            See All Activity
          </button>
        </div>
      </div>
    </div>
  );
}

// jsx
// export default function MyComponent(props) {
//   return (
//     <div class="flex flex-col pb-7 text-white rounded-xl bg-[color:var(--Tertiary-Color,linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#161E54)] max-w-[427px]">
//       <div class="flex flex-col justify-center py-2.5 pr-2.5 pl-6 text-lg not-italic font-medium leading-7 whitespace-nowrap rounded-xl bg-indigo-950">
//         Recently Activity
//       </div>
//       <div class="flex flex-col items-start px-7 mt-7 w-full text-sm leading-[normal]">
//         <div class="text-xs not-italic font-medium whitespace-nowrap">
//           10.40 AM, Fri 10 Sept 2021
//         </div>
//         <div class="mt-1.5 text-lg not-italic font-medium leading-7 whitespace-nowrap">
//           You Posted a New Job
//         </div>
//         <div class="mt-1.5 not-italic leading-5">
//           Kindly check the requirements and terms of work and make sure
//           everything is right.
//         </div>
//         <div class="flex gap-5 justify-between self-stretch mt-7 whitespace-nowrap">
//           <div class="grow my-auto not-italic">Today you makes 12 Activity</div>
//           <div class="flex flex-col grow justify-center px-4 py-2.5 not-italic font-medium text-center rounded bg-[color:var(--Main-Color,#FF5151)]">
//             See All Activity
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
