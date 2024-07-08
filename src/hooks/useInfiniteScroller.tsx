import { useEffect, useRef } from "react";

// IntersectionObserver web API - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

export const useInfiniteScroller = ({
  callback,
  isLoading,
  options,
}: {
  callback: () => void;
  isLoading: boolean;
  options?: IntersectionObserverInit;
}) => {
  // holds the target element to observe for intersactions
  const targetRef = useRef(null);

  // the callback thats get called
  const intersected = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && !isLoading) {
      callback();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersected, options);

    if (targetRef.current) observer.observe(targetRef.current);

    // clean up observer before unmounte/useEffect removed
    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [targetRef]);

  return {
    targetRef,
  };
};
