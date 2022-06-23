# Useful Mongoose Info

## Difference between methods and statics
[Typescript mongoose methods, statics](https://millo-l.github.io/Typescript-mongoose-methods-statics/)

When methods are used, 'this' is the object called method, and when using statistics, 'this' is the model itself, regardless of the object called statistics".

### methods
Thus, in the above code, setPassword and checkPassword can set a password for each object or determine whether it matches the password for that object.

### statics
FindByUsername, on the other hand, can find and return the username within the model.
