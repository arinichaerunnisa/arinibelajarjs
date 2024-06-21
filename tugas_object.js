const person = {
    firstname : "John",
    lastname : "Doe",
    fullname : function() {
        return (this.firstname + " " + this.lastname);
    }
}
console.log(person.fullname());