export class Toode {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public isActive: boolean
    ) {}
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }
}

