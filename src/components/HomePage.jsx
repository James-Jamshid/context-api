import React, { useState, useContext } from "react";
//
import { ThemeContext } from "./Context";
//contextni ishlatish uchun create contextni yaratib olamiz
//va export qilgan themecontex ni buyerga import qilamiz
import { IoIosArrowBack, IoIosMoon } from "react-icons/io";
import {
  FiPower,
  FiSettings,
  FiUserCheck,
  FiBell,
  FiUserPlus,
} from "react-icons/fi";
import { TbLayoutGridAdd } from "react-icons/tb";
import { AiOutlinePicture } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
// import { social } from "../Data";
import {
  Container,
  Desc,
  IconCon,
  Img,
  ImgTitle,
  ImgWrapper,
  Item,
  Line,
  MobContainer,
  Switch,
  Title,
} from "./Styled";
import { IconContext } from "react-icons";
import kitten from "../assets/img/kitten.png";
// import { useContext } from "react";

const HomePage = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [mode, setMode] = useState(false);
  //useStatega boshlanishida false yoki true berib olamiz
  //bosganda ozgarishi uchun onChange buyrugini beramiz
  // setMode(!mode) degani bu agar mode xolatida bolsa setmode setmodeda bolsa mode xolatga bosilganda ozgartadi
  const dark = {
    icon: "black",
    title: "black",
    background: "white",
  };
  const light = {
    icon: "white",
    title: "white",
    background: "black",
  };
  const onChange = () => {
    setMode(!mode);
    setTheme(mode ? dark : light);
    // yuqorida agar mode togri bosa dark bolsin aks xolda light bolsin degani
  };
  return (
    <IconContext.Provider value={{ color: "", size: "" }}>
      <Container>
        <MobContainer color={theme.background}>
          <IconCon>
            <IoIosArrowBack color={theme.icon} className="arrow" />
            <FiPower color={theme.icon} className="power" />
          </IconCon>
          <ImgWrapper>
            <Img src={kitten} alt="logo img" />
            <ImgTitle color={theme.title}>Be Coder</ImgTitle>
            <Desc color={theme.title}>IT School</Desc>
          </ImgWrapper>
          {/* dark */}
          <Item>
            <IoIosMoon color={theme.icon} className="moon" />

            <Title color={theme.title}>Dark mode</Title>

            <Switch
              onChange={onChange}
              checked={mode}
              size={50}
              //bu toggleni ishlaish uchun bizga useState kerak boladi
            />
          </Item>
          <Item>
            <TbLayoutGridAdd className="grid" />

            <Title color={theme.title}>Story</Title>
          </Item>
          <Item>
            <FiUserCheck className="check" />

            <Title color={theme.title}>Chat heads</Title>
          </Item>
          <Item>
            <FiUserPlus className="plus" />

            <Title color={theme.title}>Groups</Title>
          </Item>
          <Line />
          <Item>
            <AiOutlinePicture className="picture" />

            <Title color={theme.title}> Media and Photos</Title>
          </Item>
          <Item>
            <FiSettings className="setting" />

            <Title color={theme.title}>Setting and Privacy</Title>
          </Item>
          <Item>
            <BiComment className="comment" />

            <Title color={theme.title}>Help center</Title>
          </Item>
          <Item>
            <FiBell className="bell" />

            <Title color={theme.title}>Notification</Title>
          </Item>
        </MobContainer>
      </Container>
    </IconContext.Provider>
  );
};

export default HomePage;
