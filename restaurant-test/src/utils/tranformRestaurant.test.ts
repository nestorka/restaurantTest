import { describe, it, expect } from 'vitest'
import { transformRestaurant } from './transformRestaurant'

describe('transformRestaurant', () => {
    it('returns the correct shape', () => {
        const raw = {
            name: 'Pizza Place',
            address: { firstLine: '123 Main Street' },
            cuisines: [{ name: 'Pizza' }, { name: 'Italian' }],
            rating: { starRating: 4.5 }
        }

        const result = transformRestaurant(raw)

        expect(result).toEqual({
            name: 'Pizza Place',
            address: '123 Main Street',
            cuisines: ['Pizza', 'Italian'],
            rating: 4.5
        })
    })

    it('filters out noise cuisine tags', () => {
        const raw = {
            name: 'Burger Joint',
            address: { firstLine: '45 High Street' },
            cuisines: [{ name: 'Burgers' }, { name: 'Deals' }, { name: 'Collect stamps' }],
            rating: { starRating: 3.5 }
        }

        const result = transformRestaurant(raw)

        expect(result.cuisines).toEqual(['Burgers'])
    })

    it('handles empty cuisines array', () => {
        const raw = {
            name: 'Mystery Place',
            address: { firstLine: '1 Unknown Road' },
            cuisines: [],
            rating: { starRating: 5 }
        }

        const result = transformRestaurant(raw)

        expect(result.cuisines).toEqual([])
    })
})