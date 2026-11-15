// Campaign generated from a fixed seed; every shortest route verified by BFS.
export const LEVELS=[
  {
    "id": 1,
    "name": "The first dispatch",
    "note": "One letter. One depot. Follow the connected ink lines, then shift a whole district when the route runs out.",
    "n": 4,
    "tiles": [
      6,
      10,
      12,
      0,
      5,
      0,
      5,
      0,
      3,
      10,
      9,
      0,
      0,
      0,
      0,
      0
    ],
    "start": 0,
    "exit": 10,
    "stamps": [
      8
    ],
    "locked": [],
    "offsets": [
      0,
      1,
      0,
      0
    ],
    "par": 5,
    "solution": [
      [
        "s",
        1,
        -1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        2
      ],
      [
        "m",
        1
      ],
      [
        "m",
        1
      ]
    ]
  },
  {
    "id": 2,
    "name": "The shifting street",
    "note": "The brass arrows move every tile in a district. If you are on it, you ride with it.",
    "n": 4,
    "tiles": [
      5,
      3,
      9,
      14,
      12,
      12,
      14,
      12,
      11,
      12,
      14,
      14,
      6,
      14,
      11,
      10
    ],
    "start": 7,
    "exit": 14,
    "stamps": [
      6
    ],
    "locked": [],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 6,
    "solution": [
      [
        "m",
        3
      ],
      [
        "m",
        1
      ],
      [
        "s",
        2,
        -1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        3
      ],
      [
        "m",
        2
      ]
    ]
  },
  {
    "id": 3,
    "name": "Borrowed tracks",
    "note": "A shift changes the north-south connections. Find the seam where two tracks can meet.",
    "n": 4,
    "tiles": [
      0,
      11,
      7,
      6,
      14,
      11,
      0,
      0,
      14,
      5,
      9,
      0,
      13,
      12,
      14,
      11
    ],
    "start": 9,
    "exit": 15,
    "stamps": [
      3
    ],
    "locked": [],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 11,
    "solution": [
      [
        "s",
        0,
        -1
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "s",
        2,
        -1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        2
      ],
      [
        "m",
        3
      ],
      [
        "m",
        2
      ],
      [
        "s",
        2,
        -1
      ],
      [
        "m",
        2
      ]
    ]
  },
  {
    "id": 4,
    "name": "Across the water",
    "note": "The canals have no bridges until you move the streets into place.",
    "n": 4,
    "tiles": [
      11,
      5,
      10,
      12,
      7,
      13,
      12,
      12,
      12,
      5,
      6,
      0,
      6,
      6,
      5,
      12
    ],
    "start": 8,
    "exit": 5,
    "stamps": [
      3
    ],
    "locked": [],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 10,
    "solution": [
      [
        "s",
        0,
        -1
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "s",
        2,
        1
      ],
      [
        "s",
        3,
        -1
      ],
      [
        "m",
        2
      ],
      [
        "s",
        2,
        -1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        0
      ],
      [
        "m",
        0
      ],
      [
        "m",
        2
      ]
    ]
  },
  {
    "id": 5,
    "name": "Return to sender",
    "note": "The depot travels with its district too. A familiar place can be somewhere new.",
    "n": 4,
    "tiles": [
      11,
      12,
      14,
      10,
      10,
      3,
      13,
      6,
      5,
      3,
      7,
      6,
      13,
      9,
      7,
      6
    ],
    "start": 7,
    "exit": 3,
    "stamps": [
      11
    ],
    "locked": [],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 12,
    "solution": [
      [
        "s",
        0,
        -1
      ],
      [
        "s",
        1,
        -1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        2
      ],
      [
        "s",
        2,
        -1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        2
      ],
      [
        "s",
        3,
        -1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        0
      ],
      [
        "m",
        0
      ],
      [
        "m",
        1
      ]
    ]
  },
  {
    "id": 6,
    "name": "The harbor wakes",
    "note": "The last boat sounds its horn. The first district is ready for its dawn delivery.",
    "n": 4,
    "tiles": [
      5,
      14,
      14,
      5,
      9,
      9,
      6,
      10,
      13,
      9,
      10,
      3,
      3,
      0,
      9,
      3
    ],
    "start": 11,
    "exit": 2,
    "stamps": [
      12
    ],
    "locked": [],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 10,
    "solution": [
      [
        "s",
        1,
        1
      ],
      [
        "m",
        0
      ],
      [
        "s",
        1,
        1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        2
      ],
      [
        "m",
        0
      ],
      [
        "m",
        0
      ],
      [
        "m",
        1
      ],
      [
        "m",
        1
      ],
      [
        "m",
        0
      ]
    ]
  },
  {
    "id": 7,
    "name": "Two addresses",
    "note": "Two addresses, any order. Keep both letters safe before you return.",
    "n": 4,
    "tiles": [
      14,
      10,
      7,
      7,
      7,
      14,
      12,
      14,
      12,
      6,
      5,
      10,
      7,
      5,
      3,
      14
    ],
    "start": 13,
    "exit": 12,
    "stamps": [
      0,
      2
    ],
    "locked": [],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 12,
    "solution": [
      [
        "s",
        2,
        -1
      ],
      [
        "m",
        0
      ],
      [
        "s",
        2,
        -1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        0
      ],
      [
        "m",
        2
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        2
      ],
      [
        "m",
        2
      ],
      [
        "m",
        2
      ]
    ]
  },
  {
    "id": 8,
    "name": "Countercurrent",
    "note": "Sometimes the best way forward is to ride a district in the other direction.",
    "n": 4,
    "tiles": [
      12,
      14,
      3,
      0,
      10,
      9,
      9,
      5,
      11,
      0,
      9,
      5,
      0,
      3,
      3,
      12
    ],
    "start": 10,
    "exit": 1,
    "stamps": [
      15,
      6
    ],
    "locked": [],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 14,
    "solution": [
      [
        "s",
        0,
        1
      ],
      [
        "s",
        1,
        -1
      ],
      [
        "m",
        0
      ],
      [
        "s",
        2,
        -1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        2
      ],
      [
        "m",
        1
      ],
      [
        "m",
        3
      ],
      [
        "m",
        0
      ],
      [
        "m",
        0
      ],
      [
        "m",
        0
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        0
      ]
    ]
  },
  {
    "id": 9,
    "name": "A locked district",
    "note": "One district is fixed for repair. Its neighbors can still come to meet it.",
    "n": 4,
    "tiles": [
      13,
      11,
      0,
      12,
      6,
      12,
      7,
      11,
      7,
      3,
      7,
      0,
      7,
      7,
      10,
      3
    ],
    "start": 12,
    "exit": 14,
    "stamps": [
      3,
      4
    ],
    "locked": [
      3
    ],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 13,
    "solution": [
      [
        "m",
        0
      ],
      [
        "m",
        0
      ],
      [
        "m",
        1
      ],
      [
        "m",
        2
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "s",
        2,
        1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        0
      ],
      [
        "m",
        2
      ],
      [
        "s",
        1,
        -1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        2
      ],
      [
        "m",
        1
      ]
    ]
  },
  {
    "id": 10,
    "name": "The long way home",
    "note": "There is no clock. Study the seams. The harbor can wait.",
    "n": 4,
    "tiles": [
      9,
      9,
      6,
      6,
      11,
      10,
      7,
      9,
      10,
      5,
      12,
      12,
      14,
      0,
      5,
      3
    ],
    "start": 7,
    "exit": 10,
    "stamps": [
      4,
      6
    ],
    "locked": [],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 12,
    "solution": [
      [
        "m",
        0
      ],
      [
        "s",
        0,
        1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        0
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        3
      ],
      [
        "s",
        2,
        1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        2
      ],
      [
        "s",
        2,
        -1
      ],
      [
        "m",
        0
      ]
    ]
  },
  {
    "id": 11,
    "name": "Passing places",
    "note": "A dead end is only a dead end in the current arrangement.",
    "n": 4,
    "tiles": [
      11,
      6,
      6,
      11,
      10,
      13,
      12,
      6,
      6,
      11,
      6,
      6,
      14,
      9,
      12,
      13
    ],
    "start": 0,
    "exit": 13,
    "stamps": [
      7,
      10
    ],
    "locked": [],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 15,
    "solution": [
      [
        "s",
        0,
        -1
      ],
      [
        "m",
        3
      ],
      [
        "m",
        3
      ],
      [
        "m",
        2
      ],
      [
        "m",
        2
      ],
      [
        "s",
        1,
        -1
      ],
      [
        "s",
        2,
        1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        2
      ],
      [
        "m",
        3
      ],
      [
        "m",
        2
      ],
      [
        "s",
        2,
        -1
      ],
      [
        "s",
        2,
        -1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        2
      ]
    ]
  },
  {
    "id": 12,
    "name": "The tide table",
    "note": "The city keeps its own tide table: four shifts bring a district home.",
    "n": 4,
    "tiles": [
      6,
      14,
      14,
      3,
      9,
      11,
      5,
      14,
      12,
      0,
      5,
      5,
      9,
      0,
      0,
      14
    ],
    "start": 5,
    "exit": 0,
    "stamps": [
      2,
      8
    ],
    "locked": [],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 15,
    "solution": [
      [
        "m",
        0
      ],
      [
        "m",
        1
      ],
      [
        "m",
        2
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "s",
        1,
        1
      ],
      [
        "m",
        2
      ],
      [
        "s",
        2,
        1
      ],
      [
        "m",
        2
      ],
      [
        "s",
        2,
        -1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        2
      ],
      [
        "s",
        3,
        -1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        0
      ],
      [
        "m",
        0
      ]
    ]
  },
  {
    "id": 13,
    "name": "Three last letters",
    "note": "Three letters remain. Every envelope is a stop, not a destination.",
    "n": 4,
    "tiles": [
      10,
      10,
      6,
      7,
      13,
      0,
      12,
      3,
      11,
      12,
      7,
      5,
      0,
      10,
      11,
      12
    ],
    "start": 6,
    "exit": 10,
    "stamps": [
      7,
      15,
      1
    ],
    "locked": [],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 18,
    "solution": [
      [
        "m",
        2
      ],
      [
        "m",
        2
      ],
      [
        "m",
        1
      ],
      [
        "m",
        3
      ],
      [
        "m",
        0
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "s",
        1,
        -1
      ],
      [
        "s",
        1,
        -1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        0
      ],
      [
        "m",
        1
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "m",
        1
      ],
      [
        "m",
        3
      ],
      [
        "m",
        3
      ],
      [
        "m",
        2
      ],
      [
        "m",
        1
      ],
      [
        "m",
        2
      ]
    ]
  },
  {
    "id": 14,
    "name": "The still quarter",
    "note": "The sleeping quarter will not move tonight. Bring the route to it.",
    "n": 4,
    "tiles": [
      12,
      6,
      5,
      5,
      3,
      12,
      11,
      3,
      11,
      12,
      9,
      7,
      9,
      3,
      3,
      14
    ],
    "start": 4,
    "exit": 7,
    "stamps": [
      12,
      1,
      9
    ],
    "locked": [
      2
    ],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 15,
    "solution": [
      [
        "m",
        1
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "s",
        1,
        -1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        1
      ],
      [
        "s",
        3,
        1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        0
      ],
      [
        "m",
        3
      ],
      [
        "m",
        0
      ],
      [
        "s",
        1,
        1
      ],
      [
        "m",
        3
      ],
      [
        "m",
        0
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "m",
        2
      ]
    ]
  },
  {
    "id": 15,
    "name": "All roads change",
    "note": "Carry the route with you. The atlas is a machine, not a picture.",
    "n": 4,
    "tiles": [
      14,
      9,
      5,
      0,
      6,
      6,
      9,
      9,
      13,
      12,
      11,
      5,
      14,
      10,
      3,
      11
    ],
    "start": 1,
    "exit": 13,
    "stamps": [
      2,
      4,
      8
    ],
    "locked": [],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 17,
    "solution": [
      [
        "m",
        3
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "m",
        2
      ],
      [
        "s",
        0,
        1
      ],
      [
        "s",
        1,
        -1
      ],
      [
        "m",
        0
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        3
      ],
      [
        "m",
        2
      ],
      [
        "s",
        1,
        1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        2
      ],
      [
        "s",
        3,
        1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        1
      ],
      [
        "m",
        1
      ]
    ]
  },
  {
    "id": 16,
    "name": "The midnight exchange",
    "note": "Shift the city around the courier, or carry the courier through the city.",
    "n": 4,
    "tiles": [
      6,
      5,
      14,
      12,
      7,
      9,
      10,
      6,
      0,
      6,
      11,
      6,
      9,
      10,
      10,
      11
    ],
    "start": 12,
    "exit": 13,
    "stamps": [
      9,
      2,
      7
    ],
    "locked": [],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 17,
    "solution": [
      [
        "s",
        0,
        -1
      ],
      [
        "s",
        1,
        1
      ],
      [
        "s",
        2,
        -1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        0
      ],
      [
        "m",
        2
      ],
      [
        "m",
        2
      ],
      [
        "s",
        1,
        1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        2
      ],
      [
        "m",
        3
      ],
      [
        "s",
        2,
        -1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        3
      ],
      [
        "m",
        3
      ]
    ]
  },
  {
    "id": 17,
    "name": "Before the sunrise",
    "note": "The sky is lightening. One more careful dispatch.",
    "n": 4,
    "tiles": [
      9,
      0,
      13,
      6,
      13,
      10,
      9,
      10,
      10,
      0,
      13,
      5,
      14,
      9,
      12,
      11
    ],
    "start": 4,
    "exit": 5,
    "stamps": [
      12,
      10,
      15
    ],
    "locked": [
      3
    ],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 19,
    "solution": [
      [
        "s",
        1,
        -1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        2
      ],
      [
        "m",
        0
      ],
      [
        "m",
        0
      ],
      [
        "s",
        1,
        -1
      ],
      [
        "m",
        2
      ],
      [
        "s",
        2,
        -1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        3
      ],
      [
        "m",
        1
      ],
      [
        "m",
        0
      ],
      [
        "s",
        2,
        1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        0
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "s",
        1,
        1
      ],
      [
        "m",
        2
      ],
      [
        "m",
        3
      ]
    ]
  },
  {
    "id": 18,
    "name": "An atlas of arrivals",
    "note": "Every letter has a home. Bring the atlas to its final arrangement.",
    "n": 4,
    "tiles": [
      7,
      7,
      5,
      5,
      11,
      14,
      0,
      6,
      10,
      14,
      12,
      3,
      14,
      0,
      12,
      3
    ],
    "start": 7,
    "exit": 2,
    "stamps": [
      0,
      15,
      10
    ],
    "locked": [],
    "offsets": [
      0,
      0,
      0,
      0
    ],
    "par": 17,
    "solution": [
      [
        "m",
        2
      ],
      [
        "s",
        2,
        1
      ],
      [
        "m",
        1
      ],
      [
        "m",
        1
      ],
      [
        "m",
        1
      ],
      [
        "m",
        2
      ],
      [
        "s",
        2,
        1
      ],
      [
        "m",
        0
      ],
      [
        "m",
        3
      ],
      [
        "m",
        3
      ],
      [
        "m",
        0
      ],
      [
        "m",
        3
      ],
      [
        "m",
        0
      ],
      [
        "m",
        2
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "s",
        0,
        -1
      ],
      [
        "m",
        0
      ]
    ]
  }
];
