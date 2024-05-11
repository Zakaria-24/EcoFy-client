/* eslint-disable react/prop-types */
import { FcViewDetails } from "react-icons/fc";
import { MdOutlineUpdate } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
const MyQueryCard = ({ myQuery }) => {
  const { query_title, product_img_URl, description,dateTime, name, photo } = myQuery;
  // console.log(myQuery);
  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex space-x-4">
          <img
            alt=""
            src={photo}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {name}
            </a>
            <span className="text-xs dark:text-gray-600">
              {dateTime.slice(0,16)}
            </span>
          </div>
        </div>
        <div>
          <img
            src={product_img_URl}
            alt=""
            className="object-cover w-full mb-4 h-full dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{query_title}</h2>
          <p className="text-sm dark:text-gray-600">{description}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            {/* details */}
            <button
              aria-label="Share this post"
              type="button"
              className="p-2 text-center"
            >
              <FcViewDetails />
            </button>
            {/* update */}
            <button
              aria-label="Bookmark this post"
              type="button"
              className="p-2"
            >
              <MdOutlineUpdate />
            </button>
          </div>
          <div className="flex space-x-2 text-sm dark:text-gray-600">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <AiTwotoneDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQueryCard;
