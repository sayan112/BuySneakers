import React from 'react'
 import Item from './utils/Item'
import Title from './utils/Title'
const Sales = ({ifexists,endpoint:{title,items}}) => {
  return (
    <>
      <div className="nike-container">
        <Title title={title} />
        <div
          className={`grid  items-center justify-items-center  gap-7 lg:gap-5 mt-7  ${
            ifexists
              ? "grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
              : "grid-cols-4 md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1"
          }`}
        >
          {items.map((item, index) => (
            <Item item={item} key={index} ifexists={ifexists} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Sales