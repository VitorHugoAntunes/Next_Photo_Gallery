import { styled } from "@stitches/react";

export const ImageDiv = styled('div', {
    "&.image": {
        height: "100vh",
        width: "20%",
        background: "#fff",
        filter: "brightness(0.3)",
        transition: "width 0.4s ease-in-out, filter 0.4s ease-in-out",
        cursor: "pointer",

        display: "flex",
        alignItems: "end",
        position: "relative",

        img: {
            width: "100%",
            height: "100%",
            objectFit: "cover",

            filter: "brightness(0.7)",
        },

        div: {
            marginBottom: "8rem",
            transition: "margin-bottom 0.2s ease-in-out",
            transitionDelay: "0.4s",
            padding: "3rem",

            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: "2rem",

            position: "absolute",

            "p": {
                opacity: 0,
                height: 0,
                overflow: "hidden",
                transition: "opacity 0.2s ease-in-out, height 0.2s ease-in-out",
                transitionDelay: "0.4s",

                color: "$white",
                fontSize: "1.5rem",
                fontWeight: "600"
            },
        },

        "&.active": {
            width: "50%",
            filter: "brightness(1)",

            div: {
                marginBottom: "5rem",

                "h1, p": {
                    opacity: 1,
                    height: "auto",
                },
            },
        },
    },
})