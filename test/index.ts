// Dependencies
import { PasswordManager, IPasswordCheckReturn, PasswordStrength } from "../src/modules/PasswordManager";

// Vars
interface ITestPasswords { 
    [key: string]: IPasswordCheckReturn
}
const TestPasswords: ITestPasswords = {
    "aSD7V^&*gS77+": {Score: 38, Strength: PasswordStrength.Strong},
    "qwerty123": {Score: -1, Strength: PasswordStrength.Weak}
}

// Loop through each test password and check if the expected test password matches the output
for (const TestPassword in TestPasswords){
    // Vars
    const ExpectedResult = TestPasswords[TestPassword]
    const _Password = new PasswordManager.Password(TestPassword)

    // Make sure it all matches
    const Result = _Password.check()
    if (Result.Score != ExpectedResult.Score && Result.Strength != ExpectedResult.Strength){
        // Output
        console.error(`Check Test failed (${TestPassword}) - Expected: ${ExpectedResult.Strength} (${ExpectedResult.Score}) - Got: ${Result.Strength} (${Result.Score})`)

        // Exit
        process.exit(1)
    }
}

//
console.log("Check Test passed!")

// Loop three times
for (let i = 0; i < 3; i++){
    // Generate a password
    const _Password = new PasswordManager.Password()

    // Check the password, and make sure the results are as expected
    const Result = _Password.check()
    if (Result.Score < 20 && Result.Strength != PasswordStrength.Strong){
        // Output
        console.error(`Generate Test failed (${_Password.text}) - Expected: 2 (> 20) - Got: ${Result.Strength} (${Result.Score})`)

        // Exit
        process.exit(1)
    }
}

//
console.log("Generate Test passed!")

//
console.log("All tests passed!")