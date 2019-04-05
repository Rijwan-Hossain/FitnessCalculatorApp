


// Object 

var user1 = {
    name: 'Omar Faruk', 
    isAuthenticated: false, 
    age: 23, 
    skills: {
        php: '70%', 
        js: '80%', 
        html: '75%'
    }, 
    func: () => { 
        for(let i in user1.skills) { 
            console.log(`${user1.name}\'s skill on ${i.toUpperCase()} is ${user1.skills[i]}`); 
        } 
    } 
} 

user1.func();  
