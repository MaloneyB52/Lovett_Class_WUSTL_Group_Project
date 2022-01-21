// An array containing each city's location, state, and crime by type volume.
let cities = [
  {
    location: [32.36681, -86.29997],
    city: "Montgomery",
    state: "AL",
    person: 4384
  },
  {
    location: [33.4484, -112.0740],
    city: "Phoenix",
    state: "AZ",
    person: 18440
  },
  {
    location: [34.74648, -92.28959],
    city: "Little Rock",
    state: "AR",
    person: 63893
  },
  {
    location: [39.73915, -104.9847],
    city: "Denver",
    state: "CO",
    person: 64221
  },
  {
    location: [41.76371, -72.68509],
    city: "Hartford",
    state: "CT",
    person: 27833
  },
  {
    location: [39.15817, -75.52437],
    city: "Dover",
    state: "DE",
    person: 16154
  },
  {
    location: [38.89511, -77.03637],
    city: "District of Columbia",
    state: "DC",
    person: 1062
  },
  {
    location: [33.749, -84.38798],
    city: "Atlanta",
    state: "GA",
    person: 99961
  },
  {
    location: [21.30694, -157.85833],
    city: "Honolulu",
    state: "HI",
    person: 9376
  },
  {
    location: [43.6135, -116.20345],
    city: "Boise",
    state: "ID",
    person: 16972
  },
  {
    location: [39.80172, -89.64371],
    city: "Springfield",
    state: "IL",
    person: 5688
  },
  {
    location: [39.76838, -86.15804],
    city: "Indianopolis",
    state: "IN",
    person: 55303
  },
  {
    location: [41.60054, -93.60911],
    city: "Des Moines",
    state: "IA",
    person: 30872
  },
  {
    location: [39.04833, -95.67804],
    city: "Topeka",
    state: "KS",
    person: 42607
  },
  {
    location: [38.20091, -84.87328],
    city: "Frankfort",
    state: "KY",
    person: 47887
  },
  {
    location: [30.45075, -91.15455],
    city: "Baton Rouge",
    state: "LA",
    person: 22995
  },
  {
    location: [44.31062, -69.77949],
    city: "Augusta",
    state: "ME",
    person: 8338
  },
  {
    location: [38.97845, -76.49218],
    city: "Annapolis",
    state: "MD",
    person: 8176
  },
  {
    location: [42.35843, -71.05977],
    city: "Boston",
    state: "MA",
    person: 68909
  },
  {
    location: [42.73253, -84.55553],
    city: "Lansing",
    state: "MI",
    person: 155110
  },
  {
    location: [44.94441, -93.09327],
    city: "St. Paul",
    state: "MN",
    person: 32600
  },
  {
    location: [32.29876, -90.18481],
    city: "Jackson",
    state: "MS",
    person: 16843
  },
  {
    location: [38.5767, -92.17352],
    city: "Jefferson City",
    state: "MO",
    person: 58458
  },
  {
    location: [46.59271, -112.03611],
    city: "Helena",
    state: "MT",
    person: 13630
  },
  {
    location: [40.8, -96.66696],
    city: "Lincoln",
    state: "NE",
    person: 9247
  },
  {
    location: [39.1638, -119.7674],
    city: "Carson City",
    state: "NV",
    person: 25667
  },
  {
    location: [43.20814, -71.53757],
    city: "Concord",
    state: "NH",
    person: 14913
  },
  {
    location: [35.68698, -105.9378],
    city: "Santa Fe",
    state: "NM",
    person: 25958
  },
  {
    location: [42.65258, -73.75623],
    city: "Albany",
    state: "NY",
    person: 11872
  },
  {
    location: [35.7721, -78.63861],
    city: "Raleigh",
    state: "NC",
    person: 128459
  },
  {
    location: [46.80833, -100.78374],
    city: "Bismark",
    state: "ND",
    person: 10769
  },
  {
    location: [39.96118, -82.99879],
    city: "Columbus",
    state: "OH",
    person: 148955
  },
  {
    location: [35.46756, -97.51643],
    city: "Oklahoma City",
    state: "OK",
    person: 36790
  },
  {
    location: [44.9429, -123.0351],
    city: "Salem",
    state: "OR",
    person: 38223
  },
  {
    location: [40.2737, -76.88442],
    city: "Harrisburg",
    state: "PA",
    person: 264
  },
  {
    location: [41.82399, -71.41283],
    city: "Providence",
    state: "RI",
    person: 9246
  },
  {
    location: [34.00071, -81.03481],
    city: "Columbia",
    state: "SC",
    person: 94805
  },
  {
    location: [44.36832, -100.35097],
    city: "Pierre",
    state: "SD",
    person: 13416
  },
  {
    location: [36.16589, -86.78444],
    city: "Nashville",
    state: "TN",
    person: 144313
  },
  {
    location: [30.26715, -97.74306],
    city: "Austin",
    state: "TX",
    person: 357801
  },
  {
    location: [40.76078, -111.89105],
    city: "Salt Lake City",
    state: "UT",
    person: 33720
  },
  {
    location: [44.26006, -72.57539],
    city: "Montpelier",
    state: "VT",
    person: 3988
  },
  {
    location: [37.55376, -77.46026],
    city: "Richmond",
    state: "VA",
    person: 98675
  },
  {
    location: [47.03787, -122.9007],
    city: "Olympia",
    state: "WA",
    person: 78988
  },
  {
    location: [38.34982, -81.63262],
    city: "Charleston",
    state: "WV",
    person: 14608
  },
  {
    location: [43.07305, -89.40123],
    city: "Madison",
    state: "WI",
    person: 44398
  },
  {
    location: [41.13998, -104.82025],
    city: "Cheyenne",
    state: "WY",
    person: 44398
  },
  ];