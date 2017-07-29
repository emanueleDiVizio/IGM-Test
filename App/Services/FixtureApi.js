export default {
  // Functions return fixtures
  getConfig: () => {
    return {
      images: {
        base_url: 'http://image.tmdb.org/t/p/',
        secure_base_url: 'https://image.tmdb.org/t/p/',
        backdrop_sizes: [
          'w300',
          'w780',
          'w1280',
          'original'
        ],
        logo_sizes: [
          'w45',
          'w92',
          'w154',
          'w185',
          'w300',
          'w500',
          'original'
        ],
        poster_sizes: [
          'w92',
          'w154',
          'w185',
          'w342',
          'w500',
          'w780',
          'original'
        ],
        profile_sizes: [
          'w45',
          'w185',
          'h632',
          'original'
        ],
        still_sizes: [
          'w92',
          'w185',
          'w300',
          'original'
        ]
      },
      change_keys: [
        'adult',
        'air_date',
        'also_known_as',
        'alternative_titles',
        'biography',
        'birthday',
        'budget',
        'cast',
        'certifications',
        'character_names',
        'created_by',
        'crew',
        'deathday',
        'episode',
        'episode_number',
        'episode_run_time',
        'freebase_id',
        'freebase_mid',
        'general',
        'genres',
        'guest_stars',
        'homepage',
        'images',
        'imdb_id',
        'languages',
        'name',
        'network',
        'origin_country',
        'original_name',
        'original_title',
        'overview',
        'parts',
        'place_of_birth',
        'plot_keywords',
        'production_code',
        'production_companies',
        'production_countries',
        'releases',
        'revenue',
        'runtime',
        'season',
        'season_number',
        'season_regular',
        'spoken_languages',
        'status',
        'tagline',
        'title',
        'translations',
        'tvdb_id',
        'tvrage_id',
        'type',
        'video',
        'videos'
      ]
    }
  },
  getMovieDetails: () => {
    return {
      adult: false,
      backdrop_path: '/mFb0ygcue4ITixDkdr7wm1Tdarx.jpg',
      belongs_to_collection: {
        id: 404609,
        name: 'John Wick Collection',
        poster_path: '/uGhPxTrmT5yASzZrR1oz1ft9UWr.jpg',
        backdrop_path: '/fSwYa5q2xRkBoOOjueLpkLf3N1m.jpg'
      },
      budget: 20000000,
      genres: [
        {
          id: 28,
          name: 'Action'
        },
        {
          id: 53,
          name: 'Thriller'
        }
      ],
      homepage: 'http://www.johnwickthemovie.com/',
      id: 245891,
      imdb_id: 'tt2911666',
      original_language: 'en',
      original_title: 'John Wick',
      overview: 'Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.',
      popularity: 28.555295,
      poster_path: '/5vHssUeVe25bMrof1HyaPyWgaP.jpg',
      production_companies: [
        {
          name: 'Summit Entertainment',
          id: 491
        },
        {
          name: 'Warner Bros.',
          id: 6194
        },
        {
          name: '87Eleven',
          id: 23008
        },
        {
          name: 'DefyNite Films',
          id: 36259
        },
        {
          name: 'MJW Films',
          id: 36433
        }
      ],
      production_countries: [
        {
          iso_3166_1: 'CA',
          name: 'Canada'
        },
        {
          iso_3166_1: 'CN',
          name: 'China'
        },
        {
          iso_3166_1: 'US',
          name: 'United States of America'
        }
      ],
      release_date: '2014-10-22',
      revenue: 88761661,
      runtime: 101,
      spoken_languages: [
        {
          iso_639_1: 'hu',
          name: 'Magyar'
        },
        {
          iso_639_1: 'en',
          name: 'English'
        },
        {
          iso_639_1: 'ru',
          name: 'Pусский'
        }
      ],
      status: 'Released',
      tagline: 'Don\'t set him off.',
      title: 'John Wick',
      video: false,
      vote_average: 6.9,
      vote_count: 4855,
      credits: {
        cast: [
          {
            cast_id: 6,
            character: 'John Wick',
            credit_id: '52fe4f0cc3a36847f82b9c41',
            gender: 2,
            id: 6384,
            name: 'Keanu Reeves',
            order: 0,
            profile_path: '/bOlYWhVuOiU6azC4Bw6zlXZ5QTC.jpg'
          },
          {
            cast_id: 20,
            character: 'Viggo Tarasov',
            credit_id: '544b95150e0a2630f9000dc0',
            gender: 2,
            id: 6283,
            name: 'Michael Nyqvist',
            order: 1,
            profile_path: '/bDjPDDiSna8FN5rqHdheg2wIYYo.jpg'
          },
          {
            cast_id: 12,
            character: 'Iosef Tarasov',
            credit_id: '52fe4f0cc3a36847f82b9c59',
            gender: 2,
            id: 71586,
            name: 'Alfie Allen',
            order: 2,
            profile_path: '/4q6yzSMi8Q5XeIn5A1yUD1tEfwq.jpg'
          },
          {
            cast_id: 7,
            character: 'Ms. Perkins',
            credit_id: '52fe4f0cc3a36847f82b9c45',
            gender: 1,
            id: 88995,
            name: 'Adrianne Palicki',
            order: 3,
            profile_path: '/g9yOTKR1qsRrxKnR77hMz4dCka7.jpg'
          },
          {
            cast_id: 10,
            character: 'Helen Wick',
            credit_id: '52fe4f0cc3a36847f82b9c51',
            gender: 1,
            id: 18354,
            name: 'Bridget Moynahan',
            order: 4,
            profile_path: '/sNdD2Cos4aecowtWPpd0hcM8izY.jpg'
          },
          {
            cast_id: 14,
            character: 'Avi',
            credit_id: '544ab7dec3a3680fb4004dbb',
            gender: 2,
            id: 68763,
            name: 'Dean Winters',
            order: 5,
            profile_path: '/1BUNhhGs5drp5plGstAE8WKmfyq.jpg'
          },
          {
            cast_id: 24,
            character: 'Winston',
            credit_id: '544b9592c3a3686ac1000876',
            gender: 2,
            id: 6972,
            name: 'Ian McShane',
            order: 6,
            profile_path: '/pY9ud4BJwHekNiO4MMItPbgkdAy.jpg'
          },
          {
            cast_id: 19,
            character: 'Aurelio',
            credit_id: '544ab810c3a3680fbb004280',
            gender: 2,
            id: 5723,
            name: 'John Leguizamo',
            order: 7,
            profile_path: '/rbq24AzthnwRXUYcVfUnP5bKN50.jpg'
          },
          {
            cast_id: 9,
            character: 'Marcus',
            credit_id: '52fe4f0cc3a36847f82b9c4d',
            gender: 2,
            id: 5293,
            name: 'Willem Dafoe',
            order: 8,
            profile_path: '/xM5lhOR5tWWdIlFpBDeZJx9opIP.jpg'
          },
          {
            cast_id: 28,
            character: 'Charlie',
            credit_id: '545198220e0a2642c2002280',
            gender: 2,
            id: 1737,
            name: 'David Patrick Kelly',
            order: 9,
            profile_path: '/ujvmeyBvEJ7gkvww0OYDBlbxOTT.jpg'
          },
          {
            cast_id: 55,
            character: 'Continental Doctor',
            credit_id: '55e6d4789251410f0d0025a4',
            gender: 2,
            id: 9462,
            name: 'Randall Duk Kim',
            order: 10,
            profile_path: '/9AWMELz25S915kaUr5OzHJN4Xtm.jpg'
          },
          {
            cast_id: 26,
            character: 'Hotel Manager / Charon',
            credit_id: '544b95bac3a3680fb1006fd5',
            gender: 2,
            id: 129101,
            name: 'Lance Reddick',
            order: 11,
            profile_path: '/5t4j7zvsjG5UyVxBJzly5OUMR3x.jpg'
          },
          {
            cast_id: 58,
            character: 'Priest',
            credit_id: '55e6d4799251410f100028c9',
            gender: 2,
            id: 1503861,
            name: 'Munro M. Bonnell',
            order: 12,
            profile_path: '/gxRwdQo7gboLngDfQvztl94fBk5.jpg'
          },
          {
            cast_id: 102,
            character: 'Daisy',
            credit_id: '589ac10f9251412387003a85',
            gender: 0,
            id: 85121,
            name: 'Andy',
            order: 13,
            profile_path: null
          },
          {
            cast_id: 21,
            character: 'Gregori',
            credit_id: '544b95460e0a267486006b42',
            gender: 2,
            id: 968977,
            name: 'Omer Barnea',
            order: 14,
            profile_path: '/tFN8r6hU1vYcX7QI7Qatjykt0DL.jpg'
          },
          {
            cast_id: 95,
            character: 'Victor',
            credit_id: '5686f76bc3a368227b015d34',
            gender: 0,
            id: 187857,
            name: 'Toby Leonard Moore',
            order: 15,
            profile_path: '/qXoaBS2e7YsYsPZjPWSvvE2MarT.jpg'
          },
          {
            cast_id: 23,
            character: 'Kirill',
            credit_id: '544b9572c3a3686ac1000873',
            gender: 0,
            id: 9452,
            name: 'Daniel Bernhardt',
            order: 16,
            profile_path: '/xu8MSrkaP5PH2VlkOAfdRYF8wnB.jpg'
          },
          {
            cast_id: 8,
            character: 'Addy',
            credit_id: '52fe4f0cc3a36847f82b9c49',
            gender: 1,
            id: 1222298,
            name: 'Bridget Regan',
            order: 17,
            profile_path: '/uzVNdcPD2drMUKmT73xuKKYXBzB.jpg'
          },
          {
            cast_id: 51,
            character: 'Kuzma',
            credit_id: '55e6d4769251410f02002855',
            gender: 0,
            id: 78890,
            name: 'Keith Jardine',
            order: 18,
            profile_path: '/qlEPonH7fI7ZwUXo0Xyzj1gHqX.jpg'
          },
          {
            cast_id: 52,
            character: 'Nicholai',
            credit_id: '55e6d477c3a3685f9e0027d8',
            gender: 0,
            id: 1105706,
            name: 'Tait Fletcher',
            order: 19,
            profile_path: '/b70bowmWAiXqlSCBXy0IFC1Mcw4.jpg'
          },
          {
            cast_id: 49,
            character: 'Officer Jimmy',
            credit_id: '552506f2c3a3687e03001016',
            gender: 0,
            id: 1218218,
            name: 'Thomas Sadoski',
            order: 20,
            profile_path: '/76x2G7gyY25krEc3OBMUWaEzgnB.jpg'
          },
          {
            cast_id: 29,
            character: 'Harry',
            credit_id: '54519830c3a3680239004fbd',
            gender: 0,
            id: 61011,
            name: 'Clarke Peters',
            order: 21,
            profile_path: '/woMYppG0HYFgGVTQX2F8AK5FiQO.jpg'
          },
          {
            cast_id: 30,
            character: 'Francis',
            credit_id: '5451983a0e0a263a1000545c',
            gender: 2,
            id: 135352,
            name: 'Kevin Nash',
            order: 22,
            profile_path: '/ylSPd2RC4e7S2AAvo6uDJ32UQC2.jpg'
          },
          {
            cast_id: 56,
            character: 'Delivery Woman',
            credit_id: '55e6d478c3a3685f96002ae1',
            gender: 1,
            id: 1359352,
            name: 'Gameela Wright',
            order: 23,
            profile_path: '/mWdOejFNvIyV3QGqo7rvv93vyGu.jpg'
          },
          {
            cast_id: 57,
            character: 'Pavel',
            credit_id: '55e6d478c3a3685f850029cd',
            gender: 2,
            id: 1503860,
            name: 'Vladislav Koulikov',
            order: 24,
            profile_path: '/1i4GSp2MwbExzwDh9lIvRgEgN8.jpg'
          },
          {
            cast_id: 59,
            character: 'Elderly Woman',
            credit_id: '55e6d479c3a3685f850029d1',
            gender: 1,
            id: 1405915,
            name: 'Patricia Squire',
            order: 25,
            profile_path: '/dap3cDF1qMgjbA8zH1ybFvua7jg.jpg'
          },
          {
            cast_id: 60,
            character: 'Team Leader',
            credit_id: '55e6d4799251410f0a00274d',
            gender: 2,
            id: 1503862,
            name: 'Vladimir Troitsky',
            order: 26,
            profile_path: '/eEOijDlthyskTIs2AHUZqqb43ol.jpg'
          },
          {
            cast_id: 103,
            character: 'Violinist',
            credit_id: '589ac14dc3a3683a980039a6',
            gender: 0,
            id: 1753271,
            name: 'Scott Tixier',
            order: 27,
            profile_path: null
          },
          {
            cast_id: 53,
            character: 'Ivan',
            credit_id: '55e6d4779251410f130029a6',
            gender: 2,
            id: 1110069,
            name: 'Kazy Tauginas',
            order: 28,
            profile_path: '/3s8rEf7bqT85eEBQZrnR9zUEucH.jpg'
          },
          {
            cast_id: 54,
            character: 'Alexander',
            credit_id: '55e6d477c3a3685f96002add',
            gender: 2,
            id: 1503859,
            name: 'Alexander Frekey',
            order: 29,
            profile_path: '/vsgjzKXes36t0Bl3gp1hVh3pnqN.jpg'
          },
          {
            cast_id: 96,
            character: 'Red Circle Club Goer (uncredited)',
            credit_id: '56d5a79dc3a3681e50015bd8',
            gender: 1,
            id: 1584908,
            name: 'Carolyn Blair',
            order: 30,
            profile_path: '/2tIvaZvibs49Hg3jvKQTI25kFki.jpg'
          },
          {
            cast_id: 97,
            character: 'Red Circle Club Goer (uncredited)',
            credit_id: '56d5a82092514157b500a10b',
            gender: 1,
            id: 1584909,
            name: 'Samantha Crawford',
            order: 31,
            profile_path: '/oYwEPLhmcEwJXEMSsKIIssTFb5c.jpg'
          },
          {
            cast_id: 98,
            character: 'Russian Sniper (uncredited)',
            credit_id: '56d5a90c92514134020137b1',
            gender: 2,
            id: 1553053,
            name: 'Tommy Bayiokos',
            order: 32,
            profile_path: '/8vLqAskYaKzkXYRExw4fHGwkO6O.jpg'
          },
          {
            cast_id: 99,
            character: 'Hot Girl (uncredited)',
            credit_id: '5779432592514130140007a4',
            gender: 1,
            id: 1417533,
            name: 'Nadia Kay',
            order: 33,
            profile_path: '/eDiHIHe6JIObSM97c2lEFf3V7pz.jpg'
          },
          {
            cast_id: 100,
            character: 'Red Circle Model (uncredited)',
            credit_id: '577943b2c3a3684e7d00077d',
            gender: 1,
            id: 1439560,
            name: 'Natalia Kiriya',
            order: 34,
            profile_path: '/bamfh11ZS5y2x56nwRjcZTt8qVi.jpg'
          }
        ],
        crew: [
          {
            credit_id: '5490ad579251411f5d0003e3',
            department: 'Production',
            gender: 1,
            id: 4023,
            job: 'Casting',
            name: 'Suzanne Smith',
            profile_path: '/fASNhfD4Tmw6KPW0LoPUycIFxEL.jpg'
          },
          {
            credit_id: '54b658a9c3a368377e00138a',
            department: 'Production',
            gender: 2,
            id: 6384,
            job: 'Executive Producer',
            name: 'Keanu Reeves',
            profile_path: '/bOlYWhVuOiU6azC4Bw6zlXZ5QTC.jpg'
          },
          {
            credit_id: '5490ad959251411f5d0003ea',
            department: 'Art',
            gender: 2,
            id: 7496,
            job: 'Production Design',
            name: 'Dan Leigh',
            profile_path: null
          },
          {
            credit_id: '58bdf090c3a3680db100680f',
            department: 'Production',
            gender: 2,
            id: 11266,
            job: 'Producer',
            name: 'James McTeigue',
            profile_path: '/amtLeEkP6UoB41r48vX8mew9MHJ.jpg'
          },
          {
            credit_id: '52fe4f0cc3a36847f82b9c2b',
            department: 'Directing',
            gender: 2,
            id: 40644,
            job: 'Director',
            name: 'Chad Stahelski',
            profile_path: '/hr82USXEc8XWvdnH0TpyddMpi7j.jpg'
          },
          {
            credit_id: '54b65879c3a36836640017ad',
            department: 'Production',
            gender: 2,
            id: 40644,
            job: 'Producer',
            name: 'Chad Stahelski',
            profile_path: '/hr82USXEc8XWvdnH0TpyddMpi7j.jpg'
          },
          {
            credit_id: '58409d969251416f2e002d90',
            department: 'Directing',
            gender: 2,
            id: 40684,
            job: 'Director',
            name: 'David Leitch',
            profile_path: '/eVSgvAIsP6mwuVbbhVb4HkVvmsu.jpg'
          },
          {
            credit_id: '544ff4f8c3a3680236002630',
            department: 'Production',
            gender: 2,
            id: 40684,
            job: 'Producer',
            name: 'David Leitch',
            profile_path: '/eVSgvAIsP6mwuVbbhVb4HkVvmsu.jpg'
          },
          {
            credit_id: '5490ac579251411f6a000435',
            department: 'Camera',
            gender: 2,
            id: 12033,
            job: 'Director of Photography',
            name: 'Jonathan Sela',
            profile_path: null
          },
          {
            credit_id: '5490ac7b9251411f6300035e',
            department: 'Sound',
            gender: 2,
            id: 15221,
            job: 'Original Music Composer',
            name: 'Tyler Bates',
            profile_path: '/aN0g9Lrw03B7Hl2F4dCOo31hIKl.jpg'
          },
          {
            credit_id: '55ffd171925141529f0052b8',
            department: 'Sound',
            gender: 0,
            id: 15332,
            job: 'Supervising Sound Editor',
            name: 'Mark P. Stoeckinger',
            profile_path: null
          },
          {
            credit_id: '55ffcedec3a368132c005beb',
            department: 'Art',
            gender: 0,
            id: 17221,
            job: 'Set Decoration',
            name: 'Susan Bode',
            profile_path: null
          },
          {
            credit_id: '5490ada4c3a36873f900040b',
            department: 'Costume & Make-Up',
            gender: 2,
            id: 52682,
            job: 'Costume Design',
            name: 'Luca Mosca',
            profile_path: '/adtSrjn37EhoTSHFPfqxDmBTw6z.jpg'
          },
          {
            credit_id: '5490ade89251411f5b00042c',
            department: 'Production',
            gender: 1,
            id: 52605,
            job: 'Producer',
            name: 'Eva Longoria',
            profile_path: '/z18w0MSVXaI6caYVcnv2DYOg1WV.jpg'
          },
          {
            credit_id: '52fe4f0cc3a36847f82b9c37',
            department: 'Production',
            gender: 2,
            id: 67759,
            job: 'Producer',
            name: 'Basil Iwanyk',
            profile_path: null
          },
          {
            credit_id: '54b658d992514166470014e4',
            department: 'Production',
            gender: 0,
            id: 80788,
            job: 'Executive Producer',
            name: 'Mike Upton',
            profile_path: null
          },
          {
            credit_id: '54b6588592514166470014da',
            department: 'Production',
            gender: 0,
            id: 94456,
            job: 'Executive Producer',
            name: 'Kevin Scott Frakes',
            profile_path: null
          },
          {
            credit_id: '54b658cdc3a36836640017b4',
            department: 'Production',
            gender: 0,
            id: 94825,
            job: 'Executive Producer',
            name: 'Jared Underwood',
            profile_path: null
          },
          {
            credit_id: '54b65891c3a36838d50016ba',
            department: 'Production',
            gender: 2,
            id: 882944,
            job: 'Executive Producer',
            name: 'Stephen Hamel',
            profile_path: null
          },
          {
            credit_id: '55ffd141c3a36877e700242a',
            department: 'Sound',
            gender: 2,
            id: 978127,
            job: 'Sound Re-Recording Mixer',
            name: 'Andy Koyama',
            profile_path: null
          },
          {
            credit_id: '5490ad2e9251411f5d0003de',
            department: 'Editing',
            gender: 1,
            id: 1017235,
            job: 'Editor',
            name: 'Elísabet Ronaldsdóttir',
            profile_path: null
          },
          {
            credit_id: '55ffd18ac3a36817620022bf',
            department: 'Crew',
            gender: 0,
            id: 1043368,
            job: 'Special Effects Coordinator',
            name: 'Drew Jiritano',
            profile_path: null
          },
          {
            credit_id: '5490ad4dc3a36873f60004fa',
            department: 'Production',
            gender: 0,
            id: 1046729,
            job: 'Casting',
            name: 'Jessica Kelly',
            profile_path: null
          },
          {
            credit_id: '52fe4f0cc3a36847f82b9c31',
            department: 'Writing',
            gender: 0,
            id: 1076800,
            job: 'Screenplay',
            name: 'Derek Kolstad',
            profile_path: null
          },
          {
            credit_id: '52fe4f0cc3a36847f82b9c3d',
            department: 'Production',
            gender: 0,
            id: 1281371,
            job: 'Producer',
            name: 'Mike Witherill',
            profile_path: null
          },
          {
            credit_id: '55ffcf4c9251412aad001f1a',
            department: 'Costume & Make-Up',
            gender: 0,
            id: 1324481,
            job: 'Makeup Department Head',
            name: 'Stephen M. Kelley',
            profile_path: null
          },
          {
            credit_id: '55ffd0edc3a3681a40002488',
            department: 'Sound',
            gender: 0,
            id: 1334485,
            job: 'Sound Designer',
            name: 'Alan Rankin',
            profile_path: null
          },
          {
            credit_id: '55ffd289c3a36817620022e1',
            department: 'Crew',
            gender: 2,
            id: 1357063,
            job: 'Stunt Coordinator',
            name: 'Darrin Prescott',
            profile_path: null
          },
          {
            credit_id: '55ffd0c19251414ca9000069',
            department: 'Sound',
            gender: 0,
            id: 1365542,
            job: 'Foley',
            name: 'Paul Pirola',
            profile_path: null
          },
          {
            credit_id: '55ffd0669251414ca9000061',
            department: 'Editing',
            gender: 2,
            id: 1387183,
            job: 'Dialogue Editor',
            name: 'John C. Stuver',
            profile_path: null
          },
          {
            credit_id: '55ffd02d9251414376000e5f',
            department: 'Crew',
            gender: 0,
            id: 1393371,
            job: 'Property Master',
            name: 'Vinny Mazzarella',
            profile_path: null
          },
          {
            credit_id: '55ffd2aa9251414376000ea0',
            department: 'Lighting',
            gender: 0,
            id: 1395367,
            job: 'Gaffer',
            name: 'Bill Almeida',
            profile_path: null
          },
          {
            credit_id: '55ffd25bc3a36813340055ed',
            department: 'Visual Effects',
            gender: 0,
            id: 1403400,
            job: 'Visual Effects Supervisor',
            name: 'Jeff Campbell',
            profile_path: null
          },
          {
            credit_id: '55ffd2e2c3a368132c005c48',
            department: 'Crew',
            gender: 0,
            id: 1403479,
            job: 'Second Unit Cinematographer',
            name: 'Duane Manwiller',
            profile_path: null
          },
          {
            credit_id: '55ffd34d9251411824002303',
            department: 'Camera',
            gender: 0,
            id: 1404739,
            job: 'Helicopter Camera',
            name: 'Steve Koster',
            profile_path: null
          },
          {
            credit_id: '54b6589d92514166470014dd',
            department: 'Production',
            gender: 0,
            id: 1413500,
            job: 'Executive Producer',
            name: 'Tara Moross',
            profile_path: null
          },
          {
            credit_id: '54b658b4c3a36877980015c0',
            department: 'Production',
            gender: 0,
            id: 1413501,
            job: 'Executive Producer',
            name: 'Andrew C. Robinson',
            profile_path: null
          },
          {
            credit_id: '54b658c09251412e730016ea',
            department: 'Production',
            gender: 0,
            id: 1413502,
            job: 'Executive Producer',
            name: 'Raj Brinder Singh',
            profile_path: null
          },
          {
            credit_id: '55ffd1299251412aad001f35',
            department: 'Sound',
            gender: 2,
            id: 1416155,
            job: 'Sound Re-Recording Mixer',
            name: 'James Bolt',
            profile_path: null
          },
          {
            credit_id: '55ffcf06c3a3681a40002462',
            department: 'Costume & Make-Up',
            gender: 0,
            id: 1416796,
            job: 'Hairstylist',
            name: 'Kerrie Smith',
            profile_path: null
          },
          {
            credit_id: '55ffd372c3a3681a400024d8',
            department: 'Camera',
            gender: 0,
            id: 1417882,
            job: 'Helicopter Camera',
            name: 'Matthew T. Rodgers',
            profile_path: null
          },
          {
            credit_id: '55ffd0a892514129500022bd',
            department: 'Sound',
            gender: 0,
            id: 1428872,
            job: 'Foley',
            name: 'James Carroll',
            profile_path: null
          },
          {
            credit_id: '55ffd15cc3a36813340055cb',
            department: 'Sound',
            gender: 0,
            id: 1435642,
            job: 'Sound Re-Recording Mixer',
            name: 'Martyn Zub',
            profile_path: null
          },
          {
            credit_id: '55ffd38b9251412950002309',
            department: 'Camera',
            gender: 0,
            id: 1445895,
            job: 'Steadicam Operator',
            name: 'Gregory W. Smith',
            profile_path: null
          },
          {
            credit_id: '55ffcfb7c3a36813340055ac',
            department: 'Art',
            gender: 0,
            id: 1468540,
            job: 'Art Department Coordinator',
            name: 'Kristen Ficara',
            profile_path: null
          },
          {
            credit_id: '55ffceca925141529f005277',
            department: 'Art',
            gender: 0,
            id: 1512724,
            job: 'Art Direction',
            name: 'C.J. Simpson',
            profile_path: null
          },
          {
            credit_id: '55ffcf229251414376000e4d',
            department: 'Costume & Make-Up',
            gender: 1,
            id: 1512725,
            job: 'Hairstylist',
            name: 'Kat Percy',
            profile_path: null
          },
          {
            credit_id: '55ffcfd8c3a368133b004b67',
            department: 'Art',
            gender: 0,
            id: 1512726,
            job: 'Assistant Art Director',
            name: 'Raul Abrego',
            profile_path: null
          },
          {
            credit_id: '55ffcfeec3a36877e70023fd',
            department: 'Art',
            gender: 0,
            id: 1512728,
            job: 'Assistant Art Director',
            name: 'Carl Baldasso',
            profile_path: null
          },
          {
            credit_id: '55ffd00cc3a368132c005c02',
            department: 'Art',
            gender: 0,
            id: 1512729,
            job: 'Assistant Art Director',
            name: 'Dennis Moyes',
            profile_path: null
          },
          {
            credit_id: '55ffd1d492514152b1005a9f',
            department: 'Crew',
            gender: 0,
            id: 1512732,
            job: 'CG Supervisor',
            name: 'Mark Neysmith',
            profile_path: null
          },
          {
            credit_id: '55ffd1ecc3a36813340055db',
            department: 'Crew',
            gender: 0,
            id: 1512733,
            job: 'Visual Effects Editor',
            name: 'Nigel Mendoza',
            profile_path: null
          },
          {
            credit_id: '55ffd22592514152b1005aad',
            department: 'Visual Effects',
            gender: 0,
            id: 1512734,
            job: 'Visual Effects Supervisor',
            name: 'Jake Braver',
            profile_path: null
          },
          {
            credit_id: '55ffd2c292514118240022ee',
            department: 'Lighting',
            gender: 0,
            id: 1512738,
            job: 'Gaffer',
            name: 'Eric Boncher',
            profile_path: null
          },
          {
            credit_id: '55ffd310c3a36817620022ef',
            department: 'Camera',
            gender: 0,
            id: 1512743,
            job: 'Camera Operator',
            name: 'Tim Norman',
            profile_path: null
          },
          {
            credit_id: '55ffd472c3a368132c005c80',
            department: 'Lighting',
            gender: 0,
            id: 1512745,
            job: 'Rigging Gaffer',
            name: 'Clay Liversidge',
            profile_path: null
          },
          {
            credit_id: '56008513925141191c00002b',
            department: 'Costume & Make-Up',
            gender: 0,
            id: 1513207,
            job: 'Costume Supervisor',
            name: 'Kenn Hamilton',
            profile_path: null
          }
        ]
      },
      reviews: {
        page: 1,
        results: [
          {
            id: '558ba0dcc3a3687e68002721',
            author: 'Per Gunnar Jonsson',
            content: 'This is very much my kind of movie. Straightforward, lots of good action, our hero never waivers from his path and no social or emotional nonsense. Those who have watched the movie might wonder why I claim that there is not emotional nonsense since the entire plot is driven by John Wick’s very emotional response to his wife’s death and the subsequent killing of the dog that he received as a last present from her. What I mean with “no emotional nonsense” is that John Wick is never second guessing himself, the movie never really tries to portray him as an “ordinary” guy having second thoughts about killing the bad guys and he doesn’t go into some silly “oh should I really pull the trigger” trance and drops the gun in the worst possible moments as is done in a lot of movies. Sure, there are emotions in this movie. Rage and thirst for revenge in particular with the addition of a healthy dose of fear from the bad guys…eventually that is.\r\n\r\nThe plot of the movie is, as I wrote, quite straightforward and classical. Retired hit man gets wronged by idiot son of big bad guy. Hit man gets pissed off and goes on a quest for revenge. People die (a lot of them). Hit man and big bad guy have a show down at the end. In terms of story that is about it. However, such a story can be told and presented in a good and entertaining way and in a less good and entertaining way. As far as I am concerned the way the story is told in this movie is very, very entertaining.\r\n\r\nKeanu Reeves is quite good as the hit man. So are the big bad guy and most of the other actors of any importance. During the course of the movie we get more than a few glimpses into John Wick’s former life and it is a quite cool background that have been elaborated. The secret world that John Wick was once part of and how it works and operates would be worthy a good old-fashioned James Bond movie.\r\n\r\nThen of course there is the action. It is an action movie so you do expect quite some expenditure on the action and this movie do not disappoint. There are lots of action and it is good action. Sure, the ease by which John Wick picks off his opponents waiving his gun(s) in all direction without hardly looking is sometimes a bit over the top but it is still done with a fluidness and grace that just makes it … so cool. The gun fights are generally mixed up with some equally good martial arts close combat stuff and it is really well woven together.\r\n\r\nOne thing that I really like with this movie is that John Wick is the cool, cold, determined, not to be pissed off, killing machine from start to finish. There are really no slow parts or “obligatory” scenes of doubt and self-recrimination. It is “the bad guys will pay” all the way. This of course gives the opportunity to include some other elements that I quite like in a story like this. For instance the parts where the spoiled total idiot son of the big bad guy slowly gets his arrogance replaced by some good, honest to God, fear. Fear of death and fear of the guy he so carelessly pissed off.\r\n\r\nNeedless to say, I enjoyed this movie a lot when I sat down to watch it with my oldest son yesterday.',
            url: 'https://www.themoviedb.org/review/558ba0dcc3a3687e68002721'
          },
          {
            id: '55c8b6c4c3a3686a820008c9',
            author: 'Andres Gomez',
            content: 'I don\'t get why this movie has such good reviews. It simple and quite uninteresting. Lots of actions and well known faces (many from TV series), but nothing else. The same old brainless plot to justify tons of bullets.',
            url: 'https://www.themoviedb.org/review/55c8b6c4c3a3686a820008c9'
          },
          {
            id: '570421099251415bbb000866',
            author: 'John Chard',
            content: 'Woof!\r\n\r\nKeanu Reeves is the John Wick of the title, a grieving one man army who gets tipped over the edge when gangsters kill his dog. Carnage ensues.\r\n\r\nThe paying public do like a good revenge flick, there have been plenty this last couple of decades, and they do go down well. Once the set-up has been staged - Wick grieves at the loss of his loved one - gets some small joy via a pet - only to have that snatched away from him, then the film becomes a joyously unstoppable actioner.\r\n\r\nWick, in good hands with a moody and beefy Reeves (face fuzz strange, though) strong in presence, cuts a swathe through the gangland eastern blockers. And that\'s pretty much it! Characterisations are thin on the ground, it\'s a bit nutty and of course preposterous, but boy is it fun. There you go, a box office winning actioner without pretensions. Enjoy. 7/10',
            url: 'https://www.themoviedb.org/review/570421099251415bbb000866'
          },
          {
            id: '58b11e62c3a368075a00616a',
            author: 'CuriousAstronaut',
            content: '~NO SPOILERS~\r\n\r\nJohn Wick is an excellent revenge action movie that raises the bar with its excellent lighting, cinematography, and martial arts displays from Keanu.\r\n\r\nMr Wick spends the rest of the film getting even with a mob boss for the actions of his son who killed his dog and stole his car.   As far as the plot goes, its pretty simple but there is a lot of depth to the world.\r\n\r\nReeves displays a decent amount of acting range here, but his real talent is bringing bad guys down one headshot at a time. Its glorious to see him smack a guy over the head, hold him down while reloading, and then take him out.\r\n\r\nThe best thing about this film is the lack of shaky cam-- you can see all the action happening clearly. This is made possible by the dedication of the actors in their martial arts training.\r\n\r\nSupport films like this, they are a rare breed these days!',
            url: 'https://www.themoviedb.org/review/58b11e62c3a368075a00616a'
          },
          {
            id: '590b27ecc3a36843a1016ec9',
            author: 'Shreyance Parakh',
            content: '**Pure unadulterated action**\r\n\r\nJohn Wick - it\'s that kind of a character whose name is enough to inflict terror in the minds of people. And whoever isn\'t terrified doesn\'t mean that they\'re better, it just means that they don\'t know JOHN WICK.\r\n\r\nIt definitely isn\'t the first character of it\'s kind, but very few characters of this kind convince you that they are what they are supposed to be. Let\'s just say that John Wick kicks a** and he is pretty awesome at that.\r\n\r\nI can\'t think of anyone else to be John Wick other than Keanu Reeves, the guy\'s living the character on screen. The hand to hand combat, usage of knives and guns, the action, it all seems poetic at times. The thing I loved the most is that there wasn\'t too much noise, no Boom Boom, just the Bang Bang, exactly what you\'d expect from a hit-man.\r\n\r\nThe cinematography, dialogues, background score, direction, action, everything was just what a movie like this needs. It ticked all the right boxes for me and I think every action movie fan would lap this one up.\r\n\r\nIt is a great action revenge movie that never runs out of steam throughout it\'s course. So, everyone who loves to see bullets flying all over the screen, or to quote it better, say hitting just the right spots, go treat yourself to this movie. You\'d be glad.\r\n\r\nAn 8 out of 10',
            url: 'https://www.themoviedb.org/review/590b27ecc3a36843a1016ec9'
          }
        ],
        total_pages: 1,
        total_results: 5
      },
      videos: {
        results: [
          {
            id: '54183331c3a36819ae002df6',
            iso_639_1: 'en',
            iso_3166_1: 'US',
            key: 'RllJtOw0USI',
            name: 'Official Trailer',
            site: 'YouTube',
            size: 720,
            type: 'Trailer'
          }
        ]
      },
      images: {
        backdrops: [],
        posters: []
      }
    }
  },
  searchMovie: (username) => {
    return {
      page: 1,
      total_results: 3,
      total_pages: 1,
      results: [
        {
          vote_count: 4842,
          id: 245891,
          video: false,
          vote_average: 6.9,
          title: 'John Wick',
          popularity: 29.555295,
          poster_path: '/5vHssUeVe25bMrof1HyaPyWgaP.jpg',
          original_language: 'en',
          original_title: 'John Wick',
          genre_ids: [
            28,
            53
          ],
          backdrop_path: '/mFb0ygcue4ITixDkdr7wm1Tdarx.jpg',
          adult: false,
          overview: 'Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.',
          release_date: '2014-10-22'
        },
        {
          vote_count: 2380,
          id: 324552,
          video: false,
          vote_average: 6.6,
          title: 'John Wick: Chapter 2',
          popularity: 15.471064,
          poster_path: '/zkXnKIwX5pYorKJp2fjFSfNyKT0.jpg',
          original_language: 'en',
          original_title: 'John Wick: Chapter 2',
          genre_ids: [
            53,
            28,
            80
          ],
          backdrop_path: '/dQ6s3Ud2KoOs3LKw6xgZr1cw7Yq.jpg',
          adult: false,
          overview: 'John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world’s most dangerous killers.',
          release_date: '2017-02-08'
        },
        {
          vote_count: 0,
          id: 458156,
          video: false,
          vote_average: 0,
          title: 'John Wick: Chapter 3',
          popularity: 1.550245,
          poster_path: '/gyllNQR282ILSBzlP2mvNWQ1634.jpg',
          original_language: 'en',
          original_title: 'John Wick: Chapter 3',
          genre_ids: [
            80,
            28
          ],
          backdrop_path: null,
          adult: false,
          overview: 'The third installment in the John Wick franchise.',
          release_date: '2019-01-25'
        }
      ]
    }
  }
}
