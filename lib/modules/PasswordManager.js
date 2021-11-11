"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordManager = exports.PasswordStrength = void 0;
// Enums
var PasswordStrength;
(function (PasswordStrength) {
    PasswordStrength[PasswordStrength["Weak"] = 0] = "Weak";
    PasswordStrength[PasswordStrength["Medium"] = 1] = "Medium";
    PasswordStrength[PasswordStrength["Strong"] = 2] = "Strong";
})(PasswordStrength = exports.PasswordStrength || (exports.PasswordStrength = {}));
var PasswordManager;
(function (PasswordManager) {
    // Vars
    const QWERTYKeyboard = [
        "qwertyuiop",
        "asdfghjkl",
        "zxcvbnm"
    ];
    const CharacterSets = {
        Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        Lowercase: "abcdefghijklmnopqrstuvwxyz",
        Digit: "0123456789",
        Symbol: "!$%^&*()-_=+"
    };
    const FullCharacterSet = Object.values(CharacterSets).join("");
    const RegexTests = {
        Uppercase: /[A-Z]/,
        Lowercase: /[a-z]/,
        Digit: /\d+/,
        Symbol: /[!\$\%\^\&\*\(\)\-\_\=\+]+/
    };
    // Create a password class which will handle everything
    class Password {
        // Constructor
        constructor(text) {
            this.strength = PasswordStrength.Weak;
            this.score = 0;
            // Check if not given any text
            if (!text) {
                // Generate a random password
                const generatedPassword = Password.generate();
                // Set vars
                this.text = generatedPassword.text;
                this.strength = generatedPassword.strength;
                this.score = generatedPassword.score;
            }
            else {
                // Set text
                this.text = text;
                // Vars
                const checked = this.check();
                // Set vars
                this.strength = checked.Strength;
                this.score = checked.Score;
            }
        }
        // Checks whether the input has right length and no illegal characters
        static checkInput(text) {
            // Vars
            const textLength = text.length;
            // Check the text's length is between 8-24 characters
            if (textLength < 8 || textLength > 24) {
                console.log("Invalid input, check the password length");
                return false;
            }
            // Check if contains any illegal characters
            for (const character of text) {
                if (!FullCharacterSet.includes(character)) {
                    console.log("Invalid input, illegal characters");
                    return false;
                }
            }
            //
            return true;
        }
        // Check the strength
        check(scoreConversion = Password.scoreTable) {
            // Vars
            let score = this.text.length;
            let strength;
            let passed = [];
            let AllAboveTracker = true;
            // Check against all of the criteria
            for (const [testType, tester] of Object.entries(RegexTests)) {
                if (tester.test(this.text)) {
                    // Keep track of passed tests
                    passed.push(testType);
                    // Add score
                    score += scoreConversion[testType];
                }
                else {
                    // Fails all above test
                    AllAboveTracker = false;
                }
            }
            // Add score for all above
            if (AllAboveTracker) {
                score += scoreConversion["AllAbove"];
            }
            // Check if only passes one test, and subtract how many points, depending on which
            const OnlyUpperLower = passed.length == 2 && passed.includes("Uppercase") && passed.includes("Lowercase");
            if (passed.length == 1 || OnlyUpperLower) {
                const Type = OnlyUpperLower && "OnlyUpperLower" || `Only${passed[0]}`;
                console.log(Type, OnlyUpperLower);
                score += scoreConversion[Type];
            }
            // Loop through each characters in string
            for (let i = 0; i < this.text.length; i++) {
                // Get next few characters
                const nextChars = this.text.substring(i, i + 3).toLowerCase();
                // Loop through each line in the qwerty keyboard
                for (const line of QWERTYKeyboard) {
                    // Check if it contains the next chars
                    if (line.includes(nextChars)) {
                        // Remove score
                        score += scoreConversion["ThreeConsecutive"];
                    }
                }
            }
            // Convert score
            if (score <= 0) {
                strength = PasswordStrength.Weak;
            }
            else if (score > 20) {
                strength = PasswordStrength.Strong;
            }
            else {
                strength = PasswordStrength.Medium;
            }
            // Return
            const returnValue = {
                Score: score,
                Strength: strength
            };
            return returnValue;
        }
        // Generate a password
        static generate(options = { Uppercase: true, Lowercase: true, Digit: true }) {
            // Vars
            let _password;
            const length = Math.floor(Math.random() * (12 - 8 + 1) + 8);
            let characterSet = "";
            // Get character set from options
            for (const [name, set] of Object.entries(CharacterSets)) {
                // Make sure is allowed within options
                if (options[name]) {
                    // Add set onto current set
                    characterSet += set;
                }
            }
            const characterSetLength = characterSet.length;
            // Constant loop
            let text = "";
            let score;
            while (true) {
                // Reset Text
                text = "";
                //
                for (let i = 0; i < length; i++) {
                    // Add random characters from set onto text
                    text += characterSet.charAt(Math.floor(Math.random() * characterSetLength));
                }
                // Create password
                _password = new Password(text);
                // Check strength
                if (_password.score > 20 && _password.strength == PasswordStrength.Strong) {
                    // Set score and break
                    score = _password.score;
                    break;
                }
            }
            // Return password
            const returnValue = {
                text: text,
                strength: PasswordStrength.Strong,
                score: score
            };
            return returnValue;
        }
    }
    // Configuration - if it contains Uppercase, for example, add how many points to the score
    Password.scoreTable = {
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
    };
    PasswordManager.Password = Password;
})(PasswordManager = exports.PasswordManager || (exports.PasswordManager = {}));
//# sourceMappingURL=PasswordManager.js.map