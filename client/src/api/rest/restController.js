import http from '../interceptor';
import queryStrig from 'query-string';
// User
export const registerRequest = data => http.post('registration', data);
export const loginRequest = data => http.post('login', data);
export const getUser = () => http.post('getUser');
export const updateUser = data => http.post('updateUser', data);
export const cashOut = data => http.post('cashout', data);
export const changeMark = data => http.post('changeMark', data);
export const payMent = data => http.post('pay', data.formData);

// Chat
export const getPreviewChat = () => http.post('getPreview');
export const getDialog = data => http.post('getChat', data);
export const newMessage = data => http.post('newMessage', data);
export const changeChatFavorite = data => http.post('favorite', data);
export const changeChatBlock = data => http.post('blackList', data);
export const getCatalogList = data => http.post('getCatalogs', data);
export const addChatToCatalog = data => http.post('addNewChatToCatalog', data);
export const createCatalog = data => http.post('createCatalog', data);
export const deleteCatalog = data => http.post('deleteCatalog', data);
export const removeChatFromCatalog = data =>
  http.post('removeChatFromCatalog', data);
export const changeCatalogName = data => http.post('updateNameCatalog', data);
// Contets
export const updateContest = data => http.post('contests/updateContest', data);
export const dataForContest = data =>
  http.post('contests/dataForContest', data);
export const getCustomersContests = data =>
  http.get(`contests/customers?${queryStrig.stringify(data)}`);
export const getActiveContests = data =>
  http.get(`/contests?${queryStrig.stringify(data)}`);
export const getContestById = ({ contestId }) =>
  http.get(`contests/${contestId}`);
export const downloadContestFile = data =>
  http.get(`downloadFile/${data.fileName}`);
export const setNewOffer = data => http.post('setNewOffer', data);
export const setOfferStatus = data => http.post('setOfferStatus', data);
