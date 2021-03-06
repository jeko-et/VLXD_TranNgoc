import {_get, _post, _alert} from '../../util/common'
import _d from 'lodash'

export const fetchRecs = ({commit}) => {
  commit('setIsLoading', true)
  _get(`{
    listStockOut {
      id
      productId
      productName
      quantity
    }
  }`)
    .then(({data}) => {
      _alert('Success', 'positive')
      commit('setRecs', data.listStockOut)
      commit('setIsLoading', false)
    })
    .catch(err => {
      console.log(err)
      _alert(`Code: ${err.response.status} - ${err.response.statusText}`, 'negative')
      commit('setIsLoading', false)
    })
}

export const deleteRecs = ({commit, getters}) => {
  commit('setIsLoading', true)
  let ids = Array.from(getters.getSelected, stockout => stockout.id)
  _post(
    ids,
    `mutation ($input: [Int]) {
      deleteStockOut(input: $input)
    }`
  )
    .then(({data}) => {
      _alert(`Đã xóa ${data.deleteStockOut} phiếu xuất`, 'info')
      commit('setIsLoading', false)

      // remove deleted recs from state.recs
      _d.remove(getters.getRecs, rec => {
        return ids.includes(rec.id)
      })
      // clear selection
      commit('setSelected', [])
      // reactive the grid with new recs
      commit('setRecs', _d.clone(getters.getRecs))
    })
    .catch(err => {
      _alert(`Code: ${err.response.status} - ${err.response.statusText}`, 'negative')
      commit('setIsLoading', false)
    })
}
