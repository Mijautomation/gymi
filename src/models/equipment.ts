import { EquipmentGroup } from './equipment-group';


export class Equipment {
    private _id: number;

    private _name: string;

    private _img: string;

    private _equipmentGroup: EquipmentGroup;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get img(): string {
        return this._img;
    }

    set img(value: string) {
        this._img = value;
    }

    get equipmentGroup(): EquipmentGroup {
        return this._equipmentGroup;
    }

    set equipmentGroup(value: EquipmentGroup) {
        this._equipmentGroup = value;
    }
}