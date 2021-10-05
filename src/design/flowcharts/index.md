
## Password Class

### Constructor
```mermaid
graph LR

A[Start] --> B{Given text?}

B -->|No| C[[Generate Password]]
C --> Set text, strength, score

B --->|Yes| D[Set text]
D --> E[[Check Password]]
F --> Set score, strength
```

### Check Input
```mermaid
graph LR

A[Start] --> B{Is text length between 8-24 characters}
B -->|No| Print out error, and return false

B --->|Yes| C{Includes illegal Characters?}

C -->|No| Print out error, and return false

C -->|Yes| Return true
```