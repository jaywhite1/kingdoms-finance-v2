import React, { useRef } from 'react';
import Collider from '../@core/Collider';
import GameObject, { GameObjectProps } from '../@core/GameObject';
import Interactable, { InteractionEvent } from '../@core/Interactable';
import { useSound } from '../@core/Sound';
import Sprite, { SpriteRef } from '../@core/Sprite';
import useGameObject from '../@core/useGameObject';
import useGameObjectEvent from '../@core/useGameObjectEvent';
import soundData from '../soundData';
import spriteData from '../spriteData';

function SulfurMineScript() {
    const { getComponent } = useGameObject();
    const fillState = useRef(true);
    const playSfx = useSound(soundData.drinking);

    useGameObjectEvent<InteractionEvent>('interaction', () => {
        if (fillState.current) {
            fillState.current = false;
            getComponent<SpriteRef>('Sprite').setState('sulfurmine-empty');
            playSfx();
        }
    });

    return null;
}

export default function SulfurMine(props: GameObjectProps) {
    return (
        <GameObject {...props}>
            <Sprite {...spriteData.buildings} state="sulfurmine-full" />
            <Collider />
            <Interactable />
            <SulfurMineScript />
        </GameObject>
    );
}
