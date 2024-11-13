import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

interface FigureProps {
    src: string;
    caption: string;
}

export default function Figure({ src, caption }: FigureProps) {
    return (
        <figure
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img src={useBaseUrl(src)} alt={caption} />
            <figcaption
                style={{
                    padding: "0.5rem",
                    width: "fit-content",
                    fontWeight: "500",
                    fontStyle: "italic",
                }}
            >{`${caption}`}</figcaption>
        </figure>
    );
}
