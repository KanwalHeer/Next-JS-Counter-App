"use client"

import Button from "../button/button";
import { useState } from "react";

export default function CounterSheet() {
    let count = 0
    const [countState ,setCountState] = useState(0)
    const onclickAddHendller=()=>{
        count++
        setCountState(countState + 1)
        console.log("add",count)
    }
    const onclickMinusHendller=()=>{
        count--
        setCountState(countState - 1)
        console.log("add",count)
    }

    const onclickResetHendller=()=>{
        count--
        setCountState(0)
        console.log("add",count)
    }
    return (
      <div>
      <h1 className="heading">My counter App</h1>
        <main className="container">
        <div className="counter">
          {countState > 0 ? countState : "0"}
        </div>
        <div className="buttons">
            <div className="add">
          <Button onClickHandler={onclickAddHendller} title="Add" />
          </div>
          <div className="minus">
          <Button onClickHandler={onclickMinusHendller} title="Minus" />
          </div>
          <div className="reset">
          <Button onClickHandler={onclickResetHendller} title="Reset" />
        </div>
        </div>
      </main>
      </div>
    );
  }
