import type { Event } from '@/interfaces/event.interface';

export const EVENT_DATA: Event[] = [
  {
    id: 1,
    title: 'Vue Meetup',
    date: '2026-05-01',
    category: 'мітап',
    teaser: 'Talks, networking and snacks - meet other Vue devs.',
    description: 'Зустріч Vue-розробників у дружній атмосфері. Доповіді, нетворкінг і запитання до спікерів.',
    bannerClass: 'event-card__banner--violet'
  },
  {
    id: 2,
    title: 'Frontend Conf',
    date: '2026-06-12',
    category: 'конференція',
    teaser: 'Frameworks, accessibility, modern tooling.',
    description: 'Подія для доповідей про продуктивність, доступність та сучасний фронтенд-стек.',
    bannerClass: 'event-card__banner--green'
  },
  {
    id: 3,
    title: 'Hackathon',
    date: '2026-07-20',
    category: 'хакатон',
    teaser: '48 hours to build something awesome with mentors and prizes.',
    description: '48 годин, щоб побудувати щось неймовірне - ментори, призи та незабутній досвід.',
    bannerClass: 'event-card__banner--orange'
  }
];
