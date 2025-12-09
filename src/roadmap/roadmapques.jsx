import { useState } from "react"

export default function Roadmapques(){
    const ques=[
        {
            qn: "Top HTML questions",
            resource: "click here to view",
            link: "/public/html_questions.pdf"
        },
        {
            qn: "Top CSS questions",
            resource: "click here to view",
            link: "/public/css_questions.pdf"
        },
        {
            qn: "Top JS questions",
            resource: "click here to view",
            link: "/public/js_questions.pdf"
        },
    ]
    
    const [quesopen,setquesopen]= useState(false);
    return(
        <div className="justify-center flex mt-20" style={{backgroundColor: "black"}}>
            <div style={{ color: "black", background: "linear-gradient(135deg, #f8f4f3ff, #e7dad1ff)" }} className="w-full max-w-4xl mx-auto rounded-xl p-4 font-bold">
                <h3 
                onClick={()=> setquesopen(!quesopen)}
                style={{color: "black", fontSize: "20px"}}
                className="font-bold cursor-pointer"
                >Top questions</h3>
                {
                    quesopen &&
                    ques.map((qmap,qindex)=>(
                        <div key={qindex}>
                            <div className="bg-black w-full h-1"></div>
                            <p className="mb-1 mt-2">{qindex+1}. {qmap.qn} <a href={qmap.link} className="text-blue-900 underline ml-2">{qmap.resource}</a></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}