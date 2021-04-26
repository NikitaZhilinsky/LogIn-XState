import { Machine, assign, DoneInvokeEvent } from 'xstate';

export interface Context {
  name: string;
  surname: string;
}

type Event = DoneInvokeEvent<any>;

const isNameEmpty = (context: Context) => context.name.length === 0;
const isSurnameEmpty = (context: Context, _) => context.surname.length == 0;

export const machineConfig = Machine<Context, Event>(
  {
    id: 'LogIn',
    initial: 'editing',
    context: {
      name: '',
      surname: '',
    },
    states: {
      editing: {
        on: {
          CHANGE_NAME: {
            actions: 'changeUserName',
          },
          CHANGE_SURNAME: {
            actions: 'changeUserSurname',
          },
          NAME_BLUR: {
            cond: isNameEmpty,
            // cond: (context: Context, _) => context.name.length == 0,
            target: 'nameError.tooShort',
          },
          SURNAME_BLUR: {
            cond: isSurnameEmpty,
            target: 'surnameError.tooShort',
          },
          SUBMIT: [
            {
              cond: isNameEmpty,
              // cond: (context: Context, _) => context.name.length == 0,
              target: 'nameError.tooShort',
            },
            {
              cond: isSurnameEmpty,
              target: 'surnameError.tooShort',
            },
            {
              // target: 'settingsEditing',
              target: 'submiting',
            },
          ], 
        },
      },
      submiting: {
        on: {
          REGISTER: {
            target: 'signedIn',
          },
          CHANGE: {
            target: 'editing',
          },
        },
      },
      // settingsEditing: {
      //   on: {
      //     CHANGE_NAME: {
      //       actions: 'changeUserName',
      //     },
      //     CHANGE_SURNAME: {
      //       actions: 'changeUserSurname',
      //     },
      //     NAME_BLUR: {
      //       cond: isNameEmpty,
      //       // cond: (context: Context, _) => context.name.length == 0,
      //       target: 'nameError.tooShort',
      //     },
      //     SURNAME_BLUR: {
      //       cond: isSurnameEmpty,
      //       target: 'surnameError.tooShort',
      //     },
      //     SUBMIT: [
      //       {
      //         cond: isNameEmpty,
      //         // cond: (context: Context, _) => context.name.length == 0,
      //         target: 'nameError.tooShort',
      //       },
      //       {
      //         cond: isSurnameEmpty,
      //         target: 'surnameError.tooShort',
      //       },
      //       {
      //         target: 'editing',
      //       },
      //     ], 
      //   },
      // },
      nameError: {
        on: {
          CHANGE_NAME: {
            actions: 'changeUserName',
            target: 'editing',
          },
        },
        initial: 'tooShort',
        states: {
          tooShort: {},
        },
      },
      surnameError: {
        on: {
          CHANGE_SURNAME: {
            actions: 'changeUserSurname',
            target: 'editing',
          },
        },
        initial: 'tooShort',
        states: {
          tooShort: {},
        },
      },
      signedIn: {
        type: 'final',
      },
    },
  },
  {
    actions: {
      changeUserName: assign({
        name: (_, event) => event.data,
      }),
      changeUserSurname: assign({
        surname: (_, event) => event.data,
      }),
    },
  },
  // {
  //   guards: {
  //     isNameEmpty: (context, event) => context.name.length !== 0,
  //     isSurnameEmpty: (context, event) => context.surname.length !== 0,
  //   },
  // },
)