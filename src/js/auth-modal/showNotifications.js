import refreshToken from './refresh-token';

const sid = sessionStorage.getItem('sid');
const freshToken = sessionStorage.getItem('refresh');

export default function showNotifications  ( message )  { 
    if (message === 'Unauthorized') {
        refreshToken({sid: `${sid}`}, freshToken)
        return 
    }
}
