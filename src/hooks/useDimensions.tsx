import React from "react";

export const useDimensions = () => {
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0, scrollY: 0 });

    React.useEffect(() => {
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight, scrollY: window.scrollY });
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleResize);

        // call handler function right away so state gets updated with inital window size
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleResize);
        };
    }, []);

    return dimensions;
};
