import { useState } from "react";
import Roadmapjs from "./roadmapjs";

export default function Roadmapcss() {
    const mapscss = [
        { parent2n2: "Css introduction", link2: "https://www.w3schools.com/Css/css_intro.asp" },
        { parent2n2: "Css Syntax", link2: "https://www.w3schools.com/Css/css_syntax.asp" },
        { parent2n2: "Css Selectors", link2: "https://www.w3schools.com/Css/css_selectors.asp" },
        { parent2n2: "Css How to add", link2: "https://www.w3schools.com/Css/css_howto.asp" },
        { parent2n2: "Css colors", link2: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color" },
        { parent2n2: "Css background" },
        { parent2n2: "Css Borders", link2: "https://www.geeksforgeeks.org/css/css-borders/" },
        { parent2n2: "Css Margins", link2: "https://www.w3schools.com/Css/css_margin.asp" },
        { parent2n2: "Css padding", link2: "https://www.w3schools.com/Css/css_padding.asp" },
        { parent2n2: "Css Height/Width", link2: "https://www.w3schools.com/Css/css_dimension.asp" },
        { parent2n2: "Css outline" },
        { parent2n2: "Css Text", link2: "https://www.geeksforgeeks.org/css/css-text-formatting/" },
        { parent2n2: "Css fonts", link2: "https://www.geeksforgeeks.org/css/css-fonts/" },
        { parent2n2: "Css Link", link2: "https://www.w3schools.com/Css/css_link.asp" },
        { parent2n2: "Css Lists", link2: "https://www.w3schools.com/Css/css_list.asp" },
        { parent2n2: "Css Display", link2: "https://www.w3schools.com/Css/css_display_visibility.asp" },
        { parent2n2: "Css position", link2: "https://www.w3schools.com/Css/css_positioning.asp" },
        { parent2n2: "Css overflow", link2: "https://www.w3schools.com/Css/css_overflow.asp" },
        { parent2n2: "Css align", link2: "https://www.w3schools.com/Css/css_align.asp" },
        { parent2n2: "Css opacity", link2: "https://www.w3schools.com/Css/css_image_transparency.asp" },
        { parent2n2: "Flexbox" }
    ];

    const background = [
        { parent2n3: "Background Color", link2n3: "https://www.w3schools.com/Css/css_background.asp" },
        { parent2n3: "Background image", link2n3: "https://www.w3schools.com/Css/css_background_image.asp" },
        { parent2n3: "Background attachment", link2n3: "https://www.w3schools.com/Css/css_background_attachment.asp" },
        { parent2n3: "Background Shorthand", link2n3: "https://www.w3schools.com/Css/css_background_shorthand.asp" }
    ];

    const Outline = [
        { parent2n4: "Outline Width", link2n4: "https://www.w3schools.com/Css/css_outline_width.asp" },
        { parent2n4: "Outline colour", link2n4: "https://www.w3schools.com/Css/css_outline_color.asp" },
        { parent2n4: "Outline Shorthand", link2n4: "https://www.w3schools.com/Css/css_outline_shorthand.asp" },
        { parent2n4: "Outline offset", link2n4: "https://www.w3schools.com/Css/css_outline_offset.asp" }
    ]

    const flexbox = [
        { parent2n5: "Flexbox", link2n5: "https://www.w3schools.com/Css/css3_flexbox.asp" },
        { parent2n5: "Flexbox Container", link2n5: "https://www.w3schools.com/Css/css3_flexbox_container.asp" },
        { parent2n5: "Flexbox Items", link2n5: "https://www.w3schools.com/Css/css3_flexbox_items.asp" },
        { parent2n5: "Flexbox Responsive", link2n5: "https://www.w3schools.com/Css/css3_flexbox_responsive.asp" }
    ]

    const [open, setopen] = useState(false);
    const [backgroundopen, setbackgroundopen] = useState(false);
    const [outlineopen, setoutlineopen] = useState(false);
    const [flexopen, setflexopen] = useState(false);

    return (
        <div className="flex justify-center mt-20" style={{backgroundColor: "black"}}>
            <div
                style={{ color: "white", background: "linear-gradient(135deg, #1f1fdaff, #866ff5ff)" }}
                className="w-full max-w-4xl mx-auto rounded-xl p-4 font-bold"
            >
                <h3
                    onClick={() => setopen(!open)}
                    style={{ fontSize: "20px", marginTop: "10px" }}
                    className="ml-5 cursor-pointer"
                >
                    Learn CSS
                </h3>

                {open &&
                    mapscss.map((map, index) => (
                        <div className="ml-10 mb-4" key={index}>
                            <div className="bg-black w-full h-1"></div>

                            <p className="mb-1">{index + 1}. {map.parent2n2}</p>

                            {/* Toggle for CSS Background */}
                            {map.parent2n2 === "Css background" && (
                                <p
                                    onClick={() => setbackgroundopen(!backgroundopen)}
                                    style={{ fontSize: "20px", marginTop: "10px" }}
                                    className="ml-5 cursor-pointer"
                                >
                                    <span style={{ color: "black" }}></span> Css background
                                </p>
                            )}

                            {map.parent2n2 === "Css outline" && (
                                <p
                                    onClick={() => setoutlineopen(!outlineopen)}
                                    style={{ fontSize: "20px", marginTop: "10px" }}
                                    className="ml-5 cursor-pointer"
                                ><span style={{ color: "black" }}></span> Css outline</p>
                            )}

                            {map.parent2n2 === "Flexbox" && (
                                <p
                                    onClick={() => setflexopen(!flexopen)}
                                    style={{ fontSize: "20px", marginTop: "10px" }}
                                    className="ml-5 cursor-pointer"
                                >
                                    <span style={{ color: "black" }}></span>  Flexbox
                                </p>
                            )}

                            {flexopen &&
                                map.parent2n2 === "Flexbox" &&
                                flexbox.map((fMap, fIndex) => {
                                    return (
                                        <div key={fIndex}>
                                            <p className="ml-6 mb-0.1 text-sm text-gray-200 cursor-pointer">{fMap.parent2n5}</p>
                                            <a href={fMap.link2n5}
                                                className="underline text-blue-300 ml-70 text-sm"
                                                style={{ position: "relative", top: "-25px" }}
                                            >View resource</a>
                                        </div>
                                    )
                                })
                            }

                            {outlineopen &&
                                map.parent2n2 === "Css outline" &&
                                Outline.map((oMap, oIndex) => {
                                    return (
                                        <div key={oIndex}>
                                            <p className="ml-6 mb-0.1 text-sm text-gray-200 cursor-pointer">{oMap.parent2n4}</p>
                                            <a
                                                href={oMap.link2n4}
                                                className="underline text-blue-300 ml-70 text-sm"
                                                style={{ position: "relative", top: "-25px" }}
                                            >View resource</a>
                                        </div>
                                    )
                                })
                            }


                            {backgroundopen &&
                                map.parent2n2 === "Css background" &&
                                background.map((sMap, sIndex) => (
                                    <div key={sIndex}>
                                        <p className="ml-6 mb-0.1 text-sm text-gray-200 cursor-pointer">
                                            {sMap.parent2n3}
                                        </p>

                                        <a
                                            href={sMap.link2n3}
                                            className="underline text-blue-300 ml-70 text-sm"
                                            style={{ position: "relative", top: "-25px" }}
                                        >
                                            View resource
                                        </a>
                                    </div>
                                ))}

                            {map.parent2n2 !== "Css background" &&
                                map.parent2n2 !== "Css outline" &&
                                map.parent2n2 !== "Flexbox" &&
                                (
                                    <a
                                        href={map.link2}
                                        className="underline text-blue-300 ml-70"
                                        style={{ position: "relative", top: "-25px" }}
                                    >
                                        View resource
                                    </a>
                                )}
                        </div>
                    ))}
            </div>
            
        </div>
        
    );
}
