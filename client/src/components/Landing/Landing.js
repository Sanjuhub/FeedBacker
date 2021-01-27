import React, { useState } from "react";
import Video from "../../videos/landingVideo.mp4";
import { Button } from "../SharedElement";
import {
  LandingContainer,
  LandingBg,
  VideoBg,
  LandingContent,
  LandingH1,
  LandingP,
  ArrowForward,
  ArrowRight,
  LandingBtnWrapper,
} from "./LandingElements";

const Landing = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const renderContent = () => {
    switch (this.props.auth) {
      case null:
        return <div>No</div>;
      case false:
        return (
          <Button
            to="/"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Sign Up with Google{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        );
      default:
        return (
          <Button
            to="/survey"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Go to Dashboard{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        );
    }
  };

  return (
    <LandingContainer>
      <LandingBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </LandingBg>
      <LandingContent>
        <LandingH1>FeedBacker!</LandingH1>
        <LandingP>Collect feedback from your users.</LandingP>
        <LandingBtnWrapper>{renderContent}</LandingBtnWrapper>
      </LandingContent>
    </LandingContainer>
  );
};

export default Landing;
