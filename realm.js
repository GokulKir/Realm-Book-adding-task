import Realm from 'realm';


class Book extends Realm.Object{}

Book.schema={
    name:"Book",
    properties:{
        recordID:'int',
        Bookname:'string',
        Authorname:'string',
        Authordetail:'string',

    },
    primaryKey:'recordID',
}
let realm =new Realm({schema:[Book], schemaVersion: 4})

let getAllBook = () =>{
    return realm.objects("Book");
}

let addContact = (_recordID, _Bookname, _Authorname, _Authordetail) =>{
    realm.write(()=>{
        const contact = realm.create("Book",{
            recordID:_recordID,
            Bookname:_Bookname,
            Authorname:_Authorname,
            Authordetail:_Authordetail,


            
        })
    })
}

let deleteContact = () =>{
    realm.write(()=>{
        realm.deleteAll()
    })
}
export default realm;
export {getAllBook,addContact,deleteContact}