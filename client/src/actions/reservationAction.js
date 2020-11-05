import axios from '../utils/axios'

let MAX_ITEM_PER_PAGE = 10



export default class Reservation {
    constructor() {
        this._pageSize = MAX_ITEM_PER_PAGE;
        this._totalPage = 1;
        this._currentPage = 1;
        this._selectedDate = null
        this._customUrl = '/reservations'
    }


    async getAll() {
        return this._getReservation()
    }

    async getAllQrCode() {
        this._customUrl = '/reservations/qr-code'
        return this._getReservation()
    }

    async getAllManual() {

    }

    async storeQrCode() {

    }

    async storeManual() {

    }

    async deleteBooking() {

    }


    async _getReservation() {
        try {
            let { data } = await axios.get(this._getUrl())
            this._totalPage = Math.ceil(data.data.length / this._pageSize)

            return {
                document: data.data,
                totalPage: this._totalPage,
                currentPage: this._currentPage,
                pageSize: this._pageSize,
            }
        } catch (error) {
            console.log(error)
            // throw new Error(error)
        }
    }

    _getUrl() {
        let url = `${this._customUrl}?pagesize=${this._pageSize}&page=${this._currentPage}`
        if (this._selectedDate) url += `&selectedDate=${this._selectedDate}`

        return url;
    }

    _isNext() {
        return this._currentPage < this._totalPage;
    }

    _isPrevious() {
        return this._currentPage > 1;
    }
}