import moment from 'moment';

export const getTodayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
};

export const getDateFormatted = (date: any) => {
    return moment(date).format("DD/MM/YYYY"); // you get "16/05/2018"
}
