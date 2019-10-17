import { observable, action } from 'mobx'

class Shop {
    @observable info = {
        id: 0,
        name: '',
        logo: ''
    }

    @action setInfo(v) {
        this.info = v
    }
}

export default new Shop()