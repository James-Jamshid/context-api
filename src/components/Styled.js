import styled from "styled-components";
import Toggle from "react-dark-mode-toggle";
export const Switch = styled(Toggle)`
  margin-left: auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  //
  height: fit-content;
  //heightga fit content bersa ozi aniqlab oladi.
  box-sizing: border-box;
  padding: 50px 300px;
  //padding 1chisi tepadan 2chisi enidan joy oladi
`;
export const MobContainer = styled.div`
  width: 400px;
  height: 625px;
  background: whitesmoke;
  box-shadow: 5px 5px 12px 6px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  /* box-sizing: border-box; */
`;
export const IconCon = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  //box-sizing berish karobgaga ovoladi va margin left auto berganda ozi avtomat joy tashidi
  .arrow {
    color: black;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .power {
    color: black;
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: auto;
  }
`;
export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
  background-color: white;
  border: 0.5px solid black;
  padding: auto;
`;

export const ImgTitle = styled.div`
  font-size: 20px;
  font-style: bold;
  font-family: 5F Pro Display;
`;
export const Desc = styled.div`
  font-size: 15px;
  font-style: bold;
  font-family: 5F Pro Display;
`;

export const Item = styled.div`
  display: flex;
  padding: 10px 30px;
  .moon {
    color: black;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .grid {
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: #fbb65c;
  }
  .check {
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: #ff7eb0;
  }
  .plus {
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: #36e3ff;
  }
  .picture {
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: #5476ff;
  }
  .setting {
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: #5476ff;
  }
  .comment {
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: #0bc630;
  }
  .bell {
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: #a394c2;
  }
`;
export const Title = styled.div`
  font-size: 17px;
  font-style: bold;
  font-family: 5F Pro Display;
  cursor: pointer;
  padding-left: 10px;
`;
export const IconDark = styled.div``;
export const Line = styled.div`
  width: 85%;
  background-color: #e9e9e9;
  height: 1px;
  margin: 10px 30px;
  box-sizing: border-box;
`;
