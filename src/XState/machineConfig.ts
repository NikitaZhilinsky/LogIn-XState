import { isValidElement } from 'react';
import { Machine } from 'xstate';

export const machineConfig = Machine(
  {
    id: 'LogIn',
    initial: 'idle',
    // context: {
    //   name: '',
    //   surname: '',
    // },
    states: {
      idle: {
        on: {
          SUBMIT: [
            {
              target: 'loading',
              cond: 'isValid',
            },
            {
              target: 'signError',
            },
          ] 
        },
      },
      loading: {
        on: {
          onDone: {
            target: 'signedIn',
          },
          onError: {
            target: 'signError',
          },
        },
      },
      signError: {
        on: {
          SUBMIT: {
            target: 'loading',
          },
        },
      },
      signedIn: {
        type: 'final',
      },
    },
  },
  {
    guards: {
      isValid: (context, event) => event.data.name !== '' && event.data.surname !== '',
    }
  },
)

// export const machineConfig = Machine({
//   id: 'LogIn',
//   initial: 'dataEntry',
//   context: {
//     name: '',
//     surname: '',
//   },
//   states: {
//     dataEntry: {
//       on: {
//         ENTER_NAME: {
//           actions: 'cacheName', 
//         },
//         ENTER_SURNAME: {
//           actions: 'cacheSurame', 
//         },
//         SUBMIT: {
//           target: 'submitting',
//         }, 
//       }
//     },
//     submitting: {
//       invoke: {
//         src: 'submit',
//         onDone: {
//           target: 'signedIn',
//         },
//         onError: {
//           target: 'signError',
//         },
//       }
//     },
//     signedIn: {
//       type: 'final',
//     },
//     signError: {
//       on: {
//         ENTER_NAME: {
//           target: 'dataEntry',
//           actions: 'cacheName', 
//         },
//         ENTER_SURNAME: {
//           target: 'dataEntry',
//           actions: 'cacheSurame', 
//         },
//       }
//     },
//   }
// })

// export const machineConfig = Machine({
//   id: 'LogIn',
//   initial: 'dataEntry',
//   context: {
//     name: '',
//     surname: '',
//   },
//   states: {
//     dataEntry: {
//       on: {
//         ENTER_NAME: {
//           actions: 'cacheName', 
//         },
//         ENTER_SURNAME: {
//           actions: 'cacheSurame', 
//         },
//         // NAME_INCORRECT: [
//         //   {
//         //     cond: 'isNameTooShort',
//         //     target: 'nameError.tooShort'
//         //   },
//         //   {
//         //     cond: 'isBadNameFormat',
//         //     target: 'nameError.badFormat'
//         //   },
//         // ],
//         // SURNAME_INCORRECT: [ 
//         //   {
//         //     cond: 'isSurnameTooShort',
//         //     target: 'surnameError.tooShort'
//         //   },
//         //   {
//         //     cond: 'isBadSurnameFormat',
//         //     target: 'surnameError.badFormat'
//         //   },
//         // ],
//         SUBMIT: {
//             target: 'checkingInfo',
//         }, 
//       }
//     },
//     checkingInfo: {
//       invoke: {
//         src: 'requestSignIn',
//         onDone: {
//           target: 'signedIn'
//         },
//         onError: {
//           target: ''
//         },
//       }
//     },
//     nameError: {
//       on: {
//         ENTER_NAME: {
//           actions: 'cacheName', 
//           target: 'dataEntry',
//         },
//       },
//       initial: 'tooShort',
//       states: {
//         tooShort: {},
//         badFormat: {},
//       },
//     },
//     surnameError: {
//       on: {
//         ENTER_SURNAME: {
//           actions: 'cacheSurname', 
//           target: 'dataEntry',
//         },
//       },
//       initial: 'tooShort',
//       states: {
//         tooShort: {},
//         badFormat: {},
//       },
//     },
//     signedIn: {
//       type: 'final',
//     },
//     onDone: {
//       actions: 'onAuthentication'
//     },
//   }
// })