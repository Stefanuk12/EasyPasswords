## Checks
If the user fails the following checks, then an error message would be displayed.

#### Password Length
The length **must** be between **8-24 characters**.

#### Allowed characters
The program **must** check whether the characters within the password are allowed. The following characters are allowed:

- Alphanumeric Characters
- Allowed Symbols (see below)

#### Allowed Symbols
If the user inputs any symbols, these are the allowed ones.

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

!!! warning
    The space character is not allowed

## Score Calculation
The following will explain how the program should calculate a password's total score.

### Additions
If the password contains any of the following, it will recieve the configurated amount of points. By default it is 5 points.

- A Uppercase Character
- A Lowercase Character
- A Digit
- An Allowed Symbol

!!! success
    If it includes **all** of the above, it will recieved the configured amount of points. By default it is 10 points.

### Subtractions
However, if it contains only the following, it will recieve the configured amount of points. By default it is -5 points.

- Upper/Lowercase Characters
- Digits
- Allowed Symbols
- Consecutive (three) characters on the UK QWERTY keyboard, **within the same row**

## Strength Determination
To determine the strength, you must calculate the score first then you can input it within this table.

| Score | Strength |
| ----- | -------- |
| =< 0  | Weak     |
| 1-20  | Medium   |
| 21+   | Strong   |