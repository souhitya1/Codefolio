import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { autocompletion } from "@codemirror/autocomplete";

export default function Editor({language,onChange,value}){
    let extension= [
      autocompletion(),
    ];

    if(language == "html") extension.push[html()];
    else if(language == "css") extension.push[css()];
    else if(language == "js" || language == "javascript") extension.push[javascript()];
     return(
        <div>
         
         <CodeMirror
         value= {value}
         height="200px"
         onChange={(val)=> onChange(val)}
         style={{color: "black"}}
         extensions={extension}
         />
        </div>
     );
}