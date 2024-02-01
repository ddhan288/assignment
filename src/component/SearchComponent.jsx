import React from "react";

function SearchComponent() {
  return (
    <form className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
      <div
        className="flex gap-5 justify-between px-4 py-2.5 my-auto rounded border border-solid bg-neutral-50 border-neutral-200 text-zinc-400"
        role="search"
      >
        <header>Search</header>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bf3a1a1da92a01b6c77db0a8b27cc29d46139dacb778e11184213ec9e08f4d8?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
          className="w-6 aspect-square"
          alt="search icon"
        />
      </div>
      <div
        className="flex gap-5 justify-between items-center py-6 pr-14 pl-2 font-medium text-blue-950 max-md:pr-5"
        role="navigation"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/39cb694edfe9f21662736a4d6fc99774a10ad899b08051cd6c310599c848a0de?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
          className="self-stretch my-auto w-6 aspect-square"
          alt="image1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f8aeeb15082d0f43414ac21ab00a548376e072a97cb10a5feedb4d482dc6aee?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
          className="self-stretch my-auto w-6 aspect-square"
          alt="image2"
        />
        <div className="flex gap-3 justify-between self-stretch">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cfc38eae0ef5abc94c4be2e2f232cdc13151bfb268e8a2b243878ba56e11d719?apiKey=30b09ec83d9f4d0f968659f83f50af1c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfc38eae0ef5abc94c4be2e2f232cdc13151bfb268e8a2b243878ba56e11d719?apiKey=30b09ec83d9f4d0f968659f83f50af1c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfc38eae0ef5abc94c4be2e2f232cdc13151bfb268e8a2b243878ba56e11d719?apiKey=30b09ec83d9f4d0f968659f83f50af1c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfc38eae0ef5abc94c4be2e2f232cdc13151bfb268e8a2b243878ba56e11d719?apiKey=30b09ec83d9f4d0f968659f83f50af1c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfc38eae0ef5abc94c4be2e2f232cdc13151bfb268e8a2b243878ba56e11d719?apiKey=30b09ec83d9f4d0f968659f83f50af1c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfc38eae0ef5abc94c4be2e2f232cdc13151bfb268e8a2b243878ba56e11d719?apiKey=30b09ec83d9f4d0f968659f83f50af1c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfc38eae0ef5abc94c4be2e2f232cdc13151bfb268e8a2b243878ba56e11d719?apiKey=30b09ec83d9f4d0f968659f83f50af1c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cfc38eae0ef5abc94c4be2e2f232cdc13151bfb268e8a2b243878ba56e11d719?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"className="aspect-square w-[42px]"
            alt="image3"
          />
          <div className="flex gap-1 my-auto">
            <div className="grow">Admirra John</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/63060adb4aec7f3efca48a2a332aa907c6e01fe10f0b8876726877aa2675a395?apiKey=30b09ec83d9f4d0f968659f83f50af1c&"
              className="w-6 aspect-square"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
export default SearchComponent;