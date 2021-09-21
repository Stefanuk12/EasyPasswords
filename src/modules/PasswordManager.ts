//
export namespace PasswordManager {
    // Vars
    const RegexTests = {
        Uppercase: /[A-Z]/,
        Lowercase: /[a-z]/,
        Digit: /\d+/,
        Symbol: /[!\$\%\^\&\*\(\)\-\_\=\+]+/
    }

    // Create a password class which will handle everything
    export class Password {
        // Configuration - if it contains Uppercase, for example, add how many points to the score
        static const scoreTable = {
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
        constructor(text: string){
            // Set vars
            this.text = text
        }

        // Check the strength
        check(){
            // Vars
            let score = this.text.length

            // Check against all of the criteria
            var AllAboveTracker = false
            for (const testType in RegexTests){
                // Vars
                const tester = RegexTests[testType]

                // Check if passes test
                const success = tester.test(this.text)
                if (success){
                    // Add score
                    score += Password.scoreTable[testType]
                } else {
                    // Fails all above test
                    AllAboveTracker = false
                }
            }

            // Add score for all above
            if (AllAboveTracker){
                score += Password.scoreTable["AllAbove"]
            }
        }
    }
}