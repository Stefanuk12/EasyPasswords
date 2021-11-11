export interface IMenuData {
    Name: string;
    Description: string;
    Function: Function;
}
export declare class Menu {
    items: IMenuData[];
    constructor(items?: IMenuData[]);
    add(data: IMenuData): void;
    display(): void;
    prompt(): IMenuData;
    execute(): void;
}
//# sourceMappingURL=Menu.d.ts.map