class PowerPlant {
    constructor(power) {
        this.power = power;
    }
}
class SolerPanel {
    constructor(type) {
        this.type = type;
        this.power = 0;
    }

    setPowerByType() {
        switch(type){
            case 1:
                this.power = 1;
                break;
            case 2:
                this.power = 2;
                break;
            case 3:
                this.power = 3;
                break;
            case 4:
                this.power = 4;
                break;
            case 5:
                this.power = 5;
                break;
        }
    }

    megawatsPerDay(){
        return this.power;
    }

    megawatsPerNight() {
        return 0;
    }
}

class Building {
    constructor(facilitiesNum) {
        this.facilitiesNum = facilitiesNum;
    }


}