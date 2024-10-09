class ParentClass {
    // Data Fields
name;
age;
occupation;
    // Constructor
constructor(name, age, occcupation){
    this.name = name;
    this.age = age;
    this.occupation = occcupation;
}
    // Get Methods
    get name(){
        return this.name;
    }
    get age(){
        return this.age;
    }
    get occupation(){
        return this.occupation;
    }

    // Methods

}
class ChildClass extends ParentClass {
    // Constructor
    constructor(name, age, occcupation) {
        super(name,age , occcupation);
        this.additionalDataField = additionalDataField;
    }

    // Overriding the displayInfo method
    displayInfo() {
        super.displayInfo();
        console.log("Major: " + this.additionalDataField);
    }

    // Extending the displayInfoHTML method
    displayInfoHTML() {
        super.displayInfoHTML();
        const personElement = document.getElementById('personOne');
        personElement.innerHTML += `<br><strong>Major:</strong> ${this.additionalDataField}`;
    }
}


// Creating an instance of the Student class
const studentOne = new Student('James', 20, 'Student', 'Computer Science');

// Calling methods
studentOne.displayInfo()