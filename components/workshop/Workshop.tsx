import clsx from "clsx";
import { useMemo, useState } from "react";
import { WorkshopCardInterface } from "./WorkshopCard";
import TagFilter, { TagFilterInterface } from "./TagFilter";
import React from "react";

export type WorkshopProps = {
  title: string;
  className: string;
  tags: string;
  children?: WorkshopCardInterface[];
  showTags: boolean;
};

export const TagsContext = React.createContext<string[]>([]);

export default function Workshop({
  title,
  className,
  children,
  showTags,
  tags,
}: WorkshopProps): JSX.Element {
  const [filtered, setFiltered] = useState<string[]>([]);

  const workshopTags = useMemo(() => {
    if (!children) {
      return [];
    }
    const filteredTags: string[] | undefined = [];
    if (!children.length) {
      const child: WorkshopCardInterface =
        children as unknown as WorkshopCardInterface;
      if (!child.props.tags) {
        return [];
      }
      child.props.tags
        .split(",")
        .map((text: string) => text.trim())
        .forEach((tag: string) => {
          if (!filteredTags.includes(tag)) {
            filteredTags.push(tag);
          }
        });
    } else {
      children.forEach((card) => {
        card.props.tags &&
          card.props.tags
            .split(",")
            .map((text: string) => text.trim())
            .forEach((tag: string) => {
              if (!filteredTags.includes(tag)) {
                filteredTags.push(tag);
              }
            });
      });
    }
    return filteredTags;
  }, [children]);

  const filteredChildren = useMemo(() => {
    if (!children || !filtered) {
      return;
    }
    if (filtered.length === 0) {
      return children;
    }
    const filteredCards: any[] | undefined = [];
    if (!children.length) {
      const child: WorkshopCardInterface =
        children as unknown as WorkshopCardInterface;
      const cardTags: string[] = child.props.tags
        .split(",")
        .map((text: string) => text.trim());
      if (filtered.every((tag: string) => cardTags.includes(tag))) {
        return child;
      }
      return;
    } else {
      children.forEach((card) => {
        if (card.props.tags) {
          const cardTags: string[] = card.props.tags
            .split(",")
            .map((text: string) => text.trim());
          if (filtered.every((tag: string) => cardTags.includes(tag))) {
            filteredCards.push(card);
          }
        }
      });
    }
    return filteredCards;
  }, [children, filtered]);

  return (
    <div
      className={clsx(
        "mx-auto flex h-full w-4/5 max-w-[1920px] flex-col items-center space-y-5",
        className
      )}
    >
      <h1 className="w-full text-center text-3xl font-extrabold md:text-5xl">
        {title}
      </h1>
      <TagsContext.Provider value={workshopTags}>
        {showTags && <TagFilter setFiltered={setFiltered} />}
        <div className="grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-2 xl:grid-cols-3">
          {children && filteredChildren}
        </div>
      </TagsContext.Provider>
    </div>
  );
}
