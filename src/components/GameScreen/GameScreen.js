import React from "react";
import ProgressScore from "./ProgressScore";
import SuccessModal from "./SuccessModal";
import FailModal from "./FailModal";
import OptionsModal from "./OptionsModal";
import Item from "./Item";
import LivesScore from "./LivesScore";
import { Container } from "../MasterCss";
import HowToPlayModal from "../LandingScreen/HowToPlayModal";
import FunFactsModal from "../LandingScreen/FunFacts";

import * as SC from "./GameScreen.style";

import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import { ReactComponent as PauseIcon } from "../../assets/pause-icon.svg";
import { ReactComponent as RecycleBin } from "../../assets/recycle-bin.svg";
import { ReactComponent as BlackBin } from "../../assets/waste-bin-tidyman.svg";
import { ReactComponent as CompostBin } from "../../assets/compostable-bin.svg";
import CoffeeCup from "../../images/coffee-cup2.svg";


const GameScreen = props => {
  const [currentItem, setCurrentItem] = React.useState({
    name: "كوب قهوة",
    src: CoffeeCup,
    bin: "حاوية ورق",
    binImg: "images/recycle-bin.svg",
    fact: "تعتبر أكواب القهوة من أكثر الأشياء استخدامًا وإهدارًا في العالم، حيث يتم استخدامها كل يوم والتخلص منها بشكل غير مستدام"
  });
  const [itemVisibility, setItemVisibility] = React.useState(true);
  const [successModal, setSuccessModal] = React.useState(false);
  const [failModal, setFailModal] = React.useState(false);
  const [optionsModal, setOptionsModal] = React.useState(false);

  const dropReaction = currentBin => {
    setItemVisibility(!itemVisibility);

    if (currentItem.bin === currentBin) {
      setSuccessModal(!successModal);
      props.setCount(props.count + 1);
    } else {
      setFailModal(!failModal);
      props.setBadCount(props.badCount + 1);
    }
  };

  const showOptionsModal = () => {
    setOptionsModal(!optionsModal);
  };

  return (
    <Container key="rendering">
      {successModal && (
        <SuccessModal
          item={currentItem}
          setCurrentItem={setCurrentItem}
          itemVisibility={itemVisibility}
          setItemVisibility={setItemVisibility}
          successModal={successModal}
          setSuccessModal={setSuccessModal}
        />
      )}
      {failModal && (
        <FailModal
          item={currentItem}
          setCurrentItem={setCurrentItem}
          itemVisibility={itemVisibility}
          setItemVisibility={setItemVisibility}
          failModal={failModal}
          setFailModal={setFailModal}
          badCount={props.badCount}
        />
      )}
      {optionsModal && (
        <OptionsModal
          optionsModal={optionsModal}
          setOptionsModal={setOptionsModal}
          setCount={props.setCount}
          setBadCount={props.setBadCount}
          funFactsModal={props.funFactsModal}
          setFunFactsModal={props.setFunFactsModal}
          howToPlayModal={props.howToPlayModal}
          setHowToPlayModal={props.setHowToPlayModal}
          showFunFactsModal={props.showFunFactsModal}
          hideFunFactsModal={props.hideFunFactsModal}
          hideHowToPlayModal={props.hideHowToPlayModal}
          showHowToPlayModal={props.showHowToPlayModal}
        />
      )}

      {props.howToPlayModal && (
        <HowToPlayModal handleClose={props.hideHowToPlayModal}></HowToPlayModal>
      )}
      {props.funFactsModal && (
        <FunFactsModal handleClose={props.hideFunFactsModal}></FunFactsModal>
      )}

      <SC.Header>
        <PauseIcon onClick={showOptionsModal} cursor="pointer"/>
        <SC.LivesContainer>
          <LivesScore
            badCount={props.badCount}
            successModal={successModal}
            failModal={failModal}
          />
        </SC.LivesContainer>
        <ProgressScore gameScreen count={props.count} />
      </SC.Header>

    
      <SC.Wave2 />
      <SC.Wave3 />
      <SC.Wave4 />

      <SC.GameItem>
        <DragDropContainer targetKey="bins">
          {itemVisibility && (
            <Item
              item={currentItem}
              itemVisibility={itemVisibility}
              setItemVisibility={setItemVisibility}
            />
          )}
        </DragDropContainer>
      </SC.GameItem>

      <SC.BlackBinBox>
        <DropTarget
          targetKey="bins"
          onHit={() => {
            dropReaction("حاوية ورق");
          }}
        >
          <BlackBin title="blackbin" />
        </DropTarget>
      </SC.BlackBinBox>

      <SC.RecycleBinBox>
        <DropTarget
          targetKey="bins"
          onHit={() => {
            dropReaction("حاوية بلاستيك");
          }}
        >
          <RecycleBin title="recyclebin" />
        </DropTarget>
      </SC.RecycleBinBox>

      <SC.CompostBinBox>
        <DropTarget
          targetKey="bins"
          onHit={() => {
            dropReaction("حاوية معدن");
          }}
        >
          <CompostBin title="compostbin" />
        </DropTarget>
      </SC.CompostBinBox>

      <SC.Wave5 />

      <SC.ItemText>{currentItem.name}</SC.ItemText>
    </Container>
  );
};

export default GameScreen;

