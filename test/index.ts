// Dependencies
import { PasswordManager, IPasswordCheck, PasswordStrength } from "../src/modules/PasswordManager";

// Vars
interface ITestPasswords { 
    [key: string]: IPasswordCheck
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
console.log(`Check Test passed!`)