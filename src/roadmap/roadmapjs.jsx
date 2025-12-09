import { useState } from "react";

export default function Roadmapjs() {
    const jsintro = [
        { parent3n1: "Javascript introduction", link3n1: "https://www.geeksforgeeks.org/javascript/introduction-to-javascript/" },
        { parent3n1: "Variables and Datatypes", link3n1: "https://www.geeksforgeeks.org/javascript/variables-datatypes-javascript/" },
        { parent3n1: "Operators", link3n1: "https://www.geeksforgeeks.org/javascript/javascript-operators/" },
        { parent3n1: "Conditional statements", link3n1: "https://www.geeksforgeeks.org/javascript/control-statements-in-javascript/" },
        { parent3n1: "Array and string" },
        {parent3n1: "Javascript Function and objects"},
        {parent3n1: "Asynchronous Javascript"},
        {parent3n1: "Exceptional handling", link3n1: "https://www.geeksforgeeks.org/javascript/javascript-error-and-exceptional-handling-with-examples/"},
        {parent3n1: "Error throw and try and catch", link3n1: "https://www.geeksforgeeks.org/javascript/javascript-errors-throw-and-try-to-catch/"},
        {parent3n1: "Custom error", link3n1: "https://www.geeksforgeeks.org/javascript/how-to-create-custom-errors-in-javascript/"},
        {parent3n1: "Type error", link3n1: "https://www.geeksforgeeks.org/javascript/javascript-typeerror-invalid-array-prototype-sort-argument/"},
        {parent3n1: "Javascript DOM"}
    ];

    const jsarray = [
        { parent3n2: "Javascript Arrays", link3n2: "https://www.geeksforgeeks.org/javascript/javascript-arrays/" },
        { parent3n2: "Javascript array methods", link3n2: "https://www.geeksforgeeks.org/javascript/javascript-array-methods/" },
        { parent3n2: "Javascript Strings", link3n2: "https://www.geeksforgeeks.org/javascript/javascript-strings/" },
        { parent3n2: "Javascript String methods", link3n2: "https://www.geeksforgeeks.org/javascript/javascript-string-methods/" }
    ];

    const jsfunc = [
        { parent3n3: "Javascript Function ", link3n3: "https://www.geeksforgeeks.org/javascript/functions-in-javascript/" },
        {parent3n3: "Javascript Function expression", link3n3: "https://www.geeksforgeeks.org/javascript/javascript-function-expression/"},
        {parent3n3: "Objects in javascript", link3n3: "https://www.geeksforgeeks.org/javascript/objects-in-javascript/"},
        {parent3n3: "Javascript object Constructors", link3n3: "https://www.geeksforgeeks.org/javascript/javascript-object-constructors/"},
    ]

    const jsasync= [
        {parent3n4: "Asynchronous Javascript", link3n4: "https://www.geeksforgeeks.org/javascript/asynchronous-javascript/"},
        {parent3n4: "Javascript callbacks", link3n4: "https://www.geeksforgeeks.org/javascript/javascript-callbacks/"},
        {parent3n4: "Javascript Promise", link3n4: "https://www.geeksforgeeks.org/javascript/javascript-promise/"},
        {parent3n4: "Javascript Event loop", link3n4: "https://www.geeksforgeeks.org/javascript/what-is-an-event-loop-in-javascript/"},
        {parent3n4: "Async awaait in javascript", link3n4: "https://www.geeksforgeeks.org/javascript/async-await-function-in-javascript/"}
    ]

    const jsdom= [
        {parent3n4: "Javascript DOM", link3n4: "https://www.geeksforgeeks.org/javascript/dom-document-object-model/"},
        {parent3n4: "Select DOM element", link3n4: "https://www.geeksforgeeks.org/javascript/how-to-select-dom-elements-in-javascript/"},
        {parent3n4: "Custom events", link3n4: "https://www.geeksforgeeks.org/javascript/javascript-custom-events/"},
        {parent3n4: "Add event listener", link3n4: "https://www.geeksforgeeks.org/javascript/javascript-addeventlistener-with-examples/"}
    ]

    const [introopen, setintroopen] = useState(false);
    const [arrayopen, setarrayopen] = useState(false);
    const [funcopen, setfuncopen] = useState(false);
    const[asyncopen,setasyncopen]= useState(false);
    const[domopen,setdomopen]= useState(false);

    return (
        <div className="flex justify-center mt-20" style={{backgroundColor: "black"}}>
            <div
                style={{ background: "linear-gradient(135deg, #60a5fa, #a78bfa)" }}
                className="w-full max-w-4xl mx-auto rounded-xl p-4"
            >
                <p
                    onClick={() => setintroopen(!introopen)}
                    style={{ color: "black", fontSize: "20px" }}
                    className="font-bold cursor-pointer"
                >
                    Learn Javascript
                </p>

                {introopen &&
                    jsintro.map((iMap, iIndex) => (
                        <div key={iIndex} className="mb-2">
                            <div className="bg-black w-full h-1"></div>

                            <p
                                style={{ color: "black", fontSize: "20px" }}
                                className="font-bold"
                            >
                                {iIndex + 1}. {iMap.parent3n1}
                            </p>


                            {iMap.parent3n1 === "Array and string" && (
                                <>
                                    <p
                                        onClick={() => setarrayopen(!arrayopen)}
                                        className="cursor-pointer font-bold text-blue-900 ml-5"
                                    >
                                        ➤ Open Array topics
                                    </p>

                                    {arrayopen &&
                                        jsarray.map((jMap, jIndex) => (
                                            <div key={jIndex} className="ml-6 mt-2 mb-0.5">
                                                <p className="text-black font-bold text-sm"
                                                    style={{ fontSize: "15px" }}
                                                >
                                                    {jMap.parent3n2}
                                                </p>
                                                <a
                                                    href={jMap.link3n2}
                                                    className="underline cursor-pointer font-bold text-blue-800 ml-90"
                                                    style={{ position: "relative", top: "-25px" }}

                                                >
                                                    View resource
                                                </a>
                                            </div>
                                        ))}
                                </>
                            )}

                            {iMap.parent3n1 === "Javascript Function and objects" && (
                                <>
                                    <p
                                        onClick={() => setfuncopen(!funcopen)}
                                        className="cursor-pointer text-blue-900 font-bold ml-5"
                                    > ➤ Open Function and object topics</p>
                                    {funcopen && (
                                        jsfunc.map((fMap, fIndex) => (
                                            <div key={fIndex} className="ml-6 mt-2 mb-0.1">
                                                <p className="text-black font-bold text-sm"
                                                    style={{ fontSize: "15px" }}
                                                >
                                                    {fMap.parent3n3}
                                                </p>
                                                <a
                                                    href={fMap.link3n3}
                                                    className="underline cursor-pointer font-bold text-blue-800 ml-90"
                                                    style={{ position: "relative", top: "-25px" }}

                                                >
                                                    View resource
                                                </a>
                                            </div>
                                        ))
                                    )}
                                </>
                            )}

                            {iMap.parent3n1 === "Asynchronous Javascript" &&(
                                <>
                                <p
                                        onClick={() => setasyncopen(!asyncopen)}
                                        className="cursor-pointer text-blue-900 font-bold ml-5"
                                    > ➤ Open Asynchronous Javascript topics</p>
                                    {asyncopen &&(
                                        jsasync.map((aMap,aindex)=>(
                                           <div key={aindex} className="ml-6 mt-2 mb-0.1">
                                                <p className="text-black font-bold text-sm"
                                                    style={{ fontSize: "15px" }}
                                                >
                                                    {aMap.parent3n4}
                                                </p>
                                                <a
                                                    href={aMap.link3n4}
                                                    className="underline cursor-pointer font-bold text-blue-800 ml-90"
                                                    style={{ position: "relative", top: "-25px" }}

                                                >
                                                    View resource
                                                </a>
                                            </div> 
                                        ))
                                    )}
                                </>
                            )}

                            {iMap.parent3n1 === "Javascript DOM" &&(
                                <>
                                <p
                                        onClick={() => setdomopen(!domopen)}
                                        className="cursor-pointer text-blue-900 font-bold ml-5"
                                    > ➤ Open Javascript DOM topics</p>
                                    {domopen &&(
                                        jsdom.map((dMap,dIndex)=>(
                                            <div key={dIndex} className="ml-6 mt-2 mb-0.1">
                                                <p className="text-black font-bold text-sm"
                                                    style={{ fontSize: "15px" }}
                                                >
                                                    {dMap.parent3n4}
                                                </p>
                                                <a
                                                    href={dMap.link3n4}
                                                    className="underline cursor-pointer font-bold text-blue-800 ml-90"
                                                    style={{ position: "relative", top: "-25px" }}

                                                >
                                                    View resource
                                                </a>
                                            </div> 
                                        ))
                                    )}
                                </>
                            )}

                            {iMap.parent3n1 !== "Array and string" &&
                            iMap.parent3n1 !== "Javascript Function and objects" &&
                             iMap.parent3n1!= "Asynchronous Javascript" &&
                             iMap.parent3n1 !== "Javascript DOM" &&(
                                <a
                                    href={iMap.link3n1}
                                    className="underline cursor-pointer text-blue-800 font-bold ml-90"
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
