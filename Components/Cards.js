import React from "react";

const Cards = ({ title, images, description, price, stock, id }) => {
  return (
    <>
      <div key={id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={images}
            alt={title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                {title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{price}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;

/*
  //   return (
  //     <>
  //       <div className="w-[200px] h-auto border-2 border-black-500 m-2 overflow-hidden rounded-md hover:scale-105 transition ease-in-out">
  //         <div className="w-[200px] h-[150px] overflow-hidden">
  //           <img
  //             src={images}
  //             className=" w-full h-full border-b-2 object-cover"
  //           />
  //         </div>
  //         <div>
  //           <h2 className="text-lg mx-2">{title}</h2>
  //           <p className="w-auto h-10!important text-sm opacity-50 truncate ... mx-2">
  //             {description}
  //           </p>

  //           <div className="flex justify-between ali mt-2">
  //             <div className="ml-2 mb-2">
  //               <p className="text-sm text-green">${price}</p>
  //               <p className="text-sm line-through text-gray-500">
  //                 ${price + 30}
  //               </p>
  //             </div>

  //             <div className="text-sm opacity-50 mr-2">{stock} left</div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
*/
