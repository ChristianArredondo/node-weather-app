var getUser = (id, callback) => {
  let user = {
    id,
    name: 'Vikram'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, (userObj) => {
  console.log(userObj);
});