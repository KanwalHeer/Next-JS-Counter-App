"use client"
import { buttonType } from "@/app/Types/type";
export default function Button(props:buttonType) {
    return (
      <main >
        
          <button onClick={props.onClickHandler}>{props.title}</button>
          
      </main>
    );
  }