import { storageService } from './storage-service.js'
import { xxx as gDefaultXxx } from '../data'

export const xxxService = {
    query,
    save,
    remove,
    getById,
    getEmptyXxx,
    tryXxx,
    getNextXxxId
}

const STORAGE_KEY = 'xxx'

var gXxx = _loadXxx()

function query(filterBy) {

    let xxxToReturn = gXxx
    if (filterBy) {
        var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy
        maxBatteryStatus = maxBatteryStatus || Infinity
        minBatteryStatus = minBatteryStatus || 0
        xxxToReturn = gXxx.filter(xxx => xxx.type.toLowerCase().includes(type.toLowerCase()) && xxx.model.toLowerCase().includes(model.toLowerCase())
            && (xxx.batteryStatus < maxBatteryStatus)
            && xxx.batteryStatus > minBatteryStatus)
    }
    return Promise.resolve([...xxxToReturn])
}
function tryXxx(id) {
    const xxx = gXxx.find(xxx => xxx._id === id)
    xxx.batteryStatus -= 10
    return Promise.resolve()
}
function getNextXxxId(id) {
    const xxxIdx = gXxx.findIndex(xxx => xxx._id === id)
    const nextIdx = xxxIdx + 1 > gXxx.length ? 0 : xxxIdx + 1
    return gXxx[nextIdx].id
}

function getById(id) {
    const xxx = gXxx.find(xxx => xxx._id === id)
    return Promise.resolve({ ...xxx })
}

function remove(id) {
    const idx = gXxx.findIndex(xxx => xxx._id === id)
    gXxx.splice(idx, 1)
    if (!gXxx.length) gXxx = gDefaultXxx.slice()
    storageService.store(STORAGE_KEY, gXxx)
    return Promise.resolve()
}

function save(xxxToSave) {
    if (xxxToSave._id) {
        const idx = gXxx.findIndex(xxx => xxx._id === xxxToSave._id)
        gXxx.splice(idx, 1, xxxToSave)
    } else {
        // xxxToSave._id = makeId()
        xxxToSave.batteryStatus = 100
        gXxx.push(xxxToSave)
    }
    storageService.store(STORAGE_KEY, gXxx)
    return Promise.resolve(xxxToSave)
}

// function _update(xxxToSave) {
//     const idx = gXxx.findIndex(xxx => xxx._id === xxxToSave._id)
//     gXxx.splice(idx, 1, xxxToSave)
//     return Promise.resolve(xxxToSave)
// }


// function _add(xxxToSave) {

// }

function getEmptyXxx() {
    return {
        model: '',
        type: ''
    }
}

function _loadXxx() {
    console.log('hy frome service')
    let xxx = storageService.load(STORAGE_KEY)
    if (!xxx || !xxx.length) xxx = gDefaultXxx
    storageService.store(STORAGE_KEY, xxx)
    return xxx
}

