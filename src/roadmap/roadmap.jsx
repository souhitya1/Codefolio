import { useState } from "react"
import Roadmapcss from "./roadmapcss";

export default function Roadmap() {
    const mapshtml = [
        {
            parent1n1: "HTML introduction",
            link1: "https://www.w3schools.com/html/html_intro.asp"
        },
        {
            parent1n1: "Html Elements",
            link1: "https://www.w3schools.com/html/html_elements.asp"
        },
        {
            parent1n1: "Html Attributes",
            link11: "https://www.w3schools.com/html/html_attributes.asp"
        },
        {
            parent1n1: "Html Headings",
            link1: "https://www.w3schools.com/html/html_headings.asp"
        },
        {
            parent1n1: "Html paragraphs",
            link1: "https://www.w3schools.com/html/html_paragraphs.asp"
        },
        {
            parent1n1: "Html Styles",
            link1: "https://www.w3schools.com/html/html_styles.asp"
        },
        {
            parent1n1: "Html Formatting",
            link1: "https://www.w3schools.com/html/html_formatting.asp"
        },
        {
            parent1n1: "Html Quotations",
            link1: "https://www.w3schools.com/html/html_quotation_elements.asp",
        },
        {
            parent1n1: "Html Div",
            link1: "https://www.w3schools.com/html/html_div.asp"
        },
        {
            parent1n1: "Html Classes",
            link1: "https://www.w3schools.com/html/html_classes.asp"
        },
        {
            parent1n1: "Html Id",
            link1: "https://www.w3schools.com/html/html_id.asp"
        },
        {
            parent1n1: "Html Buttons",
            link1: "https://www.w3schools.com/html/html_buttons.asp"
        },
        {
            parent1n1: "Html iframes",
            link1: "https://www.w3schools.com/html/html_iframe.asp"
        },
        {
            parent1n1: "Html Forms",
            link1: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form"
        },
        {
            parent1n1: "Html Semantics",
            link1: "https://www.w3schools.com/html/html5_semantic_elements.asp"
        },
        {
            parent1n1: "Html Responsive",
            link1: "https://www.w3schools.com/html/html_responsive.asp"
        },

    ]

    const [activeindex, setactiveindex] = useState(false);

    return (
        <div style={{backgroundColor: "black"}}>
            <div>
                <p style={{ color: "white", fontSize: "30px" }} className="font-bold text-center mt-5 ">Codefolio Roadmap</p>
                <p style={{ color: "white", fontSize: "20px" }} className="text-center mt-10"><span style={{ color: "#EE4B2B", fontSize: "20px" }} className="ml-5">Note : </span>You can find different website links which will be useful for you.In our website you can practice questions <br></br>
                    and can implement them by our online compiler and at the end of your roadmap you will get personalised assignments . <br></br>
                    So practice and Master Web development</p>
                <div className="flex justify-center mt-20">
                    <div style={{ color: "black", background: 'linear-gradient(135deg, #ef8222ff, #f6b85cff)' }} className=" w-full max-w-4xl mx-auto rounded-xl p-4 font-bold">
                        <h3 onClick={() => setactiveindex(!activeindex)} style={{ fontSize: "20px", marginTop: "10px" }} className="text-2 ml-5 cursor-pointer">Learn HTML</h3>
                        {mapshtml.map((map, index) => (
                            <div key={index} >
                                {activeindex && (
                                    <div className="ml-10 mb-1">
                                        <div className="bg-black  w-full h-1 "></div>
                                        <p className="mb-1">{index + 1} {map.parent1n1}</p>
                                        <a href={map.link1} className="text-blue-900 underline ml-50" style={{ position: "relative", top: "-25px" }}>View resource</a>                                    </div>
                                )}
                            </div>
                            
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}