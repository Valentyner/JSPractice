class Randoming {
    static nextDouble(low, high) {
        let rand = low - 0.5 + Math.random() * (high - low + 1);
        return rand
    }

    static nextInt(low, high) {
        let rand = low - 0.5 + Math.random() * (high - low + 1);
        return Math.round(rand);
    }

    static nextElement(low, array) {
        let rand = low - 0.5 + Math.random() * (array.length - low + 1);
        return array[Math.round(rand)]
    }
}



console.log(Randoming.nextDouble(1, 100));
console.log(Randoming.nextInt(1, 100));
console.log(Randoming.nextElement(1, [1, 3, 7, 13, 23, 45, 56]));
