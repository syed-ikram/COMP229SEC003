//default
let add =(x=1,y=2) => x+y;
add();
add(3,8);

//rest feature
function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + '    friends');
}
userFriends('User', 'Bob', 'Alice');

//spread feature
function userTopFriends(firstFriend, secondFriend, thirdFriends) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriends);
}
userTopFriends(...['Alice', 'Bob', 'Michelle'])