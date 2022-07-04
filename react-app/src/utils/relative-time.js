import moment from 'moment'

export default function convertToTimeAgo(dateObj) {
    const months = {
        Jan: '01',
        Feb: '02',
        Mar: '03',
        Apr: '04',
        May: '05',
        Jun: '06',
        Jul: '07',
        Aug: '08',
        Sep: '09',
        Oct: '10',
        Nov: '11',
        Dec: '12',
    }

    let dateObjSlices = dateObj.split(' ')
    let dateString = ''

    dateString += dateObjSlices[3]
    dateString += months[dateObjSlices[2]]
    dateString += dateObjSlices[1]
    dateString += dateObjSlices[4]


    return moment.utc(dateString, "YYYYMMDDhh:mm:ss").fromNow()
};
