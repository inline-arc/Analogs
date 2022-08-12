import React, { useState } from "react";

const Walls = ({ walls }) => {
  return (
    <>
      <div className="container mx-auto px-4">
        <section className="py-8 px-4">
          <div className="image-box">
            {walls.map((wall) => (
              <div
                key={wall.id}
                className="my-1 px-1 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">
                <a href={wall.url} alt="download wallpaper" target="blank">
                  <img className="image"
                    src={wall.small_img}
                    alt={wall.title}
                  />
                </a>
                </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Walls;