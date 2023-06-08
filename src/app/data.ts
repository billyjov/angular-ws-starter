import { InMemoryDbService } from 'angular-in-memory-web-api';

export interface Hotel {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  rating?: number;
  tags?: string[];
}

/**
 * Initial data for in memory web api
 *
 * @export
 * @class HotelData
 * @implements {InMemoryDbService}
 */
export class HotelData implements InMemoryDbService {
  createDb(): Record<string, Hotel[]> {
    const hotels: Hotel[] = [
      {
        id: 1,
        name: 'Buea sweet life',
        description: 'Belle vue au bord de la mer',
        price: 230.5,
        imageUrl: 'assets/img/hotel-room.jpg',
        rating: 3.5,
        tags: ['new'],
      },
      {
        id: 2,
        name: 'Marakech',
        description: 'Profitez de la vue sur les montagnes',
        price: 145.5,
        imageUrl: 'assets/img/the-interior.jpg',
        rating: 5,
        tags: ['new'],
      },
      {
        id: 3,
        name: 'Abudja new look palace',
        description: 'Séjour complet avec service de voitures',
        price: 120.12,
        imageUrl: 'assets/img/indoors.jpg',
        rating: 4,
        tags: ['new'],
      },
      {
        id: 4,
        name: 'Cape town city',
        description: 'Magnifique cadre pour votre séjour',
        price: 135.12,
        imageUrl: 'assets/img/window.jpg',
        rating: 2.5,
        tags: ['new'],
      },
    ];

    return { hotels };
  }

  genId(hotels: Hotel[]): number {
    return hotels.length > 0
      ? Math.max(...hotels.map((hotel) => hotel.id)) + 1
      : 1;
  }
}
