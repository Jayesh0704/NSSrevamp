// <?xml version="1.0" standalone="no"?>
// <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
//  "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

import React from 'react'

export default function Logo() {

    const [flip, set] = useState(false);
    const { x } = useSpring({
        reset: true,
        reverse: flip,
        from: { x: 0 },
        x: 1,
        delay: 2000,
        onRest: () => set(!flip),
    });

    return (
        <div>
            <animated.svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="400.000000pt" height="402.000000pt" viewBox="0 0 400.000000 402.000000"
            preserveAspectRatio="xMidYMid meet" style={{ margin: 20, width: 300, height: 300 }}
                        >
            <g transform="translate(0.000000,402.000000) scale(0.100000,-0.100000)" fill="navy"
            // fill="navy" strokeWidth="20"
            //             stroke="black"
            //             strokeLinecap="round"
            //             strokeLinejoin="round"
            //             strokeDasharray={500}
            //             strokeDashoffset={x.to(x => (1 - x) * 500)}
            >
            <g>
            <g>
            {/* <g fill="floralwhite">
            <path d="M1805 3984 c-242 -27 -441 -83 -650 -183 -225 -108 -385 -223 -561
            -403 -218 -223 -353 -442 -453 -731 -220 -640 -106 -1333 307 -1871 73 -95
            219 -242 322 -325 696 -560 1700 -575 2415 -37 101 76 269 238 348 336 281
            349 440 797 440 1245 0 617 -299 1219 -783 1580 -306 227 -621 349 -1010 390
            -166 18 -213 17 -375 -1z m355 -95 c357 -32 690 -161 975 -377 80 -61 244
            -221 314 -307 154 -188 276 -420 346 -660 104 -356 97 -770 -21 -1125 -203
            -611 -709 -1078 -1339 -1234 -196 -49 -513 -62 -715 -31 -323 50 -611 171
            -865 363 -80 61 -243 220 -315 307 -190 232 -320 509 -387 822 -25 119 -27
            146 -27 368 0 225 1 248 27 370 34 157 83 309 141 431 341 719 1081 1145 1866
            1073z"/>
                <animate attributeName="fill" begin="0s" to="navy" dur="1.5s" fill="freeze" repeatCount="1" />
            </g> */}
            <path d="M1780 3774 c-14 -2 -68 -11 -120 -20 -208 -35 -476 -145 -665 -272
            -760 -512 -1005 -1545 -556 -2342 224 -397 578 -686 1009 -824 909 -292 1894
            200 2210 1105 102 291 125 643 63 947 -128 619 -574 1123 -1170 1323 -201 67
            -286 80 -531 84 -118 2 -226 1 -240 -1z m-23 -92 c26 -21 54 -46 62 -55 11
            -14 26 -16 96 -11 145 12 424 -27 450 -62 21 -28 18 -37 -9 -30 -29 7 -26 14
            -57 -139 -12 -60 -25 -114 -29 -118 -4 -4 -15 5 -25 20 -18 27 -18 31 4 137
            25 122 23 128 -39 124 l-35 -3 -13 -125 c-7 -68 -15 -126 -17 -129 -13 -12
            -45 35 -45 65 0 32 -1 33 -35 27 -46 -7 -85 10 -112 50 -27 38 -28 55 -8 81
            18 24 65 25 99 2 37 -24 32 -35 -14 -29 -35 5 -40 3 -52 -21 -10 -23 -9 -29 3
            -37 19 -13 65 -3 99 21 33 24 52 96 29 112 -14 9 -253 7 -262 -2 -3 -3 2 -63
            10 -133 8 -71 12 -131 9 -135 -13 -12 -54 41 -60 79 -7 41 -14 47 -34 27 -6
            -6 -34 -11 -62 -11 -27 0 -50 -2 -50 -6 0 -4 20 -27 45 -51 24 -24 43 -46 40
            -48 -7 -7 -101 65 -134 104 -17 19 -31 41 -31 49 0 18 37 20 42 3 2 -6 10 -8
            16 -4 16 10 15 58 -1 80 -10 14 -17 15 -41 6 -23 -8 -34 -7 -53 6 -14 9 -21
            19 -17 23 12 10 211 51 247 51 19 0 27 4 25 13 -6 17 -67 57 -97 63 -62 13
            -82 44 -28 44 26 0 48 -10 84 -38z m885 -209 c85 -38 208 -108 266 -151 l32
            -24 0 24 c0 32 -19 88 -36 109 -15 17 -19 59 -6 59 30 0 62 -80 62 -151 0 -43
            4 -52 33 -76 85 -71 264 -264 316 -342 116 -174 194 -339 180 -379 -8 -21 -29
            -31 -29 -14 0 4 -4 13 -9 20 -7 11 -34 3 -130 -38 -67 -29 -125 -50 -127 -47
            -3 3 1 18 10 34 11 23 36 38 115 72 56 24 101 47 101 52 0 14 -33 79 -40 79
            -4 0 -57 -28 -119 -61 -62 -34 -114 -59 -117 -56 -13 12 12 61 38 76 64 35 64
            35 39 67 -15 19 -32 29 -49 29 -18 0 -28 6 -30 18 -9 47 28 107 53 87 7 -6 32
            -40 55 -76 23 -35 44 -64 47 -64 11 0 53 34 53 44 0 17 -130 206 -142 206 -5
            0 -52 -36 -104 -80 -51 -44 -98 -80 -104 -80 -5 0 -10 12 -10 26 0 20 15 41
            56 78 l55 52 -25 23 -26 24 -25 -27 c-29 -32 -57 -29 -92 10 -17 19 -23 37
            -23 75 0 27 5 49 10 49 6 0 10 -12 10 -28 0 -15 7 -38 16 -50 27 -39 74 -22
            74 26 0 13 4 22 9 20 17 -6 91 -78 91 -88 0 -14 11 -12 34 5 16 12 16 16 4 33
            -18 27 -207 202 -217 202 -4 0 -41 -47 -82 -105 -41 -57 -80 -104 -86 -105 -8
            0 -13 13 -13 34 0 26 14 53 58 113 32 43 61 83 65 90 8 12 -60 66 -73 58 -4
            -3 -36 -53 -70 -112 -76 -130 -69 -121 -80 -103 -13 20 -13 67 0 75 19 12 10
            22 -30 34 -48 14 -90 69 -90 118 0 30 3 33 30 33 19 0 33 7 40 21 10 17 6 25
            -23 52 -34 32 -54 67 -38 67 5 0 47 -17 93 -37z m-1262 -9 c3 -3 -6 -13 -19
            -23 l-23 -18 56 -118 c31 -65 54 -120 52 -123 -11 -10 -62 16 -71 36 -10 22
            -35 31 -35 12 0 -15 -56 -40 -90 -40 -33 0 -100 27 -100 40 0 4 7 13 15 20 20
            16 16 49 -7 64 -19 12 -43 1 -97 -43 l-34 -28 82 -100 c44 -55 81 -106 81
            -112 0 -12 -9 -11 -60 5 -8 3 -44 43 -80 89 -35 47 -67 85 -70 85 -3 0 -25
            -18 -50 -39 l-45 -40 38 -31 c20 -17 37 -36 37 -42 0 -6 -20 -33 -45 -59 -50
            -54 -54 -68 -25 -94 36 -33 106 5 119 65 6 29 11 35 31 35 20 0 25 -5 24 -25
            -1 -14 -4 -33 -9 -42 -6 -16 -1 -18 49 -18 65 0 76 -17 14 -22 -38 -3 -43 -6
            -52 -36 -12 -41 -43 -41 -38 1 3 33 0 33 -37 6 -29 -21 -61 -22 -118 -4 -18 6
            -23 3 -23 -10 0 -27 -54 -73 -94 -80 -30 -6 -44 -3 -76 19 l-40 26 -20 -32
            c-11 -18 -19 -37 -17 -42 2 -5 53 -34 115 -65 61 -31 112 -61 112 -68 0 -6
            -14 -14 -30 -18 -25 -5 -48 3 -126 44 -52 28 -100 49 -106 45 -11 -7 -38 -66
            -38 -84 0 -5 18 -10 40 -10 45 0 80 -27 80 -60 0 -25 27 -26 96 -5 58 18 54
            17 54 6 0 -14 -125 -60 -183 -67 -65 -8 -84 8 -46 37 19 15 22 22 13 36 -6 9
            -23 20 -38 24 -26 7 -29 4 -47 -36 -17 -38 -51 -66 -65 -53 -13 13 123 323
            162 368 7 8 29 42 48 74 41 68 198 244 263 295 27 21 40 38 35 43 -16 16 -91
            22 -107 8 -18 -15 -20 -51 -3 -68 22 -22 -2 -26 -30 -5 -17 13 -28 31 -30 51
            -6 59 66 79 160 45 46 -16 48 -16 70 4 33 29 128 89 233 145 66 35 97 47 115
            42 14 -3 27 -8 30 -10z m822 -329 c350 -73 643 -297 802 -613 151 -301 162
            -641 30 -957 -200 -476 -727 -767 -1230 -680 -457 80 -806 403 -927 858 -29
            112 -32 425 -4 527 64 233 156 396 308 549 188 188 446 310 709 335 75 7 234
            -3 312 -19z m-1608 -971 c6 -22 11 -25 32 -20 41 11 48 -4 19 -34 l-27 -29 21
            -35 c26 -41 11 -59 -23 -27 -28 27 -44 26 -73 -1 -29 -27 -39 -18 -24 24 11
            30 10 34 -16 53 l-28 20 34 5 c33 5 43 15 55 53 8 25 23 21 30 -9z m2886 -28
            c36 8 42 -14 10 -34 -24 -14 -26 -41 -5 -68 8 -10 15 -22 15 -26 0 -14 -28 -9
            -44 7 -20 20 -39 19 -61 -5 -29 -32 -38 -24 -31 24 6 39 5 45 -14 51 -25 8
            -26 25 -1 25 26 0 51 10 51 20 0 5 5 21 11 37 l11 28 14 -32 c12 -29 17 -32
            44 -27z m-2772 -369 c2 -10 -26 -49 -67 -95 -38 -42 -69 -78 -68 -79 2 -1 40
            9 85 22 70 19 84 21 89 9 3 -8 4 -16 2 -18 -4 -4 -224 -66 -233 -66 -2 0 -7 7
            -10 16 -4 11 18 40 71 95 42 43 74 81 72 83 -3 3 -43 -6 -89 -19 -77 -22 -91
            -22 -92 2 0 9 211 72 227 69 6 -2 11 -10 13 -19z m2622 -21 c0 -14 -4 -36 -10
            -51 -9 -23 -7 -27 17 -36 37 -14 51 -6 59 36 4 24 11 35 21 33 15 -3 16 -7 7
            -56 -8 -39 -8 -38 37 -47 36 -7 36 -6 49 39 22 80 49 70 29 -11 -21 -86 -13
            -83 -145 -50 l-116 31 5 41 c8 53 24 95 37 95 5 0 10 -11 10 -24z m55 -176
            c112 -39 115 -40 115 -56 0 -21 -26 -17 -109 16 -41 16 -76 28 -78 26 -2 -1
            31 -33 72 -70 62 -56 74 -71 64 -82 -9 -11 -25 -13 -56 -9 -23 3 -63 8 -88 11
            -25 3 -45 2 -45 -3 1 -4 34 -24 75 -43 51 -24 75 -41 75 -52 0 -10 -3 -18 -6
            -18 -4 0 -56 26 -116 57 -143 74 -143 88 0 87 56 -1 102 0 102 1 0 2 -32 34
            -72 73 -63 62 -70 72 -58 86 8 10 20 14 29 10 9 -3 52 -19 96 -34z m-2590 -61
            c6 -17 -8 -34 -71 -92 -100 -93 -113 -102 -126 -89 -8 8 -2 20 22 42 l33 31
            -18 40 c-18 39 -20 40 -59 37 -31 -2 -41 1 -44 13 -3 14 13 18 100 26 159 15
            156 15 163 -8z m71 -137 c23 -41 47 -79 53 -85 6 -6 11 -14 11 -18 0 -13 -195
            -146 -208 -141 -26 8 -8 30 77 86 l89 59 -20 33 c-11 19 -22 34 -25 34 -3 0
            -45 -22 -93 -50 -93 -53 -110 -59 -110 -36 0 8 41 38 90 66 50 28 90 57 90 63
            0 7 -7 21 -15 31 -20 26 -19 38 2 34 10 -2 36 -36 59 -76z m2300 -40 l-26 -41
            27 -20 c14 -12 29 -21 33 -21 3 0 17 18 29 40 18 33 26 39 37 29 11 -9 9 -17
            -12 -47 l-25 -37 28 -22 c15 -13 33 -23 38 -23 6 0 21 18 35 40 23 37 50 53
            50 30 0 -6 -16 -35 -36 -65 l-37 -55 -36 22 c-98 59 -171 109 -171 114 0 9 40
            75 58 97 29 33 35 1 8 -41z m14 -154 c49 -40 89 -78 89 -85 2 -27 -22 -22 -61
            13 l-41 37 -39 -44 -38 -44 42 -37 c29 -26 39 -41 34 -53 -7 -20 2 -26 -108
            68 -36 31 -69 57 -74 57 -4 0 -25 -18 -47 -40 -35 -37 -39 -45 -34 -77 7 -41
            47 -88 83 -97 27 -7 70 12 98 43 22 24 36 27 36 7 0 -7 -18 -30 -40 -50 -31
            -28 -48 -36 -78 -36 -72 0 -132 63 -132 139 0 40 5 49 54 98 30 29 58 53 62
            53 4 0 22 -11 40 -25 18 -14 36 -25 41 -24 4 0 23 19 42 40 l34 40 -36 30
            c-36 29 -49 59 -26 59 6 0 51 -33 99 -72z m-2182 6 c30 -20 55 -79 47 -111 -9
            -37 -73 -102 -112 -112 -45 -13 -90 4 -122 45 -45 58 -8 152 74 190 34 16 78
            11 113 -12z m115 -128 c3 -8 0 -59 -8 -113 -8 -53 -12 -99 -11 -101 2 -1 27
            27 56 63 49 60 80 81 80 54 0 -17 -143 -188 -158 -188 -23 -1 -25 29 -9 132 9
            56 14 103 13 104 -2 2 -27 -28 -57 -66 -52 -67 -71 -82 -83 -62 -7 11 143 191
            160 191 6 0 14 -6 17 -14z m1707 -98 c0 -7 -14 -21 -31 -30 -22 -13 -30 -24
            -27 -40 3 -21 8 -23 64 -23 62 0 86 -11 105 -48 15 -28 -6 -73 -47 -98 -32
            -20 -64 -20 -64 -1 0 5 14 15 32 23 41 18 57 43 42 67 -9 13 -25 17 -74 17
            -56 0 -65 3 -82 26 -24 32 -18 61 20 96 27 25 62 31 62 11z m-1490 -62 c9 -12
            6 -40 -14 -132 -14 -65 -28 -119 -31 -122 -2 -2 -11 -2 -20 2 -11 4 -14 13 -9
            31 12 50 9 59 -28 79 l-37 21 -31 -30 c-23 -22 -33 -26 -42 -17 -9 9 -9 15 2
            26 35 34 184 156 191 156 3 0 12 -7 19 -14z m1310 -49 c0 -8 -18 -22 -40 -32
            -44 -20 -45 -23 -28 -60 13 -28 23 -30 58 -10 32 18 50 19 50 2 0 -8 -18 -21
            -40 -30 -22 -8 -40 -19 -40 -24 0 -4 9 -23 20 -41 l20 -32 40 20 c46 23 60 25
            60 7 0 -11 -98 -67 -119 -67 -4 0 -29 45 -55 100 -45 96 -58 112 -71 90 -3 -5
            -17 -10 -29 -10 -38 0 -76 -43 -76 -87 0 -85 61 -129 135 -99 46 20 45 20 45
            0 0 -18 -57 -44 -97 -44 -104 0 -160 144 -87 221 30 31 86 54 109 45 8 -3 15
            -1 15 5 0 10 94 57 118 58 6 1 12 -5 12 -12z m-1190 -12 c0 -1 -20 -48 -44
            -103 l-45 -102 43 -19 c46 -20 62 -36 47 -45 -7 -5 -117 37 -130 50 -4 3 12
            42 68 166 22 51 34 66 46 62 8 -3 15 -7 15 -9z m279 -99 c22 -23 5 -31 -35
            -17 -27 10 -38 10 -49 1 -24 -20 -17 -42 25 -81 47 -43 52 -78 15 -114 -28
            -29 -63 -32 -105 -10 -33 17 -43 53 -12 40 61 -25 73 -27 87 -15 25 21 17 51
            -25 90 -49 45 -53 79 -13 110 31 25 85 22 112 -4z m587 -33 c3 -21 14 -74 24
            -118 19 -82 18 -95 -4 -95 -9 0 -21 37 -37 110 -12 61 -26 107 -30 103 -4 -4
            -18 -57 -31 -118 -21 -96 -27 -110 -46 -113 -18 -3 -26 5 -41 40 -10 24 -32
            73 -50 109 -35 75 -38 92 -14 87 10 -2 31 -37 54 -88 38 -86 51 -101 57 -65
            17 109 36 167 56 175 42 17 55 12 62 -27z m-423 10 c22 -13 -5 -28 -49 -28
            -48 0 -49 -1 -52 -31 -3 -30 -1 -32 42 -38 32 -5 46 -12 46 -23 0 -13 -8 -14
            -49 -9 l-48 6 -6 -36 c-8 -47 -3 -54 37 -54 35 0 76 -23 59 -33 -14 -9 -110 4
            -128 17 -13 10 -13 24 1 116 8 58 17 111 19 118 4 10 19 12 62 6 32 -3 62 -9
            66 -11z m157 -23 c25 -25 26 -72 0 -95 -17 -15 -17 -20 -5 -39 8 -11 17 -41
            21 -65 10 -61 -16 -51 -37 15 -14 44 -19 49 -47 52 l-32 3 0 -50 c0 -44 -3
            -51 -20 -51 -19 0 -20 7 -20 103 0 146 1 147 66 147 41 0 59 -5 74 -20z"/>
            <path d="M655 1480 c-6 -9 15 -50 25 -50 3 0 21 14 40 30 l35 29 -47 1 c-26 0
            -49 -4 -53 -10z"/>
            <path d="M882 1150 c-18 -11 -40 -36 -48 -55 -13 -31 -13 -39 1 -65 28 -54 99
            -49 150 12 30 36 32 81 5 108 -26 26 -66 25 -108 0z"/>
            <path d="M1261 835 c-17 -15 -31 -33 -31 -40 0 -12 21 -25 40 -25 10 0 34 79
            27 86 -3 3 -19 -7 -36 -21z"/>
            <path d="M1950 641 c0 -46 9 -54 45 -45 60 15 52 84 -10 84 -34 0 -35 -1 -35
            -39z"/>
            <path d="M1720 3547 c-30 -5 -56 -10 -58 -12 -2 -2 6 -20 17 -41 12 -21 21
            -49 21 -61 0 -30 8 -29 56 6 35 26 38 33 36 68 -2 21 -7 41 -10 44 -4 3 -32 1
            -62 -4z"/>
            <path d="M2646 3391 c7 -33 -23 -71 -56 -71 -25 0 -26 -12 -2 -32 47 -42 113
            -30 147 28 28 47 27 48 -42 83 -53 27 -54 27 -47 -8z"/>
            <path d="M1223 3374 c-24 -14 -43 -28 -43 -31 0 -3 12 -14 26 -26 23 -17 25
            -25 20 -59 -6 -35 -5 -38 18 -38 27 0 63 38 72 77 7 27 -23 103 -40 103 -6 0
            -30 -12 -53 -26z"/>
            <path d="M794 3028 c-28 -29 -66 -75 -84 -101 l-32 -49 48 7 c63 9 94 29 94
            60 0 14 15 41 34 63 27 29 32 41 25 55 -16 27 -31 21 -85 -35z"/>
            <path d="M740 2863 c-52 -8 -55 -13 -25 -33 49 -32 95 -21 95 22 0 18 -14 20
            -70 11z"/>
            </g>
            <g fill="tomato">
            <path d="M1779 2990 c-48 -10 -127 -35 -175 -56 -107 -45 -254 -138 -254 -159
            0 -5 69 -79 154 -164 84 -86 168 -173 187 -194 24 -27 44 -39 69 -42 43 -5 90
            -53 90 -92 0 -17 16 -43 47 -77 26 -28 51 -52 55 -54 5 -2 8 30 8 72 0 58 -5
            83 -21 111 -23 39 -20 93 6 115 13 10 15 57 15 286 l0 274 -47 -1 c-27 0 -87
            -9 -134 -19z"/>
            <path d="M2080 2741 c0 -253 1 -273 20 -310 22 -41 20 -81 -6 -102 -10 -8 -14
            -37 -14 -107 l0 -96 55 54 c41 41 55 61 55 83 0 40 49 87 91 87 28 0 54 22
            218 183 102 100 187 185 189 189 2 4 -9 19 -25 33 -138 125 -347 222 -535 249
            l-48 7 0 -270z"/>
            <path d="M1207 2635 c-117 -149 -182 -308 -212 -517 l-7 -48 295 0 c250 0 296
            2 307 15 16 19 80 19 106 0 13 -9 44 -14 94 -15 l74 0 -54 55 c-30 30 -63 55
            -73 55 -24 0 -77 53 -77 77 0 16 -377 421 -401 431 -4 2 -28 -22 -52 -53z"/>
            <path d="M2578 2440 c-109 -106 -198 -198 -198 -205 0 -22 -50 -75 -71 -75
            -18 0 -109 -74 -109 -89 0 -11 105 1 125 15 25 18 85 17 109 -1 16 -12 68 -15
            288 -15 249 0 268 1 268 18 0 43 -23 154 -47 227 -28 89 -103 239 -142 286
            l-26 31 -197 -192z"/>
            <path d="M994 1938 c-6 -10 13 -130 33 -203 35 -131 194 -410 230 -403 6 2 99
            89 206 195 142 139 197 200 202 222 8 36 57 81 89 81 13 0 42 21 74 53 29 29
            52 55 52 57 0 3 -36 4 -80 3 -54 -1 -87 -7 -102 -17 -28 -20 -77 -20 -105 -1
            -18 13 -71 16 -308 18 -158 1 -289 -1 -291 -5z"/>
            <path d="M2160 1940 c1 -16 103 -110 119 -110 30 0 81 -48 81 -77 0 -18 41
            -68 159 -191 87 -92 172 -180 189 -195 l30 -28 35 43 c112 138 201 353 209
            506 l3 52 -269 1 c-229 0 -271 -2 -285 -15 -23 -21 -75 -20 -107 0 -23 16
            -164 27 -164 14z"/>
            <path d="M2080 1783 c0 -45 6 -71 21 -97 22 -39 20 -85 -7 -107 -11 -9 -14
            -60 -14 -290 0 -259 1 -279 18 -279 9 0 58 9 107 19 140 29 293 100 403 188
            l42 35 -182 189 c-146 152 -189 191 -219 199 -42 12 -79 51 -79 84 0 12 -20
            44 -45 71 l-44 50 -1 -62z"/>
            <path d="M1903 1788 c-22 -24 -44 -56 -48 -73 -9 -41 -31 -63 -74 -75 -27 -7
            -86 -58 -233 -201 -109 -105 -198 -195 -198 -200 0 -18 179 -126 267 -162 94
            -38 226 -67 299 -67 l44 0 0 276 c0 261 -1 277 -20 301 -25 32 -25 70 0 108
            20 30 29 135 12 135 -4 0 -26 -19 -49 -42z"/>
            </g>
            </g>
            </g>
            </animated.svg>
        </div>
    )
}



