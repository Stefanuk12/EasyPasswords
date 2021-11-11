"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const readline_sync_1 = require("readline-sync");
const Menu_1 = require("./modules/Menu");
const PasswordManager_1 = require("./modules/PasswordManager");
// Asks and checks a password, outputting the strength and score
function CheckPassword() {
    // Get the password
    const text = readline_sync_1.question("Please input the password you wish to check: ");
    // Make sure text is a valid input
    if (!PasswordManager_1.PasswordManager.Password.checkInput(text)) {
        return;
    }
    // Create password class
    const _Password = new PasswordManager_1.PasswordManager.Password(text);
    // Output
    console.log(`Your password has "${PasswordManager_1.PasswordStrength[_Password.strength]}" strength, and has an overall rating of ${_Password.score} points!`);
}
// Generates a password, with the option to input symbols, giving the password and score
function GeneratePassword() {
    // See whether the user wants to use symbols
    const includeSymbols = readline_sync_1.question("Do you want to include symbols? [Y/N]: ") == "Y";
    // Generate a password
    const passwordData = PasswordManager_1.PasswordManager.Password.generate({
        Lowercase: true,
        Uppercase: true,
        Digit: true,
        Symbol: includeSymbols
    });
    // Output
    console.log(`Your generated password is ${passwordData.text} . It has a score of ${passwordData.score} points!`);
}
// Quits the program
function QuitProgram() {
    // Say exit message
    console.log("Goodbye!");
    // Exit
    process.exit(1);
}
// Create a menu
const menu = new Menu_1.Menu();
// Add all of the menu items
menu.add({
    Name: "Check Password",
    Description: "Check your password's strength and score",
    Function: CheckPassword
});
menu.add({
    Name: "Generate Password",
    Description: "Generate a random and secure password",
    Function: GeneratePassword
});
menu.add({
    Name: "Quit.",
    Description: "Quit the program",
    Function: QuitProgram
});
// Constant loop
while (true) {
    // Display the menu
    menu.display();
    // Execute the menu
    menu.execute();
}
//# sourceMappingURL=index.js.map