// Dependencies
import { question } from "readline-sync"
import { PasswordManager, PasswordStrength } from "./modules/PasswordManager"

// Asks and checks a password
function PromptCheck(){
    // Get the password
    const text = question("Please input the password you wish to check: ")

    // Create password class
    const _Password = new PasswordManager.Password(text)

    // Output
    console.log(`Your password is ${PasswordStrength[_Password.strength]}, and has an overall rating of ${_Password.score} points!`)
}

// Displays the menu
function DisplayMenu(){

}

// Constant loop
while (false){

}

//
PromptCheck()