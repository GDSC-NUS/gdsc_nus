import clsx from "clsx";
import { useMemo } from "react";
import { Popup } from "../Popup";

export type WorkshopCard = {
  className: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string;
  image: JSX.Element;
  popupSpeakers: JSX.Element;
  popupImage: JSX.Element;
  preview?: boolean;
};

export interface WorkshopCardInterface extends JSX.Element {}

export default function WorkshopCard({
  className,
  title,
  date,
  excerpt,
  tags,
  image,
  popupSpeakers,
  popupImage,
  preview,
}: WorkshopCard): WorkshopCardInterface {
  const cardTags = useMemo(() => {
    if (tags) {
      return tags.split(",").map((tag) => tag.trim());
    }
    return [];
  }, [tags]);

  const WorkshopCardClickable: JSX.Element = useMemo(() => {
    return (
      <div
        className={clsx(
          "my-2 flex h-[260px] w-[300px] flex-col overflow-hidden rounded-xl bg-white bg-cover shadow-lg hover:scale-105",
          className
        )}
      >
        <div className="h-[140px] w-full overflow-hidden">{image}</div>
        <div className="relative m-0 flex h-[120px] w-full flex-col space-y-1 rounded-lg bg-cover px-3 pt-1 pb-3">
          <h3 className="w-full text-sm font-bold md:text-xl">{title}</h3>
          <h5 className="w-full text-sm font-medium">{date}</h5>
          <p className="h-[2rem] flex-shrink overflow-hidden text-ellipsis whitespace-normal text-xs">
            {excerpt}
          </p>
          <div className="flex-grow"></div>
          <div className="flex w-full space-x-2">
            {cardTags.map((tag) => (
              <p
                key={tag}
                className="rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-black"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }, [cardTags, className, date, excerpt, image, title]);

  const WorkshopCardPopup: JSX.Element = useMemo(() => {
    return (
      <div className="flex h-full flex-col space-x-5 lg:flex-row">
        <div className="my-2 h-full w-full overflow-hidden lg:w-1/2">
          {popupImage}
        </div>
        <div className="flex h-full w-full flex-col space-y-5 lg:w-1/2">
          <h3 className="text-start text-sm font-bold md:text-xl">{title}</h3>
          <h5 className="w-full text-sm font-medium">{date}</h5>
          <div className="flex w-full space-x-2">
            {cardTags.map((tag) => (
              <p
                key={tag}
                className="rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-black"
              >
                {tag}
              </p>
            ))}
          </div>
          <div className="flex w-full flex-row space-x-2">{popupSpeakers}</div>
          <p className="flex-shrink overflow-hidden text-ellipsis whitespace-normal text-xs">
            {excerpt}
          </p>
          <div className="flex-grow"></div>
        </div>
      </div>
    );
  }, [cardTags, className, date, excerpt, image, title]);

  return (
    <div>
      {/*Wrap Popup around a parent div to contain the popup component as a single entity */}
      <Popup
        clickable={WorkshopCardClickable}
        popupBox={WorkshopCardPopup}
        preview={preview}
      />
    </div>
  );
}
