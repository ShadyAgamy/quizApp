class AuthService {

  login(user) {
    return new Promise( resolve =>  {
        setTimeout(resolve, 2000);
    })
   
  }


}

export default new AuthService();
