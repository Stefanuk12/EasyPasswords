Most of the aspects within the code I think are built well, however there are some improvements one could make to make it more user-friendly.

## Possible Improvements

### Using React
React would allow the user to interact with the program in a graphical way, making it more intuative, and user-friendly. Some people may not be that technical and unsure about how to use a command-line program.

In addition, React would allow the program to automatically disallow the usage of disallowed characters and alert the user straight away.

### Help Menu
A user using the program for the first time may not know that spaces are not allowed - for example. A help menu outlining all of the details would help the user understand the usage better.

### Limitations
There are quite a few limitations listed by the [**Success Criteria**](../../analysis/successcriteria/passwordchecker/), like the limited 8-24 character strength. What if the user wanted a 30 character password?

Perhaps a better method of "scoring" a password would be better.

### Regex Usage
The way I used Regex may not have been the most efficient, perhaps putting it all into one and using capture groups or something may be a more performant method.

In general, there might be a better way of doing regex, especially the one for checking illegal characters which I hard coded since I didn't know how to do that in regex.