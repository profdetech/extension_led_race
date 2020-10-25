//% weight=1001 color=#00aced icon="\uf128"
namespace LED_RACE_description{
/**
	 * P0 = haut parleur --
	 * P14 = non utilise --
	 * P1 = bouton joueur 1 --
	 * P15 = non utilise --
	 * P2 = bouton joueur 2 --
	 * P16 = non utilise --
	 * P12 = Ruban LED --
	 * P13 = non utilise --
	 * P8 = non utilise --
	 */
    //% blockId=descriptif
    //% block="Descriptif branchement"
	//% weight=99 blockGap=24
    export function descriptif(): void {
    }
}

//% weight=1000 color=#00aced icon="\uf128"
namespace LED_RACE_communiquer{

    /**
	 *initialisation du ruban led sur P12
	 */
    //% blockId=led_init
    //% block="led initialisation"
	//% weight=99 blockGap=24
    export function led_init(): void {
        let strip = neopixel.create(DigitalPin.P12, 30, NeoPixelMode.RGB)        
    }

  /**
	 *initialisation du ruban led sur P12
	 */
    //% blockId=led_joueur1
    //% block="afficher LED joueur 1"
	//% weight=99 blockGap=24
    export function led_joueur1(): void {
        let strip = neopixel.create(DigitalPin.P12, 30, NeoPixelMode.RGB) 
        strip.setPixelColor(0, 0)        
    }




}

