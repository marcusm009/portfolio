import fs from 'fs'
import * as THREE from 'three'
import Tile from './Tile'

class Floor {
    constructor(scale, colors=[0xffffff], colorProb=[1]) {
        this.tiles = [];
        this.goalTile = undefined;

        this.scale = scale;

        this.colors = colors;
        this.colorProb = colorProb;

    }

    async loadTemplate(templatePath) {
        await fetch(templatePath)
        .then(res => res.text())
        .then((template) => {
            this.template = template.split('\n').map(row => row.split('\t'));
            this.addTiles();
        });
    };

    setTemplate(template) {
      this.template = template
      this.addTiles()
    }

    addTiles() {
        for (let z = 0; z < this.template.length; z++) {
            for (let x = 0; x < this.template[z].length; x++) {
                if (this.template[z][x].toLowerCase() == 'x') {
                    this.tiles.push(new Tile(x, z));
                }
                else if (this.template[z][x].toLowerCase() == 's') {
                    if (this.spawnTile != undefined) {
                        console.log('ERROR: Multiple spawn tiles! Please fix level template')
                    }
                    this.spawnTile = new Tile(x, z, 0, .9, 0xd4d4d4, 'spawn');
                    this.tiles.push(this.spawnTile);
                }
                else if (this.template[z][x].toLowerCase() == 'g') {
                    if (this.goalTile != undefined) {
                        console.log('ERROR: Multiple goal tiles! Please fix level template')
                    }
                    this.goalTile = new Tile(x, z, 0, .9, 0xffbd9e, 'goal');
                    this.tiles.push(this.goalTile);
                }
            }
        }
    }

    addToScene(scene) {
        for (let tile of this.tiles) {
            scene.add(tile);
        }
    }

    getBlockInLocation(pos) {
        let xInt = Math.round(pos[0]);
        let zInt = Math.round(pos[1]);
        if (xInt < 0 || zInt < 0 || xInt >= this.template[0].length || zInt >= this.template.length) {
            return '';
        }
        return this.template[zInt][xInt].toLowerCase();
    }

    hasBlockInLocation(pos) {
        return ['x','s','g'].includes(this.getBlockInLocation(pos));
    }

    hasGoalInLocation(pos) {
        return this.getBlockInLocation(pos) == 'g';
    }

    getPositions() {
        let positions  = [];
        for (let tile of this.tiles) {
            positions.push(tile.position);
        }
        return positions;
    }

    completeLevel() {
        this.goalTile.position.z = 100000;
    }
}

export default Floor