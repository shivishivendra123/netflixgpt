const validatefields = (email,password) =>{
    const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email);
    const isValidPass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    if(!isValidEmail) return 'Email is not Valid';
    if(!isValidPass) return 'Password is not valid';

    return null;
}

export default validatefields;
