This will be some pseudocode on some things, not on every aspect.

## Generate password
```python
while (true):
    password = ""
    for i in range(1, passwordLength):
        password += randomCharacter(characterSet)

    if (checkPassword(password) == "strong"):
        return password
```
