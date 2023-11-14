import React from "react";

export const useDimensions = () => {
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

    React.useEffect(() => {
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", handleResize);

        // call handler function right away so state gets updated with inital window size
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return dimensions;
};
