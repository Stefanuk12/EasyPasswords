// Enums
export enum PasswordStrength {
    Weak,
    Medium,
    Strong
}

// Interfaces
export interface IScoreTable {
    //
    [key: string]: number,

    // Additions
    Uppercase: number,
    Lowercase: number,
    Digit: number,
    Symbol: number,
    AllAbove: number,

    // Subtractions
    OnlyUpperLower: number,
    OnlyDigits: number,
    OnlySymbols: number,
    ThreeConsecutive: number
}

export interface IRegexTests {
    Uppercase: RegExp,
    Lowercase: RegExp,
    Digit: RegExp,
    Symbol: RegExp,
}

export interface IPassed {
    //
    [key: string]: boolean,

    //
    Uppercase: boolean,
    Lowercase: boolean,
    Digit: boolean,
    Symbol: boolean,
}

export interface IPasswordCheck {
    Score: number,
    Strength: PasswordStrength
}

//
export namespace PasswordManager {
    // Vars
    const QWERTYKeyboard = [
        "qwertyuiop",
        "asdfghjkl",
        "zxcvbnm"
    ]
    const RegexTests: IRegexTests = {
        Uppercase: /[A-Z]/,
        Lowercase: /[a-z]/,
        Digit: /\d+/,
        Symbol: /[!\$\%\^\&\*\(\)\-\_\=\+]+/
    }

    // Create a password class which will handle everything
    export class Password {
        // Configuration - if it contains Uppercase, for example, add how many points to the score
        static scoreTable: IScoreTable = {
            // Additions
            Uppercase: 5,
            Lowercase: 5,
            Digit: 5,
            Symbol: 5,
            AllAbove: 10,

            // Subtractions
            OnlyUpperLower: -5,
            OnlyDigits: -5,
            OnlySymbols: -5,
            ThreeConsecutive: -5
        }

        // Vars
        text: string

        // Constructor
        constructor(text: string = ""){
            // Set vars
            this.text = (text == "") ? Password.generate() : text
        }
    
        // Check the strength
        check(scoreConversion: IScoreTable = Password.scoreTable){
            // Vars
            let score: number = this.text.length
            let strength: PasswordStrength
            let passed: string[] = []
            let AllAboveTracker: boolean = true

            // Check against all of the criteria
            for (const [testType, tester] of Object.entries(RegexTests)){
                if (tester.test(this.text)){
                    // Keep track of passed tests
                    passed.push(testType)

                    // Add score
                    score += scoreConversion[testType]
                } else {
                    // Fails all above test
                    AllAboveTracker = false
                }
            }

            // Add score for all above
            if (AllAboveTracker){
                score += scoreConversion["AllAbove"]
            }

            // Check if only passes one test, and subtract how many points, depending on which
            if (passed.length == 1){
                score += scoreConversion[passed[0]]
            }

            // Loop through each characters in string
            for (let i = 0; i < this.text.length; i++){
                // Get next few characters
                const nextChars = this.text.substring(i, i + 3).toLowerCase()
            
                // Loop through each line in the qwerty keyboard
                for (const line of QWERTYKeyboard){
                    // Check if it contains the next chars
                    if (line.includes(nextChars)){
                        // Remove score
                        score += scoreConversion["ThreeConsecutive"]
                    }
                }
            }

            // Convert score
            if (score <= 0){
                strength = PasswordStrength.Weak
            } else if (score > 20) {
                strength = PasswordStrength.Strong
            } else {
                strength = PasswordStrength.Medium
            }

            // Return
            const returnValue: IPasswordCheck = {
                Score: score,
                Strength: strength
            }
            return returnValue
        }

        // Generate a password
        static generate(){
            return ""
        }
    }
}