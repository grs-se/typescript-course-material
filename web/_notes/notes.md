# Framework Structure

- Probably need to create a class to represent a User and all of its data (name, age, etc);
- User class needs to have the ability to store some data, retrieve it, and change it;
- Also needs to have the ability to notify the rest of the app when some data is changed;
- User needs to be able to persist data to an outside server, and then retrieve it at some future point;

<br/>
<hr/>

# Extraction Approach

- Build a User as a 'mega' class with tones of methods
- Refactor User to use composition
- Refactor User to be a reusable class that can represent any piece of data, not just a User

# Notes
- Remember interfaces are not only used to somehow get some amount of code reuse between different classes they are also used to create types that describe object literals. 

- Type Union: (number | string)
