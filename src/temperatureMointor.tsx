import React, { useEffect, useRef } from "react";
import { Image } from "antd";

const TemperatureMointor = () => {
  return (
    <div>
      <canvas
        id="myCanvas"
        width="2180"
        height="838"
        // style ={border:1px, solid #f44336}
      ></canvas>
      <Image src="/main_window/assets/img/board.png" />
    </div>
  );
};
export default TemperatureMointor;
