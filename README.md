# EasyPasswords ( The Task )
A simple and open-source password generator and checker, built in Typescript (and possibly React, if I decide to add a GUI).
- This project is for my GCSE Computer Science NEA

## Basic Features
- [x] Password Checker
- [ ] Password Generator

## Password Checker Criteria
All of the following is configurable, and dictates how a "password score" is made.

### Additions
If the password contains any of the following, they would get the configured amount of points (5)
- Lowercase characters
- Uppercase characters
- Digits
- Symbols
- All of the above

### Subtractions
If the password is only made up of the following, they would lose the configured amount of points (5)
- Lowercase and Uppercase characters
- Digits
- Symbols
- Three consecutive characters (on same UK QWERTY keyboard line)

### Score to Strength
| Score | Strength |
| ----- | -------- |
| =< 0  | Weak     |
| 1-20  | Medium   |
| 21+   | Strong   |

## Password Generator Criteria

### Process
- Generate a random number (8-12 characters long), this will be the length
- Generate random sequence of alphanumeric characters, but also symbols if specified
- Calculate the score for the password
- Repeat the past few steps until the password is "strong"
- Display password and point score
- Return

### Allowed characters
- Letters
- Digits
- Symbols (only the allowed ones)

#### Allowed Symbols
- !
- $
- %
- ^
- &
- \*
- (
- )
- \-
- _
- =
- \+

**The space character is not allowed**
