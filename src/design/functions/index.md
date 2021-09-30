All of the main functionality is within the [**PasswordManager**](https://github.com/Stefanuk12/EasyPasswords/blob/main/src/modules/PasswordManager.ts) namespace - more specifically, within the [**Password**](https://github.com/Stefanuk12/EasyPasswords/blob/main/src/modules/PasswordManager.ts#L92) class.

## Password Class
These is how the functions within the [**Password**](https://github.com/Stefanuk12/EasyPasswords/blob/main/src/modules/PasswordManager.ts#L92) class would work.

!!! note
    I may sometimes say `add` points whenever I should be subtracting. This is because you should be adding a negative amount of points. This allows it to be configurable.

### Constructor
Firstly, it would generate a random password - if one was not given. If a password was given, it will check whether the input is valid, as well as against the [**Success Criteria**](../../analysis/successcriteria/passwordchecker.md/). It should output the strength, and score, then set a class variable. This means the user can do
```ts
password = new Password(input("Enter Password: "))
``` 
and instantly output the score and strength by doing 
```ts
print(password.strength + " " + password.score)
```

### Check Input
This would be a static member function of the class. All it will do is check against these [**Checks**](../../analysis/successcriteria/passwordchecker.md/#checks) and error if there is any failed checks.

#### Return
It would return a boolean value.

### Check
This function would calculate the password's score and strength.

#### Additions
It should, firstly, check each [**Addition**](../../analysis/successcriteria/passwordchecker.md/#additions) check, and add the corrosponding points - as well as append the passed check to an array for later. 

If the password fails a test, the holder variable for seeing whether the password passed all of the checks would be set to `false`.

After these checks, if the holder variable is `true`, it would add the corrosponding points for `AllAbove` - which, by defualt, is 10.

#### Subtractions
After adding points on, the program should remove points based upon the [**Subtraction**](../../analysis/successcriteria/passwordchecker.md/#subtractions) checks.

Using the abforementioned array, we can check whether the user has inputted a password has only one criteria - e.g. only uppercase characters. If the length of the array is 1, we can get the first element, and add the corrosponding points (usually a negative number).

##### Consecutive characters
To achieve this, we can iterate through the number of characters. From that number, we can get the next (three) characters within the password. We should have an array of each line from the UK QWERTY Keyboard. Now, loop through that array and check whether the line contains those (three) next characters we got earlier. If it does, add the corrosponding points (-10, by default).

#### Score to Strength
Since we have the amount of score / points, we can then do the following:
- less or equal to zero = weak
- larger than 20 = strong
- else = medium

#### Return
With everything calculated, we can return the score and strength within a dictionary for the program.

### Generate
This function would generate a random, and strong password for the user and return it - along with the score.

Firstly, we would enter an infinite loop and it would generate a random number between 8-12 for the length.

Then, we iterate through a range of the length, from 0. Each iteration would generate a random character that would be appended to a variable holding the generated password.

After that, make sure that the password is strong by calculating its score. If it is, break out of the while loop.

#### Return
It should return the password, the score, and strength within a dictionary.

## Menu Class
This class would manage how the menu is displayed to the user. It allows for an automated way of adding items to the menu easily, making this program easy to expand upon.

### Constructor
It would allow you to set the items (within the menu), if specified.

### Add
This would add an item into the menu item array.

### Display
This would iterate through each item in the menu item array, and print it out.

### Prompt
This would prompt the user to choose an option from the menu item array. It should have some failsafes to make sure the user doesn't input anything incorrectly.

#### Return
The option the user has selected

### Execute
This would prompt the user, as said above, and execute the function associated with the option.

## Index
This is all of the functions within the main index file

### Check Password
This would prompt the user for a password to enter, making sure it is valid using the Password Input Check function. If it is not valid, it would return (the input check function would error for us). From there, it'll create a new password class where it automatically calculates the strength and score. After that, it would output the password's strength and score.

### Generate Password
Firstly, this would ask the user if they would like to use symbols in their password.