import { styled } from "@stitches/react";

export const MemoriesContainer = styled('main', {
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    a: {
        textDecoration: "underline",
        color: "#333333",
        marginTop: "5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        transition: "color 0.2s",

        "&:hover": {
            color: "#666666"
        }
    }
})

export const MemoriesHeader = styled('header', {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2rem",

    p: {
        textAlign: "center"
    },

    '@media (max-width: 768px)': {
        padding: "0.5rem",
        p: {
            fontSize: "90%"
        },
    },
})

export const PhotosSection = styled('section', {
    marginTop: "3rem",
    display: "flex",
    gap: "2rem",

    position: "relative",

    ".image": {
        width: "30rem",
        height: "30rem",
        background: "#cecece",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        borderRadius: "32px",
        transition: "transform 0.5s ease",
        cursor: "pointer",
        position: "relative",

        display: "flex",
        justifyContent: "center",

        img: {
            width: "100%",
            height: "100%",
            borderRadius: "32px",
            transition: "filter 0.5s",
            objectFit: "cover"
        },

        ".photoInfo": {
            position: "absolute",
            padding: "1rem",
            top: 0,
            opacity: 0,
            visibility: "hidden",
            transition: "opacity 0.5s, visibility 0.5s",

            "h3, p": {
                color: "$white",
                textAlign: "center",
                fontSize: "1.2rem",
            },

            p: {
                marginTop: "2rem"
            }
        },

        "&:hover, &.active": {
            transform: "scale(0.95)",

            img: {
                filter: "brightness(0.4)"
            },

            ".photoInfo": {
                opacity: 1,
                visibility: "visible",
            }
        },

        ".visibility": {
            position: "absolute",
            right: 20,
            top: 20,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            border: "none",
            cursor: "pointer",
            transition: "filter 0.2s",

            "&:hover": {
                filter: "brightness(0.8)"
            }
        }
    },

    ".previous, .next": {
        scale: 0.8
    },

    ".invisible": {
        opacity: 0,
        cursor: "auto"
    },

    nav: {
        display: "flex",
        gap: "0.5rem",
        position: "absolute",
        background: "#fff",
        padding: "0.5rem",
        border: "1px solid #cacaca",
        borderRadius: "64px",

        left: 0,
        right: 0,
        bottom: 25,
        marginLeft: "auto",
        marginRight: "auto",

        width: "fit-content",

        button: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",

            padding: "0.5rem",
            border: "1px solid #cacaca",

            borderRadius: "50%",
            cursor: "pointer",
            transition: "filter 0.5s",

            "&.disabled": {
                filter: "brightness(0.7)",
                cursor: "not-allowed"
            }
        }
    },

    ".photosCount": {
        display: "flex",
        alignItens: "center",
        justifyContent: "center",
        width: "6rem",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bottom: -80,

        background: "#7C7C8A",
        padding: "0.5rem 1.5rem",
        borderRadius: "32px",


        span: {
            color: "$white",
            fontWeight: 600,
        }
    },

    '@media (max-width: 768px)': {
        ".image p": {
            fontSize: "90%"
        },

        ".image": {
            width: "21rem",
            height: "21rem"
        },

        ".previous, .next": {
            display: "none"
        }
    },
})