

export class User {

    uid !: number;
    username !: String;
    password !: String;
    firstname !: String;
    lastname !: String;
    email !: String;
    phone !: String;
    enabled !: boolean;
    profile !: String;

   authorities !: Set<String>;
}
