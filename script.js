// Create an object called student with a property called name
let student = {
    name: 'John Doe'
};

// Add a property to the Object prototype called getKeys
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Now you can call getKeys on any object
console.log(student.getKeys()); // Outputs: ['name']
