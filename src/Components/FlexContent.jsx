import React from 'react'

const FlexContent = ({
  ifexists,
  endpoint: { title, heading, text, btn, url, img },
}) => {
  return (
    <div
      className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container ${
        ifexists ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className=" max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center gap-4">
        <h1 className="text-4xl sm:text-3xl font-bold text-gradient">
          {heading}
        </h1>
        <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg">
          {title}
        </h1>
        <p>{text}</p>
        <a
          href={url}
          className="flex items-center"
          target="blank"
          role="button"
        >
          <button
            type="button"
            className="bg-slate-900 text-slate-100 py-2 button-theme"
          >
            {btn}
          </button>
        </a>
      </div>
      <div className="flex items-center justify-center max-w-xl relative lg:max-w-none w-full">
        <img
          src={img}
          className={`w-auto object-fill transitions-theme  ${
        ifexists ? "h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-12 hover:-rotate-12" : "w-auto object-fill transitions-theme h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-[19deg] hover:rotate-12"}`}
          alt={`img/${heading}`}
        />
      </div>
    </div>
  );
};

//

export default FlexContent