export declare enum PasswordStrength {
    Weak = 0,
    Medium = 1,
    Strong = 2
}
export interface IScoreTable {
    [key: string]: number;
    Uppercase: number;
    Lowercase: number;
    Digit: number;
    Symbol: number;
    AllAbove: number;
    OnlyUpperLower: number;
    OnlyDigits: number;
    OnlySymbols: number;
    ThreeConsecutive: number;
}
export interface IRegexTests {
    Uppercase: RegExp;
    Lowercase: RegExp;
    Digit: RegExp;
    Symbol: RegExp;
}
export interface IPassed {
    [key: string]: boolean | undefined;
    Uppercase?: boolean;
    Lowercase?: boolean;
    Digit?: boolean;
    Symbol?: boolean;
}
export interface IPasswordCheckReturn {
    Score: number;
    Strength: PasswordStrength;
}
export interface IGenerateOptions extends IPassed {
}
export interface IGenerateReturn {
    text: string;
    strength: PasswordStrength;
    score: number;
}
export interface ICharacterSet {
    [Symbol.iterator](): IterableIterator<string>;
    Uppercase: string;
    Lowercase: string;
    Digit: string;
    Symbol: string;
}
export declare namespace PasswordManager {
    class Password {
        static scoreTable: IScoreTable;
        text: string;
        strength: PasswordStrength;
        score: number;
        constructor(text?: string);
        static checkInput(text: string): boolean;
        check(scoreConversion?: IScoreTable): IPasswordCheckReturn;
        static generate(options?: IGenerateOptions): IGenerateReturn;
    }
}
//# sourceMappingURL=PasswordManager.d.ts.map