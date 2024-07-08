import React from "react";
import { useInfiniteScroller } from "../hooks/useInfiniteScroller";

interface InfiniteScrollerProps {
  children: React.ReactNode;
  callback: () => void;
  isLoading: boolean;
}

const InfiniteScroller = ({
  children,
  callback,
  isLoading,
}: InfiniteScrollerProps) => {
  const { targetRef } = useInfiniteScroller({
    callback,
    isLoading,
  });

  return (
    <>
      {children}
      <div>{isLoading && <div className="loader"></div>}</div>
      <div ref={targetRef}></div>
    </>
  );
};

export default InfiniteScroller;
