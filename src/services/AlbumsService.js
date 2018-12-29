import { API } from '../shared/api'
import Image from '../models/Image'
import Album from '../models/Album'

class AlbumsService {
    async fetchAlbums(page = 1) {
        const options = {
            params: {
                _page: page
            }
        }

        const { data } = await API.get('/albums', options)

        const albumPromises = data.map(async albumData => {
            const albumId = albumData.id
            const album = new Album(albumData)

            const photos = await this.fetchPhotos(albumId)
            album.addPhotos(photos)

            return album
        })

        return await Promise.all(albumPromises)
    }

    async fetchPhotos(albumId, page = 1, limit = 8) {
        const options = {
            params: {
                albumId,
                _page: page,
                _limit: limit
            }
        }

        const { data } = await API.get('/photos', options)
        return data.map(image => new Image(image))
    }
}

export const albumsService = new AlbumsService()