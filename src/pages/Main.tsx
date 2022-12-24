import React, { useState } from "react";
import DialogueCard from "../components/DialogueCard";
import { dialogueConfig } from "../components/config/DialogConfig";
import { url } from "inspector";

function Main() {
  const [data, setData] = useState(dialogueConfig.items);
  const [dataIndex, setDataIndex] = useState(0);

  const goBack = () => {
    console.log("goBack");
    if (dataIndex > 0) {
      setDataIndex(dataIndex - 1);
    }
  };

  const goFoward = () => {
    console.log("goFoward");
    if (dataIndex < data.length - 1) {
      setDataIndex(dataIndex + 1);
    }
  };

  return (
    <div>
      <DialogueCard
        message={data[dataIndex].message}
        userName={data[dataIndex].userName}
        name={data[dataIndex].name}
        characterSprite={data[dataIndex].characterSprite}
        goBack={goBack}
        goFoward={goFoward}
        children={
          dataIndex === data.length - 1 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
              className="steam"
            >
              <img src="/src/assets/steam.png" width={60}></img>
              <h2>{process.env.STARDEW_KEY}</h2>
            </div>
          )
        }
      />
    </div>
  );
}

export default Main;
