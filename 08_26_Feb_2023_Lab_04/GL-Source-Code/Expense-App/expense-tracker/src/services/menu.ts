import axios from 'axios';
import IDataList from '../model/IDataList';

const getDataFromServer = () => {
    return axios.get<IDataList[]>(`http://localhost:3001/items`)
            .then( response => response.data )
};

const pushDataFromUser = ( newpurchase : Omit<IDataList, 'id'> ) => {
    return axios.post<IDataList>(
        `http://localhost:3001/items`,
        newpurchase,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then( response => response.data )
};

export { 
    getDataFromServer,
    pushDataFromUser 
}