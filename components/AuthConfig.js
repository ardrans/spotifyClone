import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';

WebBrowser.maybeCompleteAuthSession();

export const useGoogleAuth = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '433003976160-t0qgmb8v02jg7vk9fu7g2i5a6qb3njbn.apps.googleusercontent.com' 
    ,
    webClientId: '433003976160-e8ct4n13gjsrh9odo8uiiqfljgqsiuab.apps.googleusercontent.com' 
    ,
    expoClientId: '433003976160-e8ct4n13gjsrh9odo8uiiqfljgqsiuab.apps.googleusercontent.com' 
    , 
  });

  return { request, response, promptAsync };
};
