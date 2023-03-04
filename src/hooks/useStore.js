import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Div1": {
      "callbacks": {}
    },
    "Div2": {
      "callbacks": {}
    },
    "Menu2": {
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true
      },
      "callbacks": {}
    },
    "Carousel1": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel2": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Accordion2": {
      "custom": {
        "title": [
          "What is php ?"
        ],
        "description": [
          "php is a scripting language for backend programming php stand for Prepossisor hyper text "
        ],
        "open": [
          false
        ]
      },
      "callbacks": {}
    },
    "Accordion3": {
      "custom": {
        "title": [
          "What is php ?"
        ],
        "description": [
          "php is a scripting language for backend programming php stand for Prepossisor hyper text "
        ],
        "open": [
          false
        ]
      },
      "callbacks": {}
    },
    "Accordion4": {
      "custom": {
        "title": [
          "What is php ?"
        ],
        "description": [
          "php is a scripting language for backend programming php stand for Prepossisor hyper text "
        ],
        "open": [
          false
        ]
      },
      "callbacks": {}
    },
    "Accordion5": {
      "custom": {
        "title": [
          "What is php ?"
        ],
        "description": [
          "php is a scripting language for backend programming php stand for Prepossisor hyper text "
        ],
        "open": [
          false
        ]
      },
      "callbacks": {}
    },
    "Carousel3": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo192.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Countdown1": {
      "custom": {
        "days": 12,
        "hours": 12,
        "minutes": 15,
        "seconds": 13,
        "frozen": false,
        "showDays": false,
        "showHours": true,
        "showMinutes": true,
        "showSeconds": true
      },
      "callbacks": {}
    },
    "Carousel4": {
      "custom": {
        "items": [],
        "startTile": 10,
        "imageItems": [
          "/app-assets/logo192.png",
          "/app-assets/subrota_chandra.jpg",
          "/app-assets/tailwind-css.PNG",
          "/app-assets/hh.PNG"
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel5": {
      "custom": {
        "items": [
          "Subrota",
          "Sunoyona",
          "Crash",
          "GF",
          "Life",
          "Wife"
        ],
        "startTile": 100,
        "imageItems": [
          "/app-assets/logo192.png",
          "/app-assets/subrota_chandra.jpg",
          "/app-assets/tailwind-css.PNG",
          "/app-assets/logo192.png",
          "/app-assets/hh.PNG",
          "/app-assets/logo192.png"
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Dropdown1": {
      "custom": {
        "values": [],
        "selectedValue": "click on me",
        "displayedValues": [
          "Heloo2",
          "Heloo2",
          "Heloo2"
        ]
      },
      "callbacks": {}
    },
    "TextBox30": {
      "custom": {
        "text": "home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "About": {
    "Div3": {
      "callbacks": {}
    },
    "Flex1": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "TextBox1": {
      "custom": {
        "text": "Thansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with usThansk to join with us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox20": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/About"
            }
          }
        ]
      }
    },
    "TextBox21": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Contact"
            }
          }
        ]
      }
    },
    "TextBox22": {
      "custom": {
        "text": "Service"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Service"
            }
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "Contact": {
    "Flex2": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Input5": {
      "custom": {
        "value": "",
        "placeholder": "Placeholder Text"
      },
      "callbacks": {}
    },
    "Input6": {
      "custom": {
        "value": "",
        "placeholder": "Placeholder Text"
      },
      "callbacks": {}
    },
    "Input7": {
      "custom": {
        "value": "",
        "placeholder": "Placeholder Text"
      },
      "callbacks": {}
    },
    "Input8": {
      "custom": {
        "value": "",
        "placeholder": "Placeholder Text"
      },
      "callbacks": {}
    },
    "TextBox2": {
      "custom": {
        "text": "Contact us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "custom": {
        "text": "Service"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Service"
            }
          }
        ]
      }
    },
    "TextBox16": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Contact"
            }
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/About"
            }
          }
        ]
      }
    },
    "TextBox18": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    }
  },
  "Service": {
    "Div4": {
      "callbacks": {}
    },
    "Flex7": {
      "callbacks": {}
    },
    "TextBox24": {
      "custom": {
        "text": "Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "custom": {
        "text": "Service"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Service.jsx"
            }
          }
        ]
      }
    },
    "TextBox27": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Contact"
            }
          }
        ]
      }
    },
    "TextBox28": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/About"
            }
          }
        ]
      }
    },
    "TextBox29": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
