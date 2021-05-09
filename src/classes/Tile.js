import * as THREE from 'three'

class Tile extends THREE.Mesh {
    constructor(x, z, y=0, scale=.9, color=0xffffff, opacity=1) {
        let cubeGeometry = new THREE.BoxGeometry(scale, .5*scale, scale)
        let cubeMaterial = new THREE.MeshPhongMaterial()
        if(color === 'cycle') {
          cubeMaterial.color = new THREE.Color(0)
        } else {
          cubeMaterial.color = new THREE.Color(color)
        }
        cubeMaterial.blending = THREE.NoBlending
        cubeMaterial.transparent = true
        cubeMaterial.opacity = opacity

        super(cubeGeometry, cubeMaterial)
        this.position.x = x
        this.position.y = y+.325*scale
        this.position.z = z

        if(color === 'cycle') {
            this.cycleColor()
        }
    }

    getPosition() {
        return [this.position.x, this.position.z]
    }

    cycleColor() {
      const getRandomColor = () => {
          let letters = '0123456789ABCDEF'
          let color = '#'
          for (let i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)]
          }
          return color
      }
      
      this.material.color = new THREE.Color(getRandomColor())
      setTimeout(() => this.cycleColor(), 250)
    }

}

export default Tile