exports.User = () => {

  let user = {
    firstName: "Erik",
    lastName: "Karlkvist"
  }

  return {
    getUser(){
      return getUser();
    }
  }

  function getUser(){
    return user;
  }
}
