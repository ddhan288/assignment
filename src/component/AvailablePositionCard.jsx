import React from "react";

function AvailablePositionCard() {
  const handleButtonClick = () => {
    // Handle button click event here
  };

  return (
    <div className="flex flex-col grow justify-center px-5 py-3 w-full font-medium whitespace-nowrap bg-orange-50 rounded-xl text-blue-950 max-md:mt-3.5">
      <header className="text-lg leading-7">Available Position</header>
      <button className="mt-4 text-4xl leading-7" onClick={handleButtonClick}>
        24
      </button>
      <button className="mt-4 text-base leading-6 text-red-500" onClick={handleButtonClick}>
        4 Urgently needed
      </button>
    </div>
  );
}

export default AvailablePositionCard;