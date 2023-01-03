import Realm from 'realm';

// Returns the shared instance of the Realm app.
export function getRealmApp() {

    const appId = 'minimal-avprn'; // Set App ID here.
    const appConfig = {
        id: appId,
        timeout: 10000,
    };

    return new Realm.App(appConfig);
}

// export async function getRealmAppWithAccount() {
//
//     const credentials = Realm.Credentials.anonymous();
//
//     try {
//
//         await getRealmApp().logIn(credentials)
//         return getRealmApp()
//
//     } catch (e) {
//
//         console.log(e)
//     }
//
// }

// @ts-ignore
export const RealmApp =  getRealmApp()
