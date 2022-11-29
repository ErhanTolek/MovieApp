export interface authResponse{
    idToken	:string	
    email:	string	
    refreshToken: string
    expiresIn:	string
    localId	: string	
    registered? :	boolean
}

export interface authBody{
    email : string
    password: string
    returnSecureToken : boolean
}