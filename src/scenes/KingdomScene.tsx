import React, { Fragment } from 'react';
import Collider from '../@core/Collider';
import GameObject from '../@core/GameObject';
import Interactable from '../@core/Interactable';
import ScenePortal from '../@core/ScenePortal';
import Sprite from '../@core/Sprite';
import TileMap, { TileMapResolver } from '../@core/TileMap';
import { mapDataString } from '../@core/utils/mapUtils';
import CoffeeMachine from '../entities/CoffeeMachine';
import PizzaPickup from '../entities/PizzaPickup';
import Plant from '../entities/Plant';
import Player from '../entities/Player';
import Workstation from '../entities/Workstation';
import GoldMine from '../entities/GoldMine';
import SulfurMine from '../entities/SulfurMine';
import GemMine from '../entities/GemMine';
import CoalMine from '../entities/CoalMine';
import CrystalMine from '../entities/CrystalMine';
import spriteData from '../spriteData';
import getWeightedRand from '../utils/mathUtils';

// const mapData = mapDataString(`
// ······················
// ·····················
// ············G········
// ·············H·······
// ·············I·······
// ·······K·············
// ····················
// ···················
// ···················
// ···················
// `);
const mapData = mapDataString(`
··················
·················
··················
········G·········
········H·········
········I·········
········K·········
··················
··················
·················
`);

const grassTypes = [
    { id: 'grass1', weight: 30 },
    { id: 'grass2', weight: 7 },
    { id: 'grass3', weight: 30 },
    { id: 'grass4', weight: 5 },
    { id: 'grass5', weight: 3 },
];
let grass;
const resolveMapTile: TileMapResolver = (type, x, y) => {
    grass = getWeightedRand(grassTypes);
    const key = `${x}-${y}`;
    const position = { x, y };
    const floor = (
        <GameObject key={key} {...position} layer="ground">
            <Sprite {...spriteData.land} state={grass} />
        </GameObject>
    );
    switch (type) {
        case '·':
            return floor;
        case 'o':
            return (
                <Fragment key={key}>
                    {floor}
                    <PizzaPickup {...position} />
                </Fragment>
            );
        case 'G':
            return (
                <Fragment key={key}>
                    {floor}
                    <GoldMine {...position} />
                </Fragment>
            );
        case 'H':
            return (
                <Fragment key={key}>
                    {floor}
                    <GemMine {...position} />
                </Fragment>
            );
        case 'I':
            return (
                <Fragment key={key}>
                    {floor}
                    <SulfurMine {...position} />
                </Fragment>
            );
        case 'J':
            return (
                <Fragment key={key}>
                    {floor}
                    <CoalMine {...position} />
                </Fragment>
            );
        case 'K':
            return (
                <Fragment key={key}>
                    {floor}
                    <CrystalMine {...position} />
                </Fragment>
            );

        default:
            return null;
    }
};

export default function KingdomScene() {
    return (
        <>
            <GameObject name="map">
                <ambientLight />
                <TileMap data={mapData} resolver={resolveMapTile} definesMapSize />
            </GameObject>
            <Player x={2} y={2} />
        </>
    );
}
