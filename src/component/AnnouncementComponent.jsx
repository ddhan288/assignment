import React from "react";

function AnnouncementComponent() {
  return (
    <div className="flex flex-col pt-4 mt-5 bg-white rounded-xl border border-solid border-neutral-200 max-md:max-w-full">
      <header className="header flex gap-5 justify-between self-center whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <h1 className="grow text-lg font-medium leading-7 text-blue-950 max-md:max-w-full">
          Announcement
        </h1>
        <div className="flex gap-2 justify-between self-start px-2 py-1 text-xs leading-7 bg-white rounded border border-solid border-zinc-100 text-stone-500">
          <div className="grow">Today, 13 Sep 2021</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/88ac3c2f85e9b6233e6f344c4fe9944fb3a3d1decd0c014e9b8ee4694eeb4dc3?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
            className="my-auto aspect-square w-[18px]"
          />
        </div>
      </header>
      <div className="flex gap-5 justify-between px-4 py-3 mx-5 mt-4 max-w-full rounded-md border-solid bg-neutral-50 border-[0.5px] border-neutral-200 w-[600px] max-md:flex-wrap max-md:mr-2.5">
        <div className="flex flex-col flex-1 whitespace-nowrap">
          <h2 className="text-base leading-6 text-zinc-800">Outing schedule for every departement</h2>
          <div className="mt-1.5 text-xs leading-4 text-stone-500">5 Minutes ago</div>
        </div>
        <div className="flex gap-5 my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c11da1d3b5154210c03653d6c1fd601782730e3ff1fb9b22d1be71ffd3d57526?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
            className="w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1f5fc02b09f83f4fc5bbad40e585efa4c343b2cfabfab09525e2df94d648f07?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
            className="w-6 aspect-square"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between px-4 py-3 mx-5 mt-2 max-w-full rounded-md border-solid bg-neutral-50 border-[0.5px] border-neutral-200 w-[600px] max-md:flex-wrap max-md:mr-2.5">
        <div className="flex flex-col flex-1 whitespace-nowrap">
          <h2 className="text-base leading-6 text-zinc-800">Meeting HR Department</h2>
          <div className="mt-1.5 text-xs leading-4 text-stone-500">Yesterday, 12:30 PM</div>
        </div>
        <div className="flex gap-5 my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1c8f762eb88edf4a7b1fa95f85b8b68424974f3b291cf3b6a9189523c6b6a08?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
            className="w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1f5fc02b09f83f4fc5bbad40e585efa4c343b2cfabfab09525e2df94d648f07?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
            className="w-6 aspect-square"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between px-4 py-3 mx-5 mt-2 max-w-full rounded-md border-solid bg-neutral-50 border-[0.5px] border-neutral-200 w-[600px] max-md:flex-wrap max-md:mr-2.5">
        <div className="flex flex-col flex-1">
          <h2 className="text-base leading-6 text-zinc-800">
            IT Department need two more talents for UX/UI Designer position
          </h2>
          <div className="mt-1.5 text-xs leading-4 whitespace-nowrap text-stone-500">
            Yesterday, 09:15 AM
          </div>
        </div>
        <div className="flex gap-5 my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1c8f762eb88edf4a7b1fa95f85b8b68424974f3b291cf3b6a9189523c6b6a08?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
            className="w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1f5fc02b09f83f4fc5bbad40e585efa4c343b2cfabfab09525e2df94d648f07?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
            className="w-6 aspect-square"
          />
        </div>
      </div>
      <div className="justify-center p-2.5 text-sm font-medium leading-5 text-center text-red-500 bg-white rounded-none border border-solid border-neutral-200 max-md:max-w-full">
        <a href="#" aria-label="See All Announcement">
          See All Announcement
        </a>
      </div>
    </div>
  );
}

export default AnnouncementComponent;




// jsx
// import { Image } from "@components";

// export default function MyComponent(props) {
//   return (
//     <div class="flex flex-col pt-4 mt-5 rounded-xl border border-solid bg-[color:var(--Just-White,#FFF)] border-neutral-200 max-md:max-w-full">
//       <div class="flex gap-5 justify-between self-center whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
//         <div class="grow text-lg not-italic font-medium leading-7 text-[color:var(--Tertiary-Color,#161E54)] max-md:max-w-full">
//           Announcement
//         </div>
//         <div class="flex gap-2 justify-between self-start px-2 py-1 text-xs leading-7 bg-white rounded border border-solid border-zinc-100 text-[color:var(--Secondary-Subtitle-Color,#686868)]">
//           <div class="grow not-italic">Today, 13 Sep 2021</div>
//           <Image
//             image="https://cdn.builder.io/api/v1/image/assets/TEMP/88ac3c2f85e9b6233e6f344c4fe9944fb3a3d1decd0c014e9b8ee4694eeb4dc3?placeholderIfAbsent=true"
//             backgroundSize="auto"
//             class="relative my-auto w-[18px]"
//             aspectRatio={1}
//             noWebp={true}
//           />
//         </div>
//       </div>
//       <div class="flex gap-5 justify-between px-4 py-3 mx-5 mt-4 max-w-full rounded-md border-solid bg-[color:var(--Background-Color,#FAFAFA)] border-[0.5px] border-neutral-200 w-[600px] max-md:flex-wrap max-md:mr-2.5 max-md:ml-0">
//         <div class="flex flex-col flex-1 whitespace-nowrap">
//           <div class="text-base not-italic leading-6 text-[color:var(--Secondary-Title-Color,#303030)]">
//             Outing schedule for every departement
//           </div>
//           <div class="mt-1.5 text-xs not-italic leading-4 text-[color:var(--Primary-Subtitle-Color,#686868)]">
//             5 Minutes ago
//           </div>
//         </div>
//         <div class="flex gap-5 my-auto">
//           <Image
//             image="https://cdn.builder.io/api/v1/image/assets/TEMP/c11da1d3b5154210c03653d6c1fd601782730e3ff1fb9b22d1be71ffd3d57526?placeholderIfAbsent=true"
//             backgroundSize="auto"
//             class="relative w-6"
//             aspectRatio={1}
//             noWebp={true}
//           />
//           <Image
//             image="https://cdn.builder.io/api/v1/image/assets/TEMP/a1f5fc02b09f83f4fc5bbad40e585efa4c343b2cfabfab09525e2df94d648f07?placeholderIfAbsent=true"
//             backgroundSize="auto"
//             class="relative w-6"
//             aspectRatio={1}
//             noWebp={true}
//           />
//         </div>
//       </div>
//       <div class="flex gap-5 justify-between px-4 py-3 mx-5 mt-2 max-w-full rounded-md border-solid bg-[color:var(--Background-Color,#FAFAFA)] border-[0.5px] border-neutral-200 w-[600px] max-md:flex-wrap max-md:mr-2.5 max-md:ml-0">
//         <div class="flex flex-col flex-1 whitespace-nowrap">
//           <div class="text-base not-italic leading-6 text-[color:var(--Secondary-Title-Color,#303030)]">
//             Meeting HR Department
//           </div>
//           <div class="mt-1.5 text-xs not-italic leading-4 text-[color:var(--Primary-Subtitle-Color,#686868)]">
//             Yesterday, 12:30 PM
//           </div>
//         </div>
//         <div class="flex gap-5 my-auto">
//           <Image
//             image="https://cdn.builder.io/api/v1/image/assets/TEMP/c1c8f762eb88edf4a7b1fa95f85b8b68424974f3b291cf3b6a9189523c6b6a08?placeholderIfAbsent=true"
//             backgroundSize="auto"
//             class="relative w-6"
//             aspectRatio={1}
//             noWebp={true}
//           />
//           <Image
//             image="https://cdn.builder.io/api/v1/image/assets/TEMP/a1f5fc02b09f83f4fc5bbad40e585efa4c343b2cfabfab09525e2df94d648f07?placeholderIfAbsent=true"
//             backgroundSize="auto"
//             class="relative w-6"
//             aspectRatio={1}
//             noWebp={true}
//           />
//         </div>
//       </div>
//       <div class="flex gap-5 justify-between px-4 py-3 mx-5 mt-2 max-w-full rounded-md border-solid bg-[color:var(--Background-Color,#FAFAFA)] border-[0.5px] border-neutral-200 w-[600px] max-md:flex-wrap max-md:mr-2.5 max-md:ml-0">
//         <div class="flex flex-col flex-1">
//           <div class="text-base not-italic leading-6 text-[color:var(--Secondary-Title-Color,#303030)]">
//             IT Department need two more talents for UX/UI Designer position
//           </div>
//           <div class="mt-1.5 text-xs not-italic leading-4 whitespace-nowrap text-[color:var(--Primary-Subtitle-Color,#686868)]">
//             Yesterday, 09:15 AM
//           </div>
//         </div>
//         <div class="flex gap-5 my-auto">
//           <Image
//             image="https://cdn.builder.io/api/v1/image/assets/TEMP/c1c8f762eb88edf4a7b1fa95f85b8b68424974f3b291cf3b6a9189523c6b6a08?placeholderIfAbsent=true"
//             backgroundSize="auto"
//             class="relative w-6"
//             aspectRatio={1}
//             noWebp={true}
//           />
//           <Image
//             image="https://cdn.builder.io/api/v1/image/assets/TEMP/a1f5fc02b09f83f4fc5bbad40e585efa4c343b2cfabfab09525e2df94d648f07?placeholderIfAbsent=true"
//             backgroundSize="auto"
//             class="relative w-6"
//             aspectRatio={1}
//             noWebp={true}
//           />
//         </div>
//       </div>
//       <div class="flex flex-col justify-center p-2.5 text-sm not-italic font-medium leading-5 text-center bg-white rounded-none border border-solid border-neutral-200 text-[color:var(--Main-Color,#FF5151)] max-md:max-w-full">
//         See All Announcement
//       </div>
//     </div>
//   );
// }
