import { SpriteProps } from './@core/Sprite';

const spriteData: { [index: string]: SpriteProps } = {
    ui: {
        src: './assets/ui.png',
        sheet: {
            'self-select': [
                [4, 0],
                [5, 0],
            ],
            select: [[4, 0]],
            dot: [[1, 0]],
            solid: [[0, 1]],
        },
    },
    player: {
        src: './assets/player.png',
        frameWidth: 79,
        frameHeight: 79,
        frameTime: 300,
        sheet: {
            default: [[0, 0]],
            walk: [
                [1, 1],
                [2, 2],
            ],
            action: [
                [0, 1],
                [2, 1],
            ],
        },
    },
    objects: {
        src: './assets/objects.png',
        frameWidth: 20,
        frameHeight: 20,
        sheet: {
            wall: [[1, 0]],
            'workstation-1': [[0, 1]],
            'workstation-2': [[1, 1]],
            'coffee-machine': [[2, 1]],
            'coffee-machine-empty': [[3, 1]],
            pizza: [[4, 1]],
            plant: [[0, 2]],
        },
    },
    land: {
        src: './assets/land/Land.png',
        frameWidth: 16,
        frameHeight: 16,
        sheet: {
            grass1: [[0, 0]],
            grass2: [[1, 0]],
            grass3: [[2, 0]],
            grass4: [[3, 0]],
            grass5: [[4, 0]],
        },
    },
    mines: {
        src: './assets/buildings/Mines.png',
        frameWidth: 128,
        frameHeight: 128,
        sheet: {
            goldmine: [[0, 0]],
            'goldmine-full': [[0, 4]],
            'goldmine-empty': [[1, 4]],
            gemmine: [[0, 0]],
            'gemmine-full': [[0, 3]],
            'gemmine-empty': [[1, 3]],
            sulfurmine: [[0, 0]],
            'sulfurmine-full': [[0, 2]],
            'sulfurmine-empty': [[1, 2]],
            coalmine: [[0, 0]],
            'coalmine-full': [[0, 1]],
            'coalmine-empty': [[1, 1]],
            crystalmine: [[0, 0]],
            'crystalmine-full': [[0, 0]],
            'crystalmine-empty': [[1, 0]],
        },
    },
    footstep: {
        src: './assets/footstep.png',
        sheet: {
            default: [
                [0, 0],
                [2, 0],
            ],
        },
        opacity: 0.75,
        frameTime: 150,
    },
};

export default spriteData;
