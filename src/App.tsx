import { css, Global } from '@emotion/core';
import React from 'react';
import AssetLoader from './dapp/@core/AssetLoader';
import Game from './dapp/@core/Game';
import Scene from './dapp/@core/Scene';
import SceneManager from './dapp/@core/SceneManager';
import useWindowSize from './dapp/@core/useWindowSize';
import KingdomScene from './dapp/scenes/KingdomScene';
import OtherScene from './dapp/scenes/OtherScene';
import soundData from './dapp/soundData';
import spriteData from './dapp/spriteData';
import globalStyles from './dapp/styles/global';


import Modal from "react-bootstrap/Modal";
import { useService } from "@xstate/react";

import {
  service,
  Context,
  BlockchainEvent,
  BlockchainState,
} from "./machine";

import {

  Welcome,
  // Creating,
  // Saving,
  // Error,
  // TimerComplete,
  // Unsupported,
  // SaveError,
  // GasWarning,
} from "./dapp/components/ui/modals";

const styles = {
    root: (width: number, height: number) => css`
        display: flex;
        width: ${width - (width % 2)}px;
        height: ${height - (height % 2)}px;
        justify-content: center;
        align-items: center;
    `,
};

const urls = [
    ...Object.values(spriteData).map(data => data.src),
    ...Object.values(soundData).map(data => data.src),
    // flatten
].reduce<string[]>((acc, val) => acc.concat(val), []);

export default function App() {
    const [width, height] = useWindowSize();

    const [machineState, send] = useService<
      Context,
      BlockchainEvent,
      BlockchainState
    >(service);
    
    const getStarted = () => {
      send("GET_STARTED");
    };


    return (
        <>
          <Modal centered show={machineState.matches("initial")}>
            <Welcome onGetStarted={getStarted} />
          </Modal>
            <Global styles={globalStyles} />
            <div css={styles.root(width, height)}>
                <Game cameraZoom={80}>
                    <AssetLoader urls={urls} placeholder="Travelling to your kingdom ...">
                        <SceneManager defaultScene="kingdom">
                            <Scene id="kingdom">
                                <KingdomScene />
                            </Scene>
                            <Scene id="other">
                                <OtherScene />
                            </Scene>
                        </SceneManager>
                    </AssetLoader>
                </Game>
            </div>
        </>
    );
}
