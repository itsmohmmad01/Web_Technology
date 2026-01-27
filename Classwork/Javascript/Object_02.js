//2.Object Singleton

const user =new Object(); //singleton object creation
console.log(user); //empty object

const user2=new Object();
user2.id=101;
user2.name="Mohmmad Nuh";
user2.city="Sangli";
user2.email="mohmmad@gmail.com"
user2.islogin=true;
user2.lastLogin=['Monday','Tuesday','Wednesday'];
user2.age=21;
console.log(user2); 

//object within object
const regularUser = new Object();
regularUser.email = "mohmmad@gmail.com";
regularUser.user = {
    fullname: {
        fn: "Mohmmad",
        ln: "Nuh"
    }
};
console.log(regularUser);
console.log(regularUser.user.fullname.fn);
