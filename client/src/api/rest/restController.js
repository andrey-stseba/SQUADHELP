import http from '../interceptor';
import queryStrig from 'query-string';
// User
export const registerRequest = data => http.post('users/registration', data);
export const loginRequest = data => http.post('users/login', data);
export const getUser = () => http.post('users/getUser');
export const updateUser = data => http.post('users/updateUser', data);
export const cashOut = data => http.post('users/cashout', data);
export const changeMark = data => http.post('users/changeMark', data);
export const payMent = data => http.post('users/pay', data.formData);

// Chat
export const getPreviewChat = () => http.post('chats/getPreview');
export const getDialog = data => http.post('chats/getChat', data);
export const newMessage = data => http.post('chats/newMessage', data);
export const changeChatFavorite = data => http.post('chats/favorite', data);
export const changeChatBlock = data => http.post('chats/blackList', data);
export const getCatalogList = data => http.post('chats/getCatalogs', data);
export const addChatToCatalog = data =>
  http.post('chats/addNewChatToCatalog', data);
export const createCatalog = data => http.post('chats/createCatalog', data);
export const deleteCatalog = data => http.post('chats/deleteCatalog', data);
export const removeChatFromCatalog = data =>
  http.post('chats/removeChatFromCatalog', data);
export const changeCatalogName = data =>
  http.post('chats/updateNameCatalog', data);
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
