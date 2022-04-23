import React, { useEffect, useState } from "react";
import axios from "axios";
import Webdesign from "./WebDesign";
const JavaScript =
   "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.";
const ReactTxt =
   "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.";
const nodeTxt =
   "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.";
const mongoTxt =
   "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program.";
const HTML =
   "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.";
const CSS =
   "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML.";

export const ItemsContext = React.createContext();

const Mycontext = ({ children }) => {
   const [frontend, setFrontend] = useState([
      { title: "JavaScript", desc: JavaScript },
      { title: "Reactjs", desc: ReactTxt },
   ]);
   const [backend, setBackend] = useState([
      { title: "Nodejs", desc: nodeTxt },
      { title: "mongo db", desc: mongoTxt },
   ]);
   const [webDesign, setWebDesign] = useState([
      { title: "HTML", desc: HTML },
      { title: "CSS", desc: CSS },
   ]);

   //  useEffect(() => {
   //     const front = axios.get("http://localhost:3002/frontend");
   //     //.then((res) => );

   //     const back = axios.get("http://localhost:3002/backend");
   //     //.then((res) => );

   //     const web = axios.get("http://localhost:3002/webdesign");
   //     //.then((res) => );

   //     Promise.all(front, back, web).then((res) => {
   //        setFrontend(res.data);
   //        setBackend(res.data);
   //        setWebDesign(res.data);
   //     });
   //  },[]);

   return (
      <ItemsContext.Provider value={{ frontend, backend, webDesign }}>
         {children}
      </ItemsContext.Provider>
   );
};

export default Mycontext;
