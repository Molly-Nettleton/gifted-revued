import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { giftsApi } from "./AxiosService.js"

class GiftsService{

  async getGifts() {
    const res = await giftsApi.get('/api/gifts')
    AppState.gifts = res.data.map(g => new Gift(g))
  }

  async openGift(giftId) {
    const gift = AppState.gifts.find(g => g.id == giftId)
    gift.opened = !gift.opened
    const res = await giftsApi.put(`api/gifts/${giftId}`, gift)
    gift.url = res.data.url
  }

  async addGift(Value) {
    const res = await giftsApi.post('/api/gifts', Value)
    let gift = new Gift(res.data)
    AppState.gifts = [gift, ...AppState.gifts]
  }
}

export const giftsService = new GiftsService()