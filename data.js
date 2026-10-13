var APP_DATA = {
  "scenes": [
    {
      "id": "0-lounge-area",
      "name": "LOUNGE AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.1502808482793796,
        "pitch": 0.005253846478471047,
        "fov": 1.397892632121691
      },
      "linkHotspots": [
        {
          "yaw": 2.019011691560907,
          "pitch": 0.04022936149215184,
          "rotation": 5.497787143782138,
          "target": "1-cabin-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cabin-area",
      "name": "CABIN AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.3849416141040365,
        "pitch": 0.012062988586674095,
        "fov": 1.397892632121691
      },
      "linkHotspots": [
        {
          "yaw": -2.5857589002574883,
          "pitch": 0.05243719265964053,
          "rotation": 0,
          "target": "0-lounge-area"
        },
        {
          "yaw": 3.0886600990307373,
          "pitch": 0.017522754437898413,
          "rotation": 0,
          "target": "2-work-space-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-work-space-1",
      "name": "WORK SPACE 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.060415243338267643,
        "pitch": 0.0018466217068979773,
        "fov": 1.397892632121691
      },
      "linkHotspots": [
        {
          "yaw": 1.964358437719186,
          "pitch": 0.09969139026261864,
          "rotation": 1.5707963267948966,
          "target": "1-cabin-area"
        },
        {
          "yaw": 1.2178324927927875,
          "pitch": 0.08913331804842528,
          "rotation": 4.71238898038469,
          "target": "0-lounge-area"
        },
        {
          "yaw": -0.39706933094736563,
          "pitch": 0.15811487086486586,
          "rotation": 0,
          "target": "3-work-space-2"
        },
        {
          "yaw": 0.3761390744004629,
          "pitch": 0.12104938066476834,
          "rotation": 0,
          "target": "4-work-space-3"
        },
        {
          "yaw": -1.3762774451208912,
          "pitch": 0.07648491955101377,
          "rotation": 0,
          "target": "8-cabin-area-1"
        },
        {
          "yaw": -2.3824607210072344,
          "pitch": 0.09859106957114427,
          "rotation": 4.71238898038469,
          "target": "5-team-lead-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-work-space-2",
      "name": "WORK SPACE 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.397892632121691
      },
      "linkHotspots": [
        {
          "yaw": 0.972014137264523,
          "pitch": 0.19389527922428584,
          "rotation": 9.42477796076938,
          "target": "2-work-space-1"
        },
        {
          "yaw": -0.5471599758894392,
          "pitch": 0.09826904987392915,
          "rotation": 3.141592653589793,
          "target": "4-work-space-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-work-space-3",
      "name": "WORK SPACE 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5746160921950789,
        "pitch": 0,
        "fov": 1.397892632121691
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 3.141592653589793,
          "target": "2-work-space-1"
        },
        {
          "yaw": 1.0084944140881813,
          "pitch": 0.15674426595477975,
          "rotation": 3.141592653589793,
          "target": "3-work-space-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-team-lead-1",
      "name": "TEAM LEAD 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.766602366681397,
        "pitch": 0.005539865120693932,
        "fov": 1.397892632121691
      },
      "linkHotspots": [
        {
          "yaw": 3.0408414194871725,
          "pitch": 0.10583746948798911,
          "rotation": 1.5707963267948966,
          "target": "2-work-space-1"
        },
        {
          "yaw": -1.7300749433936105,
          "pitch": 0.14548261030331489,
          "rotation": 0,
          "target": "7-team-lead-3"
        },
        {
          "yaw": -0.6145192813687661,
          "pitch": -0.014655666232917142,
          "rotation": 4.71238898038469,
          "target": "6-team-lead-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-team-lead-2",
      "name": "TEAM LEAD 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6698611912793089,
          "pitch": 0.01110694815810298,
          "rotation": 0,
          "target": "5-team-lead-1"
        },
        {
          "yaw": 2.89764256410648,
          "pitch": 0.09056831721537328,
          "rotation": 0,
          "target": "7-team-lead-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-team-lead-3",
      "name": "TEAM LEAD 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.3501784723839698,
        "pitch": 0.3845893562936169,
        "fov": 1.397892632121691
      },
      "linkHotspots": [
        {
          "yaw": -1.5130548059431614,
          "pitch": 0.10895068070697889,
          "rotation": 0,
          "target": "5-team-lead-1"
        },
        {
          "yaw": 3.0217502191517926,
          "pitch": 0.053552029500039566,
          "rotation": 0,
          "target": "6-team-lead-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-cabin-area-1",
      "name": "CABIN AREA 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5638756044905087,
        "pitch": -0.007386486827591909,
        "fov": 1.397892632121691
      },
      "linkHotspots": [
        {
          "yaw": 1.8078515148121506,
          "pitch": 0.21912828234456327,
          "rotation": 4.71238898038469,
          "target": "2-work-space-1"
        },
        {
          "yaw": -2.732775708170861,
          "pitch": 0.039101212130283614,
          "rotation": 3.141592653589793,
          "target": "9-cabin-area-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cabin-area-2",
      "name": "CABIN AREA 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.43969009122090164,
        "pitch": 0.00024171567508979308,
        "fov": 1.397892632121691
      },
      "linkHotspots": [
        {
          "yaw": -0.0594828397052094,
          "pitch": 0.0671119727777203,
          "rotation": 0,
          "target": "8-cabin-area-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
