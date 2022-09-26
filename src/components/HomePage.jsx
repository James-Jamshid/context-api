import React, { useState } from "react";
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
import { social } from "../Data";
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

const HomePage = () => {
  const [mode, setMode] = useState(false);
  //useStatega boshlanishida false yoki true berib olamiz
  //bosganda ozgarishi uchun onChange buyrugini beramiz
  // setMode(!mode) degani bu agar mode xolatida bolsa setmode setmodeda bolsa mode xolatga bosilganda ozgartadi

  const onChange = () => {
    setMode(!mode);
  };
  return (
    <IconContext.Provider value={{ color: "", size: "" }}>
      <Container>
        <MobContainer>
          <IconCon>
            <IoIosArrowBack className="arrow" />
            <FiPower className="power" />
          </IconCon>
          <ImgWrapper>
            <Img src={kitten} alt="logo img" />
            <ImgTitle>Be Coder</ImgTitle>
            <Desc>IT School</Desc>
          </ImgWrapper>
          {/* dark */}
          <Item>
            <IoIosMoon className="moon" />

            <Title>Dark mode</Title>

            <Switch
              //  onChange={setIsDarkMode}
              //  checked={isDarkMode}
              size={50}
              //bu toggleni ishlaish uchun bizga useState kerak boladi
            />
          </Item>
          <Item>
            <TbLayoutGridAdd className="grid" />

            <Title>Story</Title>
          </Item>
          <Item>
            <FiUserCheck className="check" />

            <Title>Chat heads</Title>
          </Item>
          <Item>
            <FiUserPlus className="plus" />

            <Title>Groups</Title>
          </Item>
          <Line />
          <Item>
            <AiOutlinePicture className="picture" />

            <Title>Media and Photos</Title>
          </Item>
          <Item>
            <FiSettings className="setting" />

            <Title>Setting and Privacy</Title>
          </Item>
          <Item>
            <BiComment className="comment" />

            <Title>Help center</Title>
          </Item>
          <Item>
            <FiBell className="bell" />

            <Title>Notification</Title>
          </Item>
        </MobContainer>
      </Container>
    </IconContext.Provider>
  );
};

export default HomePage;
