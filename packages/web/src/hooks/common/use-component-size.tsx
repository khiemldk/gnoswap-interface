import { useState, useEffect, useRef } from "react";

interface ComponentSize {
  width: number;
  height: number;
}

function useComponentSize(): [React.RefObject<HTMLDivElement>, ComponentSize] {
  const [size, setSize] = useState<ComponentSize>({ width: 0, height: 0 });
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const { width, height } =
        componentRef.current?.getBoundingClientRect() ?? {
          width: 0,
          height: 0,
        };
      setSize({ width, height });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [componentRef]);

  return [componentRef, size];
}

export default useComponentSize;
