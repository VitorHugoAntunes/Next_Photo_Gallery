import { styled } from "@stitches/react";

export const HomeContainer = styled('main', {
    width: "100%",
    height: "100%",
    position: "relative",

    "& > .slider": {
        display: "flex",
    },

    "& .imagesSelection": {
        width: "100vw",
        height: "100vh",
        display: "none",

        ".main": {
            "&.active": {
                height: "100%",
                width: "100%",

                "& > div": {
                    width: "100%",
                    padding: "1rem",
                    marginBottom: "15rem",
                    justifySelf: "center",

                    p: {
                        textAlign: "center",
                        fontSize: "1.2rem"
                    }
                }
            }
        },

        ".navigation": {
            zIndex: 999,
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            bottom: 160,
            transition: "filter 0.5s",

            ".imageOption": {
                width: "4rem",
                height: "4rem",
                borderRadius: "8px",
                transition: "filter 0.5s",
                filter: "brightness(0.5)",
                cursor: "pointer",

                img: {
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "8px",
                    objectFit: "cover",
                },

                "&.active": {
                    outline: "1px solid #fff",
                    filter: "brightness(1)",
                }
            }
        }
    },

    button: {
        position: "absolute",
        bottom: 10,
        left: "50%",
        right: "50%",

        padding: "1rem 1.5rem",
        whiteSpace: "nowrap",
        transform: "translate(-50%, -50%)",
        fontSize: "1rem",
        cursor: "pointer",

        background: "$white",
        color: "#000",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "600",
        border: "1px solid #cacaca",
        borderRadius: "4px",
        transition: "filter 0.2s",

        "&:hover": {
            filter: "brightness(0.8)"
        }
    },

    '@media (max-width: 1080px)': {
        ".slider": {
            display: "none"
        },

        ".imagesSelection": {
            display: "block",

            ".image": {
                cursor: "auto",
            },
        },

        button: {
            bottom: 50,
        }
    },
})